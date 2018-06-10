const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('./webpack.common.js');


module.exports = merge(common, 
    {
        mode: 'production',
        devtool: 'source-map',
        optimization: {
          splitChunks: {
              chunks: 'all'
          }
        },
        module: {
          rules: [
            {
              test: /\.scss$/,
              use: [
                  // fallback to style-loader in development
                  // style-loadercreates style nodes from JS strings
                  MiniCssExtractPlugin.loader,
                  "css-loader", // translates CSS into CommonJS
                  "sass-loader" // compiles Sass to CSS
              ]
            },
            {
              test: /\.css$/,
              use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader", 
              ]
            },
          ]
        },
        //插件的配置
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ],
    }
)
