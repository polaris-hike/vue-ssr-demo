// webpack webpack-cli
// @babel/core
// babel-loader webpack 和 babel 的一个桥梁
// @babel/preset-env 吧es6+ 转化为低级语法
// vue-loader vue-template-compiler 解析 vue 文件 并且编译模板
// vue-style-loader 支持服务端渲染 css-loader // 解析 css 插入到 style 中
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', {
          loader: 'css-loader',
          options: {
            esModule:false // 为了配套使用 vue-style-loader
          }
        }], // 从右往左执行
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'public/index.html')
      }),
    new VueLoaderPlugin()
  ]
};