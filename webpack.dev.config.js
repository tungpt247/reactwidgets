const path = require('path')
const webpack = require('webpack')
const loaders = require('./webpack.loaders')

module.exports = {
  entry: './docs/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public',
    progress: true,
    inline: true,
    hot: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [path.resolve(__dirname, 'src')]
  },
  module: {
    loaders: loaders
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
