const { resolve } = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
require('dotenv').config()

module.exports = {
  entry: {
    main: resolve(__dirname, '../src/index.js')
  },

  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'assets/js/[name].[hash].js',
    chunkFilename: 'assets/js/[name].[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true
        }
      },
      {
        test: /\.(jpe?g|png|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/img/[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },

  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: resolve(__dirname, '../public/index.html'),
      favicon: resolve(__dirname, '../public/favicon.ico'),
      filename: 'index.html'
    }),
    new DefinePlugin({
      API_URL: process.env.API_URL
    })
  ]
}
