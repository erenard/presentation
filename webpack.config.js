const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FileManagerPlugin = require('filemanager-webpack-plugin')

module.exports = function (env, argv) {
  return {
    entry: {
      "ast-grep": './ast-grep',
      jsconfs: './jsconfs',
      jstoolchain: './jstoolchain',
      vuejsamsterdam: './vuejsamsterdam',
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
        filename: `ast-grep.html`,
        template: './ast-grep/index.html',
        chunks: ['ast-grep']
      }),
      new HtmlWebpackPlugin({
        filename: `jsconfs.html`,
        template: './jsconfs/index.html',
        chunks: ['jsconfs']
      }),
      new HtmlWebpackPlugin({
        filename: `jstoolchain.html`,
        template: './jstoolchain/index.html',
        chunks: ['jstoolchain']
      }),
      new HtmlWebpackPlugin({
        filename: `vuejsamsterdam.html`,
        template: './vuejsamsterdam/index.html',
        chunks: ['vuejsamsterdam']
      }),
      new HtmlWebpackPlugin({
        filename: `vuetify.html`,
        template: './vuetify/index.html',
        chunks: ['vuetify']
      }),
      new FileManagerPlugin({
        events: {
          onStart: {
            delete: [
              {
                source: 'dist/*',
                options: { dot: false }
              }
            ],
            copy: [
              {
                source: 'static_assets/index.html',
                destination: 'dist/index.html'
              }
            ]
          }
        }
      })
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
