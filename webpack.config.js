const Webpack = require('webpack')
const Autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './app/index.js',
  devtool: 'eval-source-map',
  output: {
    path: __dirname + '/dist',
    //path: './app', modified for htmlWebpackPlugin
    filename: 'index_bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new Webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          Autoprefixer()
        ]
      }
    })
  ]
}
