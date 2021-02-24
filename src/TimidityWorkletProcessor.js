import LibTimidity from '../wasm/libtimidity'
import 'regenerator-runtime/runtime'
import fs from 'fs'
import URL from 'url-parse'
// import LibTimidity from './libtimidity'

// Inlined at build time by 'brfs' browserify transform
const TIMIDITY_CFG = fs.readFileSync(
  '../patches/gravis.cfg', // eslint-disable-line node/no-path-concat
  'utf8'
)

// const SAMPLE_RATE = 44100
const AUDIO_FORMAT = 0x8010 // format of the rendered audio 's16'
const NUM_CHANNELS = 2 // stereo (2 channels)
const BYTES_PER_SAMPLE = 2 * NUM_CHANNELS
const BUFFER_SIZE = 128 // buffer size for each render() call

registerProcessor('midiplayer', class extends AudioWorkletProcessor {
  constructor (args) {
    super()
    let baseUrl = args.processorOptions.baseURL
    const midiBuff = args.processorOptions.midiBuff

    if (!baseUrl.endsWith('/')) baseUrl += '/'
    this._baseUrl = new URL(baseUrl).href

    this._songPtr = 0
    this._bufferPtr = 0
    this._array = new Int16Array(BUFFER_SIZE * 2)

    this.oncer=true

    this._lib = LibTimidity({ locateFile: (file) => new URL(file, this._baseUrl).href })
    this._lib.FS.writeFile('/timidity.cfg', TIMIDITY_CFG)
    const result = this._lib._mid_init('/timidity.cfg')
    if (result !== 0) {
      return this._destroy(new Error('Failed to initialize libtimidity'))
    }

    this._bufferPtr = this._lib._malloc(BUFFER_SIZE * BYTES_PER_SAMPLE)

    if (!(midiBuff instanceof Uint8Array)) throw new Error('load() expects a `string` or `Uint8Array` argument')

    this.port.onmessage = this._handleMessage.bind(this)
    this._midiBuf = midiBuff
    this._loadSong(midiBuff).then((songPtr) => {
      this._songPtr = songPtr
      this._reqInstruments(songPtr, midiBuff)
      // Now, wait for failure or all the instruments
    })
  }

  async _handleMessage(message) {
    if(message.data.type === 'instPayload'){
      for(let inst of message.data.buffs){
        this._writeInstrumentFile(inst.instrumentName, inst.instrumentBuff)
      }
      this.port.postMessage(this._lib._mid_get_load_request_count(this._songPtr))
      this._lib._mid_song_free(this._songPtr)
      this._songPtr = await this._loadSong(this._midiBuf)
      this._lib._mid_song_start(this._songPtr)
    } else if (message.data === 'play'){
      this._playing = true
    } else if ( message.data.type === 'seek' ){
      this.seek(message.data.sec)
    } else if ( message.data === 'pause' ){
      this.pause()
    }
  }

  _reqInstruments(songPtr, midiBuff) {
    // Are we missing instrument files?
    let missingCount = this._lib._mid_get_load_request_count(songPtr)
    if (missingCount > 0) {

      const missingInstruments = []
      for (let i = 0; i < missingCount; i++) {
        const instrumentPtr = this._lib._mid_get_load_request(songPtr, i)
        const instrument = this._lib.UTF8ToString(instrumentPtr)
        missingInstruments.push(instrument)
      }
      return missingInstruments
      // Request instruments to be fetched from the main thread
      // missingInstruments.map(instrument => this._reqInstrument(instrument))
      this.port.postMessage({ type: 'missingInstruments', instruments: missingInstruments })
    }
  }


  async _loadSong(midiBuf) {
    const optsPtr = this._lib._mid_alloc_options(
      // sampleRate from AudioWorkletGlobalScope
      sampleRate,
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

  _writeInstrumentFile(instrument, buf) {
    const folderPath = instrument
      .split('/')
      .slice(0, -1) // remove basename
      .join('/')
    this._mkdirp(folderPath)
    this._lib.FS.writeFile(instrument, buf, { encoding: 'binary' })
  }

  _mkdirp(folderPath) {
    const pathParts = folderPath.split('/')
    let dirPath = '/'
    for (let i = 0; i < pathParts.length; i++) {
      const curPart = pathParts[i]
      try {
        this._lib.FS.mkdir(`${dirPath}${curPart}`)
      } catch (err) { }
      dirPath += `${curPart}/`
    }
  }

  _onAudioProcess(outputs) {
    const sampleCount = (this._songPtr && this._playing)
      ? this._readMidiData()
      : 0

    // if (sampleCount > 0 && this._currentUrlOrBuf) {
    //   this._currentUrlOrBuf = null
    //   this.emit('playing')
    //   this._startInterval()
    // }
    if (this.oncer) {
      this.port.postMessage(sampleCount)
      this.port.postMessage(outputs[0][0].length)
      this.oncer = false
    }
    const output0 = outputs[0][0]
    const output1 = outputs[0][1]

    for (let i = 0; i < sampleCount; i++) {
      output0[i] = this._array[i * 2] / 0x7FFF
      output1[i] = this._array[i * 2 + 1] / 0x7FFF
    }

    for (let i = sampleCount; i < BUFFER_SIZE; i++) {
      output0[i] = 0
      output1[i] = 0
    }

    // if (this._songPtr && this._playing && sampleCount === 0) {
    //   // Reached the end of the file
    //   // this.seek(0)
    //   // this.pause()
    //   this._lib._mid_song_start(this._songPtr)
    //   // this.emit('ended')
    // }
  }

  _readMidiData() {
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

  process(inputs, outputs, params) {
    if (this._playing) {
      outputs = this._onAudioProcess(outputs)
    }
    return true
  }
  // noiseTest(outputs){
  //   let output = outputs[0];
  //   for (let channel = 0; channel < output.length; ++channel) {
  //     let outputChannel = output[channel];
  //     for (let i = 0; i < outputChannel.length; ++i) {
  //       outputChannel[i] = 2 * (Math.random() - 0.5) * 0.25;
  //     }
  //   }
  // }
  // process(inputs, outputs, parameters) {
  //   this.noiseTest(outputs)
  //   return true;
  // }

  pause () {
    // if (this.destroyed) throw new Error('pause() called after destroy()')
    this._playing = false
  }

  seek (time) {
    if (!this._songPtr) return // ignore seek if there is no song loaded yet

    const timeMs = Math.floor(time * 1000)
    this._lib._mid_song_seek(this._songPtr, timeMs)
  }
})
