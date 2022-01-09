module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/konstantinz001.github.io/webapplication_uno_pwa/'
      : '/konstantinz001.github.io/webapplication_uno_pwa/',
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    https: true
  }
}