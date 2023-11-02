# timidity-player

This is a fork of timidity, providing browser based MIDI file playback using the Timidity library.

## Usage

```js
import createMIDIPlayer from 'timidity'

const player = createMIDIPlayer()
player.load('/my-file.mid')
player.play()

player.on('playing', () => {
  console.log(player.duration) // => 351.521
})
```
