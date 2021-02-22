// rollup.config.js
import babel from '@rollup/plugin-babel'
import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias';

export default [
  {
    input: 'TimidityWorkletProcessor.js',
    output: [
      {
        file: 'test/worklet2.js',
        format: 'cjs',
        sourcemap: false,
        exports: 'named'
      }
    ],
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      commonjs({
        include: [
          'node_modules/querystring/index.js',
          'node_modules/events/events.js',
          'node_modules/url/url.js',
          'libtimidity.js',
          'node_modules/native-url/dist/index.js'
        ]
      }),
      alias({
        entries: {
          url: 'native-url'
        }
      }),
      babel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, './.babelrc')
      })
    ]
  }]
