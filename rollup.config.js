// rollup.config.js
import babel from '@rollup/plugin-babel'
import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'

export default [
  {
    input: 'TimidityWorkletProcessor.js',
    external: ['libtimidity'],
    output: [
      {
        file: 'test/post-js-bundle.js',
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
      // alias({
      //   entries: {
      //     url: 'url'
      //   }
      // }),
      babel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, './.babelrc')
      })
    ]
  }]
