const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react', 'react-hmre'] // TODO:: Remove react-hmre on Production mode
    }
  }, {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
  }, {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file'
  }, {
    test: /\.(woff|woff2)$/,
    loader: 'url?prefix=font/&limit=5000'
  }, {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/octet-stream'
  }, {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=image/svg+xml'
  }, {
    test: /\.gif/,
    loader: 'url-loader?limit=10000&mimetype=image/gif'
  }, {
    test: /\.jpg/,
    loader: 'url-loader?limit=10000&mimetype=image/jpg'
  }, {
    test: /\.png/,
    loader: 'url-loader?limit=10000&mimetype=image/png'
  }
]
