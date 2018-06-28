# timidity

[![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/feross/timidity/master.svg
[travis-url]: https://travis-ci.org/feross/timidity
[npm-image]: https://img.shields.io/npm/v/timidity.svg
[npm-url]: https://npmjs.org/package/timidity
[downloads-image]: https://img.shields.io/npm/dm/timidity.svg
[downloads-url]: https://npmjs.org/package/timidity
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

### Play MIDI files in the browser w/ Web Audio, WebAssembly, and libtimidity

Play MIDI files in a browser with a simple API.

**NO OPEN SOURCE LICENSE YET.** If you want to use this, send me an email. I'm still figuring
out what license to use.

## Install

```
npm install timidity
```

## Features

- Lightweight – Just 34 KB of JavaScript and 23 KB of lazy-loaded WebAssembly.
- Simple – No bells and whistles. Just what is needed to play MIDI files.
- Works with the [FreePats General MIDI soundset](https://www.npmjs.com/package/freepats).

## Usage

```js
const Timidity = require('timidity')

const player = new Timidity()
player.load('/my-file.mid')
player.play()

player.on('playing', () => {
  console.log(player.duration) // => 351.521
})
```

## API

### `player = new Timidity([baseUrl])`

Create a new MIDI player.

Optionally, provide a `baseUrl` to customize where the player will look for the
lazy-loaded WebAssembly file `libtimidity.wasm` and the
[FreePats General MIDI soundset](https://www.npmjs.com/package/freepats) files.
The default `baseUrl` is `/`.

For example, here is how to mount the necessary files at `/` with the `express`
server:

```js
const timidityPath = path.dirname(require.resolve('timidity'))
app.use('/', express.static(timidityPath))

const freepatsPath = path.dirname(require.resolve('freepats'))
app.use('/', express.static(freepatsPath))
```

### `player.load(urlOrBuf)`

This function loads the specified MIDI file `urlOrBuf`, which is a `string` path
to the MIDI file or a `Uint8Array` which contains the MIDI file data.

This should be the first function called on a new `Timidity` instance.

### `player.play()`

Plays the currently loaded MIDI file.

### `player.pause()`

Pauses the currently loaded MIDI file.

### `player.seek(seconds)`

Seeks to a specified time in the MIDI file.

If the player is paused when the function is called, it will remain paused. If
the function is called from another state (playing, etc.), the player will
continue playing.

### `player.duration`

Returns the duration in seconds of the currently playing MIDI file. Note that
`duration` will return `0` until the file's metadata is loaded, which normally
happens just before the MIDI file starts playing.

### `player.currentTime`

Returns the elapsed time in seconds since the MIDI file started playing.

### `player.destroy()`

Destroys the entire player instance, stops the current MIDI file from playing,
cleans up all resources.

Note: It's best to reuse the same player instance for as long as possible. It is
not recommended to call `player.destroy()` to stop or change MIDI files. Rather,
just call `player.pause()` to pause or `player.load()` to load a new MIDI file.

### `player.destroyed` (boolean)

Returns `true` if `destroy()` has been called on the player.

### `player.on('error', (err) => {})`

This event fires if a fatal error occurs in the player, including if a MIDI file
is unable to be played.

### `player.on('timeupdate', (seconds) => {})`

This event fires when the time indicated by the `currentTime` property has been
updated.

### `player.on('unstarted', () => {})`

This event fires when a new MIDI file is being loaded.

### `player.on('ended', () => {})`

This event fires when a MIDI file has played until the end.

### `player.on('playing', () => {})`

This event fires when a MIDI file starts playing.

### `player.on('paused', () => {})`

This event fires when a MIDI file is paused.

### `player.on('buffering', () => {})`

This event fires when a MIDI file is loading.

## License

Copyright (c) [Feross Aboukhadijeh](https://feross.org).
