const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, 
  {
    mode: 'development',

    //开启dev source map
    devtool: 'inline-source-map',

    //开启webpack dev server
    devServer: {
      contentBase: './dist',
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
              // fallback to style-loader in development
              // style-loadercreates style nodes from JS strings
              "style-loader",
              "css-loader", // translates CSS into CommonJS
              "sass-loader" // compiles Sass to CSS
          ]
        },
        {
          test: /\.css$/,
          use: [
              "style-loader",
              "css-loader", 
          ]
        },
      ]
    },

    //插件的配置
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
  }
)
