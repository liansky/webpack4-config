const path = require('path')


module.exports = {
  entry: {
    main: './main.js'
  },

  // 输出文件夹
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/',
    library: 'MyLibrary',
    libraryTarget: 'amd',
    pathinfo: false
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: { loader: 'babel-loader' }
      }
    ]
  },

  mode: 'development',
  // devtool: 'source-map'
}
