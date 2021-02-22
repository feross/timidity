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
