import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'KrakenVueVirtualScroller',
    file: 'dist/kraken-vue-virtual-scroller.min.js',
    format: 'iife',
    sourcemap: true,
    globals: {
      vue: 'Vue',
    },
  },
})

config.plugins.push(terser())

export default config
