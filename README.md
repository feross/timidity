# phaser-midi

This is forked from [timidity](https://github.com/feross/timidity) 

[unsf](https://github.com/psi29a/unsf) is included as a submodule for easy editing and updating of the instrument patches.  To build:

``` sh
# in unsf directory
mkdir build && cd build
cmake ..
make
```

Then you can edit the `patches/gravis.sf2`, which was originally obtained [here](https://archive.org/details/GravisUltrasoundClassicPachSetV1.6), with something like [polyphone](https://github.com/davy7125/polyphone), and run:

``` sh
yarn run build
```

to rextract pat files compatible with timidity, as well as rebuild the library for those instruments.

in the application, you need to host both `libtimidity` files (js and wasm) as well as the pat folders


## audioworkletprocessornotes

look [here](https://github.com/cutterbl/soundtouchjs-audio-worklet/blob/master/src/SoundTouchWorklet.js) and in the babel/rollup configs there

## Possible workflow here:
Following [this stuff](https://github.com/emscripten-core/emscripten/issues/6230), we will focus on making a processor _within_ the wasm module, which is instantiated with options that point to the midifile, and preregistered in the AudioContextGlobalScope.  But, it seems like a good idea to first bundle/rollup this 'post.js' file.  So the file will be bundled, then we will have the file rebuilt.  Then you just need to `acontext.addModule($thefullsinglefilewasmjs)` and 
