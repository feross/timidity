import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'

export default [
  {
    input: 'src/TimidityWorkletProcessor.js',
    output: [
      {
        file: 'dist/worklet-bundle.js',
        sourcemap: false,
        exports: 'named'
      }
    ],
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      commonjs(),
      babel({
        babelHelpers: 'bundled'
      }),
      terser()
    ]
  },
  {
    input: 'src/MIDIPlayer.js',
    output: [
      {
        file: 'dist/player-bundle.js',
        sourcemap: false,
        exports: 'named'
      }
    ],
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      commonjs(),
      babel({
        babelHelpers: 'bundled'
      }),
      terser()
    ]
  }
]
