const merge = require('webpack-merge')
const { HashedModuleIdsPlugin } = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const baseConfig = require('./base.config')

module.exports = merge(baseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              localIdentName: '[hash:base64:16]'
            }
          },
          { loader: 'postcss-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].[chunkhash].css'
    }),
    new UglifyJsPlugin(),
    new CompressionPlugin()
  ]
})
