const path = require('path')
const webpack = require('webpack')
const loaders = require('./webpack.loaders')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const bourbonPath = require('bourbon').includePaths
const neatPath = require('bourbon-neat').includePaths

module.exports = {
  entry: './docs/index.js',
  node: {
    fs: 'empty'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    // chunkFilename: '[chunkhash].js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public',
    progress: true,
    inline: true,
    hot: true
  },
  module: {
    loaders: loaders
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css', '.json'],
    root: [path.resolve('./src')],
    alias: {
      reactwidgets: path.resolve('./src')
    },
    modulesDirectories: ['node_modules', 'src', 'components', 'styles']
  },
  // sass-loader bourbon, neat path
  sassLoader: {
    includePaths: bourbonPath.concat(neatPath) // bourbonPath or bourbonPath.concat(neatPath)
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'React widgets Kit',
      appMountId: 'root',
      inject: false
    }),
    new webpack.HotModuleReplacementPlugin({
    }),
    new ExtractTextPlugin('[name].[chunkhash].css')
  ]
}
