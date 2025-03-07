import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'vue-swaggy-scroller',
    file: 'dist/kraken-vue-virtual-scroller.umd.js',
    format: 'umd',
    sourcemap: true,
  },
})

export default config
