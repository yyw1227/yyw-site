module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  assetsDir: "static",
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'yyw_site'
    }
  },
  devServer: {
    disableHostCheck: true
  }
}