const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
require("babel-polyfill")

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/index.js',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      title: "Kogen Code Test",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
