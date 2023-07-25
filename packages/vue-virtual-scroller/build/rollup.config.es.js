import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'vue-swaggy-scroller',
    file: 'dist/kraken-vue-virtual-scroller.esm.js',
    format: 'es',
    sourcemap: true,
  },
  external: [
    ...base.external,
    'mitt',
    'vue-observe-visibility',
    'vue-resize',
  ],
})

export default config
