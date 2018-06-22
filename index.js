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
    this._playing = false
    this._pendingFetches = {} // instrument -> fetch
    this._songPtr = 0
    this._bufferPtr = 0
    this._array = new Int16Array(BUFFER_SIZE * 2)

    this._onAudioProcess = this._onAudioProcess.bind(this)

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

    const result = this._lib._mid_init('/timidity.cfg')
    if (result !== 0) {
      return this._destroy(new Error('Failed to initialize libtimidity'))
    }

    this._bufferPtr = this._lib._malloc(BUFFER_SIZE * BYTES_PER_SAMPLE)

    debug('Initialized libtimidity')
    this._ready = true
    this.emit('_ready')
  }

  async load (midiBuf) {
    debug('load %o', midiBuf)
    if (this.destroyed) throw new Error('load() called after destroy()')

    /**
     * If player.load() was called outside of a user-initiated event handler,
     * then the AudioContext created here will be suspended. See Chrome's
     * autoplay policy here:
     * https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
     */
    this._createAudioContext()

    if (!this._ready) return this.once('_ready', () => this.load(midiBuf))

    if (typeof midiBuf === 'string') {
      const url = new URL(midiBuf, this._baseUrl)
      this._fetch(url)
        .then(midiBuf => this.load(midiBuf), err => this._destroy(err))
      return
    }
    if (!(midiBuf instanceof Uint8Array)) {
      throw new Error('load(midiBuf) expects a Uint8Array')
    }

    // TODO: destroy previous song

    let songPtr = this._loadSong(midiBuf)

    // Are we missing instrument files?
    let missingCount = this._lib._mid_get_load_request_count(songPtr)
    // Load missing instruments
    if (missingCount > 0) {
      let missingInstruments = this._getMissingInstruments(songPtr, missingCount)
      debug('Fetching instruments: %o', missingInstruments)

      // Wait for all instruments to load
      await Promise.all(
        missingInstruments.map(instrument => this._fetchInstrument(instrument))
      )

      // Retry the song load, now that instruments have been loaded
      this._lib._mid_song_free(songPtr)
      songPtr = this._loadSong(midiBuf)

      // Are we STILL missing instrument files? Then our General MIDI soundset
      // is probably missing instrument files.
      missingCount = this._lib._mid_get_load_request_count(songPtr)

      // Print out missing instrument names
      if (missingCount > 0) {
        missingInstruments = this._getMissingInstruments(songPtr, missingCount)
        debug('Missing instruments: %o', missingInstruments)
      }
    }

    this._songPtr = songPtr
    this.emit('_load')
  }

  _getMissingInstruments (songPtr, missingCount) {
    const missingInstruments = []
    for (let i = 0; i < missingCount; i++) {
      const instrumentPtr = this._lib._mid_get_load_request(songPtr, i)
      const instrument = this._lib.Pointer_stringify(instrumentPtr)
      missingInstruments.push(instrument)
    }
    return missingInstruments
  }

  _createAudioContext () {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    this._audioContext = new AudioContext()
  }

  _loadSong (midiBuf) {
    const optsPtr = this._lib._mid_alloc_options(
      SAMPLE_RATE,
      AUDIO_FORMAT,
      NUM_CHANNELS,
      BUFFER_SIZE
    )

    // Copy the MIDI buffer into the heap
    const midiBufPtr = this._lib._malloc(midiBuf.byteLength)
    this._lib.HEAPU8.set(midiBuf, midiBufPtr)

    // Create a stream
    const iStreamPtr = this._lib._mid_istream_open_mem(midiBufPtr, midiBuf.byteLength)

    // Load the song
    const songPtr = this._lib._mid_song_load(iStreamPtr, optsPtr)

    // Free resources no longer needed
    this._lib._mid_istream_close(iStreamPtr)
    this._lib._free(optsPtr)
    this._lib._free(midiBufPtr)

    if (songPtr === 0) {
      return this._destroy(new Error('Failed to load MIDI file'))
    }

    return songPtr
  }

  async _fetchInstrument (instrument) {
    if (this._pendingFetches[instrument]) {
      // If this instrument is already in the process of being fetched, return
      // the existing promise to prevent duplicate fetches.
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
    const response = await window.fetch(url, opts)
    if (response.status !== 200) throw new Error(`Could not load ${url}`)

    const arrayBuffer = await response.arrayBuffer()
    const buf = new Uint8Array(arrayBuffer)
    return buf
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

    if (!this._songPtr) return this.once('_load', () => this.play())

    this._playing = true
    this._lib._mid_song_start(this._songPtr)
    this._createAudioNode() // Start the 'onaudioprocess' events flowing
  }

  _createAudioNode () {
    this._node = this._audioContext.createScriptProcessor(
      BUFFER_SIZE,
      0,
      NUM_CHANNELS
    )
    this._node.addEventListener('audioprocess', this._onAudioProcess)
    this._node.connect(this._audioContext.destination)
  }

  _onAudioProcess (event) {
    const sampleCount = this._playing
      ? this._readMidiData()
      : 0

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

    if (this._playing && sampleCount === 0) {
      // Reached the end of the file
      this.emit('ended')
      this.seek(0)
      this.pause()
    }
  }

  pause () {
    debug('pause')
    if (this.destroyed) throw new Error('pause() called after destroy()')

    if (!this._songPtr) return this.once('_load', () => this.pause())

    this._playing = false
    // if (this._ready) this._lib._mid_song_pause(this._songPtr)
    // else this._queueCommand('pause')
  }

  seek (time) {
    debug('seek %d', time)
    if (this.destroyed) throw new Error('seek() called after destroy()')

    if (!this._songPtr) return this.once('_load', () => this.seek(time))

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
    if (this.destroyed || !this._songPtr) return 0
    return this._lib._mid_song_get_time(this._songPtr) / 1000
  }

  get duration () {
    if (this.destroyed || !this._songPtr) return 1
    return this._lib._mid_song_get_total_time(this._songPtr) / 1000
  }

  get progress () {
    return this.currentTime / this.duration
  }

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
    debug('destroy')
    if (this.destroyed) throw new Error('destroy() called after destroy()')
    this._destroy()
  }

  _destroy (err) {
    if (this.destroyed) return
    this.destroyed = true

    this._array = null

    if (this._songPtr) {
      this._lib._mid_song_free(this._songPtr)
      this._songPtr = 0
    }

    if (this._bufferPtr) {
      this._lib._free(this._bufferPtr)
      this._bufferPtr = 0
    }

    if (this._node) {
      this._node.disconnect()
      this._node.removeEventListener('audioprocess', this._onAudioProcess)
    }

    if (this._audioContext) {
      this._audioContext.close()
    }

    if (err) this.emit('error', err)
    debug('destroyed (err %o)', err)
  }
}

module.exports = Timidity
