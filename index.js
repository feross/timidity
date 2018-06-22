const debug = require('debug')('timidity')
const EventEmitter = require('events').EventEmitter
const fs = require('fs')
const LibTimidity = require('./libtimidity')

// Inlined at build time by 'brfs' browserify transform
const TIMIDITY_CFG = fs.readFileSync(
  __dirname + '/freepats.cfg', // eslint-disable-line no-path-concat
  'utf8'
)

const SAMPLE_RATE = 44100
const AUDIO_FORMAT = 0x8010 // format of the rendered audio 's16'
const NUM_CHANNELS = 2 // stereo (2 channels)
const BYTES_PER_SAMPLE = 2 * NUM_CHANNELS
const BUFFER_SIZE = 8192 // buffer size for each render() call

class Timidity extends EventEmitter {
  constructor (baseUrl = '/') {
    super()

    this.destroyed = false

    if (!baseUrl.endsWith('/')) baseUrl += '/'
    this._baseUrl = new URL(baseUrl, window.location.origin).href

    this._ready = false
    this._pendingFetches = {} // instrument -> fetch
    this._songPtr = null
    this._bufferPtr = null
    this._array = new Int16Array(BUFFER_SIZE * 2)

    this._lib = LibTimidity({
      locateFile: file => new URL(file, this._baseUrl).href,
      onRuntimeInitialized: () => this._onLibReady()
    })

    // player.on('playing', () => {})
    // player.on('paused', () => {})
    // player.on('buffering', () => {})
    // player.on('error', (err) => {})
    // player.on('timeupdate', (seconds) => {})
  }

  _onLibReady () {
    this._lib.FS.writeFile('/timidity.cfg', TIMIDITY_CFG)

    const result = this._lib._mid_init(0)
    if (result !== 0) {
      return this._destroy(new Error('Failed to initialize libtimidity'))
    }

    this._bufferPtr = this._lib._malloc(BUFFER_SIZE * BYTES_PER_SAMPLE)

    debug('libtimidity initialized')
    this._ready = true
    this.emit('_ready')
  }

  async load (buf) {
    debug('load %o', buf)
    if (this.destroyed) throw new Error('load() called after destroy()')

    if (!this._ready) return this.on('_ready', () => this.load(buf))
    if (typeof buf === 'string') {
      const url = new URL(buf, this._baseUrl)
      this._fetch(url)
        .then(buf => this.load(buf), err => this._destroy(err))
      return
    }
    if (!(buf instanceof Uint8Array)) {
      throw new Error('load(buf) expects a Uint8Array')
    }

    // TODO: destroy previous song

    /**
     * If player.load() was called outside of a user-initiated event handler,
     * then the AudioContext created here will be suspended. See Chrome's
     * autoplay policy here:
     * https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
     */
    this._createAudioContext()
    this._loadSong(buf)
  }

  _createAudioContext () {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    this._audioContext = new AudioContext()
  }

  async _loadSong (buf) {
    const optsPtr = this._lib._mid_alloc_options(
      SAMPLE_RATE,
      AUDIO_FORMAT,
      NUM_CHANNELS,
      BUFFER_SIZE
    )

    // Copy the MIDI buffer into the heap
    const bufPtr = this._lib._malloc(buf.byteLength)
    this._lib.HEAPU8.set(buf, bufPtr)

    // Load the song
    const iStreamPtr = this._lib._mid_istream_open_mem(bufPtr, buf.byteLength)
    const songPtr = this._lib._mid_song_load(iStreamPtr, optsPtr)

    // Free resources no longer needed
    this._lib._mid_istream_close(iStreamPtr)
    this._lib._free(optsPtr)
    this._lib._free(bufPtr)

    if (songPtr === 0) return this._destroy(new Error('Failed to load song'))

    // Are we missing instrument files?
    const loadRequestCount = this._lib._mid_get_load_request_count(songPtr)
    const missingInstruments = []
    for (let i = 0; i < loadRequestCount; i++) {
      const instrumentPtr = this._lib._mid_get_load_request(songPtr, i)
      const instrument = this._lib.Pointer_stringify(instrumentPtr)
      missingInstruments.push(instrument)
    }

    // Load missing instruments
    if (missingInstruments.length > 0) {
      debug('fetching instruments: %o', missingInstruments)

      await Promise.all(
        missingInstruments.map(instrument => this._fetchInstrument(instrument))
      )

      // Retry the song load
      this._lib._mid_song_free(songPtr)
      return this._loadSong(buf)
    }

    this._songPtr = songPtr

    this.emit('_load')
  }

  async _fetchInstrument (instrument) {
    if (this._pendingFetches[instrument]) {
      return this._pendingFetches[instrument]
    }

    const url = new URL(instrument, this._baseUrl)
    const bufPromise = this._fetch(url)

    this._pendingFetches[instrument] = bufPromise
    const buf = await bufPromise
    this._writeInstrumentFile(instrument, buf)

    delete this._pendingFetches[instrument]

    return buf
  }

  _writeInstrumentFile (instrument, buf) {
    const folderPath = instrument
      .split('/')
      .slice(0, -1) // remove basename
      .join('/')
    this._mkdirp(folderPath)
    this._lib.FS.writeFile(instrument, buf, { encoding: 'binary' })
  }

  _mkdirp (folderPath) {
    const pathParts = folderPath.split('/')
    let dirPath = '/'
    for (let i = 0; i < pathParts.length; i++) {
      const curPart = pathParts[i]
      try {
        this._lib.FS.mkdir(`${dirPath}${curPart}`)
      } catch (err) {}
      dirPath += `${curPart}/`
    }
  }

  async _fetch (url) {
    const opts = {
      mode: 'cors',
      credentials: 'same-origin'
    }
    const res = await window.fetch(url, opts)
    return new Uint8Array(await res.arrayBuffer())
  }

  play () {
    debug('play')
    if (this.destroyed) throw new Error('play() called after destroy()')
    /**
     * If player.load() was called outside of a user-initiated event handler,
     * then the AudioContext will be suspended. However, player.play() (this
     * method) is likely to be called from a user-initiated event handler, so
     * try to resume the AudioContext here. See Chrome's autoplay policy here:
     * https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
     */
    this._audioContext.resume()

    if (!this._ready) return this.on('_load', () => this.play())

    this._lib._mid_song_start(this._songPtr)
    this._createAudioNode() // Start the 'onaudioprocess' events flowing
  }

  _createAudioNode () {
    this._node = this._audioContext.createScriptProcessor(
      BUFFER_SIZE,
      0,
      NUM_CHANNELS
    )
    this._node.addEventListener('audioprocess', event => {
      this._onAudioProcess(event)
    })
    this._node.connect(this._audioContext.destination)
  }

  _onAudioProcess (event) {
    const sampleCount = this._readMidiData()

    const output0 = event.outputBuffer.getChannelData(0)
    const output1 = event.outputBuffer.getChannelData(1)

    for (let i = 0; i < sampleCount; i++) {
      output0[i] = this._array[i * 2] / 0x7FFF
      output1[i] = this._array[i * 2 + 1] / 0x7FFF
    }

    for (let i = sampleCount; i < BUFFER_SIZE; i++) {
      output0[i] = 0
      output1[i] = 0
    }

    if (sampleCount === 0) {
      this.emit('ended')
      this._node.disconnect()
      this._cleanupSong()
    }
  }

  pause () {
    if (this.destroyed) throw new Error('pause() called after destroy()')
    // if (this._ready) this._lib._mid_song_pause(this._songPtr)
    // else this._queueCommand('pause')
  }

  seek (time) {
    if (this.destroyed) throw new Error('seek() called after destroy()')
    const timeMs = Math.floor(time * 1000)
    this._lib._mid_song_seek(this._songPtr, timeMs)
  }

  get volume () {
    if (this.destroyed) return 0
    // TODO
  }

  set volume (volume) {
    if (this.destroyed) return
    // TODO
  }

  get currentTime () {
    if (this.destroyed) return 0
    return this._lib._mid_song_get_time(this._songPtr) / 1000
  }

  get duration () {
    return this._lib._mid_song_get_total_time(this._songPtr) / 1000
  }

  get progress () {
    return this.currentTime / this.duration
  }

  // Render some of the MIDI
  // Expects an array view with a data type matching the format
  // (e.g. Int16Array for s16, or Uint8Array for u8)
  _readMidiData () {
    const byteCount = this._lib._mid_song_read_wave(
      this._songPtr,
      this._bufferPtr,
      BUFFER_SIZE * BYTES_PER_SAMPLE
    )
    const sampleCount = byteCount / BYTES_PER_SAMPLE

    // Was anything output? If not, don't bother copying anything
    if (sampleCount === 0) {
      return 0
    }

    this._array.set(
      this._lib.HEAP16.subarray(this._bufferPtr / 2, (this._bufferPtr + byteCount) / 2)
    )

    return sampleCount
  }

  destroy () {
    if (this.destroyed) throw new Error('destroy() called after destroy()')
    this._destroy()
  }

  _destroy (err) {
    if (this.destroyed) return
    this.destroyed = true

    this.emit('error', err)

    this._cleanupSong()
    this._lib._free(this._bufferPtr)
    this._bufferPtr = 0
  }

  _cleanupSong () {
    if (this._songPtr) {
      this._lib._mid_song_free(this._songPtr)
      this._songPtr = 0
    }
  }
}

module.exports = Timidity
