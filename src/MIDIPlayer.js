// import "core-js/stable"
// import "regenerator-runtime/runtime"

class MIDIPlayer {
  constructor(worklet){
    this._worklet = worklet
  }

  play(){
    this._worklet.postMessage("play")
  }
}

export async function createMIDIPlayer(midifile, baseURL = '/', acontext = new AudioContext()){
  await acontext.audioWorklet.addModule('worklet-bundle.js')
  const buf = await fetchBuff(midifile)
  const midiPlayer = new AudioWorkletNode(acontext, 'midiplayer', {
    outputChannelCount: [2],
    processorOptions: {
      baseURL: baseURL,
      midiBuff: buf
    }
  })
  await new Promise((res,rej)=>{
    midiPlayer.port.onmessage = async message => {
      if (message.data.type === 'missingInstruments') {
        let instBuffs=[]
        try {
          instBuffs = await Promise.all(message.data.instruments.map((instrument) => {
            return fetchInstrument(instrument)
          }))
        } catch (err) {
          // Do something
          rej(err)
        }
        console.log(instBuffs)
        midiPlayer.port.postMessage({type: 'instPayload', buffs: instBuffs})
        res()
        // const instBuff = await fetchBuff(message.data.url)
      }
    }
  })
  midiPlayer.port.onmessage = () => {}
  return new MIDIPlayer(midiPlayer)
}


async function fetchInstrument(instrument) {
  let path = instrument
  const extRegex = /(?:\.([^.]+))?$/
  if (extRegex.exec(instrument) !== 'pat') path = instrument + '.pat'
  // console.log(instrument)
  return { instrumentName: instrument, instrumentBuff: await fetchBuff(path) }
}

async function fetchBuff(url) {
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
