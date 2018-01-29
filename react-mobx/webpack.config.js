const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');   // HTML的copy
const CleanWebapckPlugin = require('clean-webpack-plugin'); //清空build文件夹
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: {
    main: __dirname + '/src/app.js',
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    hot: true
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: [{
        loader: 'babel-loader'
      }],
      exclude: /node_modules/,
    }, {
      test: /\.tsx?$/,
      use: [{
        loader: 'awesome-typescript-loader'
      }],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader:'css-loader',
          options: {
            minimize: true //css 压缩
          }
        }, 'postcss-loader']
       }),
       exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
         use: [{
           loader:'css-loader',
           options: {
             minimize: true // css 压缩
           }
         }, 'postcss-loader', 'sass-loader']
       })
    }, { // 加载图片
      test: /\.(png|svg|ipg|gif)$/,
      use: 'file-loader'
    }, { // 记载字体
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: 'file-loader'
    }]
  },
  plugins: [
    new webpack.BannerPlugin('本文件由zzh打包完成，如有雷同纯属巧合。'),
    new CleanWebapckPlugin(['build']),
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      // minify: true
    }),
    new ExtractTextWebpackPlugin('style.css')
  ]
}

module.exports = config;
