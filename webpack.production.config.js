const path = require('path')
const webpack = require('webpack')
const loaders = require('./webpack.loaders')
const libraryName = 'Reactwidgets'
const outputFile = libraryName.toLowerCase() + '.js'
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    './src/index.jsx' // Your appʼs entry point
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: outputFile,
    library: [libraryName],
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: [{
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }, {
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  }],
  resolve: {
    alias: {
      reactwidgets: 'src/index'
    },
    extensions: ['', '.js', '.jsx'],
    root: [path.resolve('./src')]
  },
  module: {
    loaders: loaders
  },
  plugin: [
    new ExtractTextPlugin('styles.css'),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      // A common mistake is not stringifying the "production" string.
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      },
      mangle: true,
      output: {
        comments: false
      }
    })
  ]
}
