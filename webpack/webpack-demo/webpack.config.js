const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const VENDOR = ["lodash",
              "react",
              "react-dom",
              "redux",
              "redux-thunk"];

module.exports = {
  entry: {
    bundle: './app/index.js',
    vendor: VENDOR
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: 'dist/'  //  知道如何寻找资源
  },
  devServer: {
    port: 8080
  },
  module: {
    rules: [{
      test: /\.(js||jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          // 限制图片的大小，小于的话会将图片转成base64，超出的话会创建新文件
          limit: 10000,
          // build/images/图片的名字 hash值 图片格式
          name: 'image/[name].[hash].[ext]'
        }
      }]
    }, {
      test: /\.css$/,
      loader: ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            module: true
          }
        }]
      })
    }]
  },
  plugins: [
    new ExtractTextWebpackPlugin('css/[name].[hash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: Infinity
    }),
    new CleanWebpackPlugin(['dist/']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
