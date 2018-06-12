const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

//定义一些常用路径
const DIST_PATH = path.resolve(__dirname, 'dist');
const APP_PATH = path.resolve(__dirname, 'app');

module.exports = {

  entry: {
    app: './app/app.jsx',
    findGF: './app/findGF.js',
    index: './app/index.js',
    HelloReact: './app/HelloReact/HelloReact.jsx',
    class: ['./app/class/isLikeMe.jsx', './app/class/onMouseMove.jsx']
  },

  output: {
    path: DIST_PATH,
    filename: '[name].bundle.js'
  },

  module: {
    rules: [

      {
        enforce: "pre",
        test: /\.jsx$/,
        include: APP_PATH,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
          //formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
          configFile: "./.eslintrc.json"
        }
      },

      // the 'transform-runtime' plugin tells babel to require the runtime
      // instead of inlining it.
      {
        test: /\.jsx$/,
        include: APP_PATH,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            //plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }, {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      }, {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },

  //插件的配置
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My First react app',
      favicon: './app/src/img/myIcon.ico'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};