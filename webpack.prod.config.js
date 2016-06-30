const path = require('path')
const webpack = require('webpack')
const loaders = require('./webpack.loaders')
const libraryName = 'Reactwidgets'
const outputFile = libraryName.toLowerCase() + '.js'
const HtmlwebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const bourbonPath = require('bourbon').includePaths
const neatPath = require('bourbon-neat').includePaths

module.exports = {
  entry: [__dirname + '/src/index.js'],
  node: {
    fs: 'empty'
  },
  debug: false,
  devtool: 'cheap-module-source-map',
  noInfo: true,
  output: {
    path:__dirname + '/dist',
    filename: outputFile,
    library: libraryName,
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
  module: {
    loaders: [
      {
          test: /\.(json)$/,
          loaders: [
            'json-loader?cacheDirectory'
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loaders: [
            'babel-loader?cacheDirectory'
          ]
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./src')
    ],
    alias: {
      reactwidgets: 'src/index'
    }
  },
  sassLoader: {
    includePaths: bourbonPath.concat(neatPath)
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'React Widgets',
      appMountId: 'root',
      inject: false
    }),
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
    }),
    new ExtractTextPlugin('[name].[chunkhash].css')
  ]
}
