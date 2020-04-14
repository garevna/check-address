module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  productionSourceMap: false,
  css: {
    sourceMap: false
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        automaticNameDelimiter: '.'
      }
    }
  },
  pwa: {
    themeColor: '#FF0E00',
    msTileColor: '#FEFEFE',
    iconPaths: {
      favicon32: '/img/icons/favicon-32x32.png',
      favicon16: '/img/icons/favicon-16x16.png',
      appleTouchIcon: '/img/icons/apple-touch-icon.png',
      maskIcon: '/img/icons/favicon.png',
      msTileImage: '/img/icons/mstile-150x150.png'
    }
  },
  runtimeCompiler: true,
  publicPath: '/'
}
