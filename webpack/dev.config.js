const merge = require('webpack-merge')
const DashboardPlugin = require('webpack-dashboard/plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack')
const baseConfig = require('./base.config')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    compress: true,
    hot: true,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
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
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ]
})
