
const acontext = new AudioContext()
const baseURL = '/'
document.querySelector('.stopbutton').addEventListener('click',  function () {
  acontext.suspend()
})

document.querySelector('.playbutton').addEventListener('click', async function () {
  const buf = await fetchBuff('desert3.mid')
  acontext.resume().then(() => {
    console.log('Playback resumed successfully')
    const midiPlayer = new AudioWorkletNode(acontext, 'midiplayer', {
      outputChannelCount: [2],
      processorOptions: {
        baseURL: baseURL,
        midiBuff: buf
      }
    })
    midiPlayer.port.onmessage = async message => {
      if (message.data.type === 'missingInstruments') {
        let instBuffs=[]
        try {
          instBuffs = await Promise.all(message.data.instruments.map((instrument) => {
            return fetchInstrument(instrument)
          }))
        } catch (err) {
          // Do something
          throw new Error(err)
        }
        console.log(instBuffs)
        midiPlayer.port.postMessage({type: 'instPayload', buffs: instBuffs})
        // const instBuff = await fetchBuff(message.data.url)
      }
      console.log(message)
    }
    midiPlayer.connect(acontext.destination)
  })
})

acontext.audioWorklet.addModule('libtimidity.js').then(res => {
  console.log('do we get hereeee?')
})

async function fetchInstrument(instrument){
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
