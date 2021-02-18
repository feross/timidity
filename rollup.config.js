// rollup.config.js
import babel from '@rollup/plugin-babel';

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'umd',
    name: 'timidity'
  },
  plugins: [
    babel({ babelHelpers: 'runtime' })
  ],
  external: [/@babel\/runtime/]
}
