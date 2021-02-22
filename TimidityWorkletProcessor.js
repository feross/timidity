/* eslint-disable space-before-function-paren */
import 'regenerator-runtime/runtime'
import MIDIPlayer from './index'

const BUFFER_SIZE = 16384 // buffer size for each render() call

class TimidityWorkletProcessor extends AudioWorkletProcessor {
  constructor(args) {
    super()
    this._player = new MIDIPlayer('/')
    this._player.load('blue.mid')
    this.port.onmessage = this.handleMessage_.bind(this)
  }

  handleMessage_(event) {
    console.log(event)
  }

  process(inputs, outputs, params) {
    if (this._player._playing) {
      const sampleCount = (this._player._songPtr && this._player._playing)
        ? this._player._readMidiData()
        : 0

      if (sampleCount > 0 && this._player._currentUrlOrBuf) {
        this._player._currentUrlOrBuf = null
        this._player.emit('playing')
        this._player._startInterval()
      }

      const output0 = outputs[0][0]
      const output1 = outputs[0][1]

      for (let i = 0; i < sampleCount; i++) {
        output0[i] = this._player._array[i * 2] / 0x7FFF
        output1[i] = this._player._array[i * 2 + 1] / 0x7FFF
      }

      for (let i = sampleCount; i < BUFFER_SIZE; i++) {
        output0[i] = 0
        output1[i] = 0
      }

      if (this._player._songPtr && this._player._playing && sampleCount === 0) {
        // Reached the end of the file
        this._player.seek(0)
        this._player.pause()
        this._player._lib._mid_song_start(this._songPtr)
        this._player.emit('ended')
      }
      return true
    }
    return true
  }
}

registerProcessor('midiworklet', TimidityWorkletProcessor)
