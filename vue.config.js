module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/webapplication_uno_pwa/'
      : '/',
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    https: true
  }
}