import MIDIPlayer from './index'

class TimidityWorkletProcessor extends AudioWorkletProcessor {
  constructor (args) {
    super()
    this._player = new MIDIPlayer('/')
    this.port.onmessage = this.handleMessage_.bind(this)
  }

  handleMessage_ (event) {
    console.log(event)
  }

  process (inputs, outputs, params) {
    if (this._player._playing) {
      return true
    }
    return true
  }
}

registerModule('midiworklet', TimidityWorkletProcessor)
