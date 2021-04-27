

import MIDI from './player-bundle.js'
// fetchText('./gravis.cfg').then((txt)=>console.log(txt))
// console.log(createURL('./test/yeah/gravis.cfg'))
const acontext = new AudioContext()

function createPlayerUI(midifile, container) {
  const parent = document.querySelector(container)
  const div = document.createElement('div')
  const idtag = sanitize(midifile)
  const loadbuttonid = `loadbutton-${idtag}`
  const playbuttonid = `playbutton-${idtag}`
  const stopbuttonid = `stopbutton-${idtag}`
  div.innerHTML = `
<h2>${midifile}</h2>
  <button id=${loadbuttonid}>Load</button>
  <button id=${playbuttonid}>Play</button>
  <button id=${stopbuttonid}>Pause</button>

`
  div.className = "test-container-" + idtag
  parent.appendChild(div)
  MIDI.createMIDIPlayer('gravisPats/gravis.cfg', acontext).then(player => {
    console.log('done!')

    document.querySelector("#" + loadbuttonid).addEventListener('click', async function() {
      player.load(midifile)
    })
    document.querySelector("#" + stopbuttonid).addEventListener('click', function() {
      player.pause()
    })

    document.querySelector("#" + playbuttonid).addEventListener('click', async function() {
      console.log(player)
      player.play()
    })
  })
}
function sanitize(str) { return str.replaceAll(/[\. \/\\,\-]/ig, "") }

createPlayerUI('blue.mid', '#tester-container')
createPlayerUI('exitmusic.mid', '#tester-container')
createPlayerUI('onemoretime.mid', '#tester-container')
createPlayerUI('DearPrudence.mid', '#tester-container')
createPlayerUI('desert3.mid', '#tester-container')
