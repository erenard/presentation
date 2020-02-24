const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = function (env, argv) {
  return {
    entry: {
      jsconfs: './jsconfs',
      vuejsamsterdam: './vuejsamsterdam',
      jstoolchain: './jstoolchain',
      vuetify: './vuetify',
    },
    output: {
      filename: '[name].[hash].js',
      path: path.join(__dirname, 'dist')
    },
    resolve: {
      modules: [
        'static_assets',
        'node_modules'
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: `jsconfs.html`,
        template: './jsconfs/index.html',
        chunks: ['jsconfs']
      }),
      new HtmlWebpackPlugin({
        filename: `vuejsamsterdam.html`,
        template: './vuejsamsterdam/index.html',
        chunks: ['vuejsamsterdam']
      }),
      new HtmlWebpackPlugin({
        filename: `jstoolchain.html`,
        template: './jstoolchain/index.html',
        chunks: ['jstoolchain']
      }),
      new HtmlWebpackPlugin({
        filename: `vuetify.html`,
        template: './vuetify/index.html',
        chunks: ['vuetify']
      }),
      new CleanWebpackPlugin('dist', { exclude: ['.git', '.circleci', '.gitignore'] }),
      new CopyPlugin([
        {
          from: 'static_assets/index.html', to: '.'
        }
      ])
    ],
    module: {
      rules: [
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        {
          test: /\.(png|jpg|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          }
        },
        { test: /\.ttf$/, use: 'file-loader' },
        { test: /\.md$/, use: 'file-loader' },
      ]
    },
    devServer: {
      compress: false,
      port: 9000
    }
  }
}
