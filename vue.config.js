module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: 'http://localhost:8080'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
}
