const path = require('path')
const webpack = require('webpack')
const bourbonPath = require('bourbon').includePaths
const neatPath = require('bourbon-neat').includePaths

const webpackConfig = {
  context: path.join(__dirname, './src'),
  devtool: 'eval',
  entry: {
    selectreact: ['./index.js']
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.(json)$/,
      loaders: [
        'json-loader?cacheDirectory'
      ]
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: [
        'babel-loader?cacheDirectory'
      ]
    }, ]
  },
  // sass-loader bourbon, neat path
  sassLoader: {
    includePaths: bourbonPath.concat(neatPath)
  },
  resolve: {
    alias: {
      selectreact: path.resolve('./src/index.js')
    },
    extensions: ['', '.js', '.jsx', '.json']
  },
}

webpackConfig.module.preLoaders = webpackConfig.module.preLoaders || []
webpackConfig.module.preLoaders.push({
  test: /\.jsx?$/,
  exclude: /(test|node_modules)\//,
  loader: 'isparta'
})
webpackConfig.webpackServer = {
  noInfo: true
}
webpackConfig.externals = {}
webpackConfig.externals['react/lib/ExecutionEnvironment'] = true
webpackConfig.externals['react/lib/ReactContext'] = true
webpackConfig.externals['react/addons'] = true

module.exports = webpackConfig
