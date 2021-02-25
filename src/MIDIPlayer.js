// import "core-js/stable"
import "regenerator-runtime/runtime"
import URL from 'url-parse'
import { EventEmitter } from 'events'

export function createURL(str){
  return new URL(str)
}

class MIDIPlayer extends EventEmitter {

  constructor(worklet, context){
    super()
    this._worklet = worklet
    this._worklet.port.onmessage = this._handleMessage.bind(this)
    this.context = context
    this._worklet.connect(context.destination)
  }

  async _handleMessage(message){
    console.log(message)
      if (message.data.type === 'missingInstruments') {
        let instBuffs=[]
        try {
          instBuffs = await Promise.all(message.data.instruments.map((instrument) => {
            return fetchInstrument(instrument)
          }))
        } catch (err) {
          // Do something
          console.log('Error loading instrument patch files')
          console.log(err)
        }
        console.log(instBuffs)
        this._worklet.port.postMessage({type: 'instPayload', buffs: instBuffs})
      }
  }

  play(){
    this.context.resume()
    this._worklet.port.postMessage("play")
  }

  pause(){
    this._worklet.port.postMessage("pause")
  }

  seek(sec){
    this._worklet.port.postMessage({ type: 'seek', sec: sec })
  }

  load(midiURL){
    fetchBuff(midiURL).then(buff=>{
      console.log(buff)
      this._worklet.port.postMessage({
        type: 'loadMIDI',
        midiBuff: buff
      })
    })
  }
}

export async function createMIDIPlayer(timidityCfgURL = '/gravis.cfg', acontext = new AudioContext()){
  await acontext.audioWorklet.addModule(`worklet-bundle.js`)
  console.log('got module')
  const timidityCfg = await fetchText(timidityCfgURL)
  let baseURL = timidityCfgURL.substring(0,timidityCfgURL.lastIndexOf("/")+1);
  if (baseURL.length === 0) baseURL = '/'


  console.log('got cfg and path')
  console.log(baseURL)
  const workletNode = new AudioWorkletNode(acontext, 'midiplayer', {
    outputChannelCount: [2],
    processorOptions: {
      baseURL: baseURL,
      timidityCfg: timidityCfg
    }
  })
  console.log('got node')
  return new MIDIPlayer(workletNode, acontext)
}


async function fetchInstrument(instrument) {
  let path = instrument
  const extRegex = /(?:\.([^.]+))?$/
  if (extRegex.exec(instrument) !== 'pat') path = instrument + '.pat'
  return { instrumentName: instrument, instrumentBuff: await fetchBuff(path) }
}

async function fetchBuff(url) {
  const response = await _fetch(url)
  const arrayBuffer = await response.arrayBuffer()
  const buf = new Uint8Array(arrayBuffer)
  return buf
}

export async function fetchText(url) {
  const response = await _fetch(url)
  const text = await response.text()
  return text
}

async function _fetch(url) {
  const opts = {
    mode: 'cors',
    credentials: 'same-origin'
  }
  const response = await window.fetch(url, opts)
  if (response.status !== 200) throw new Error(`Could not load ${url}`)
  return response
}
