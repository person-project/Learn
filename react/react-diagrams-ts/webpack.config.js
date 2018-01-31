const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    // publicPath: 'dist/'
  },
  devServer: {
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(js||jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }, {
					test: /\.tsx?$/,
					loader: 'awesome-typescript-loader'
				}, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 限制图片的大小，小于的话会将图片转成base64，超出的话会创建新文件
              limit: 10000,
              // build/images/图片的名字 hash值 图片格式
              name: 'image/[name].[hash].[ext]'
            }
          }
        ]
      }, {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: false,
                // localIdentName: '[path][name]__[local]--[hash:base64:5]',
                //        getLocalIdent: (context, localIdentName, localName, options) => {
                //                    return localName
                //                }
              }
            }
          ]
        })
      }, {
        test: /\.scss/,
        exclude: /node_modules/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('css/[name].[hash].css'),
    // new CleanWebpackPlugin(['dist/']),
    new HtmlWebpackPlugin({template: 'index.html'})
  ]
}
