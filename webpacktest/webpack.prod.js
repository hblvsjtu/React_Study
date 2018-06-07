/* ***************************************************************
 *
 * * Filename: webpack.prod.js
 *
 * * Description: Production configuration for webpack
 *
 * * Version: 1.0.0
 *
 * * Created: 2018/06/07
 *
 * * Revision: none
 *
 * * Compiler: node
 *
 * * Author: Lv Hongbin
 *
 * * Company: Shanghai JiaoTong Univerity
 *
/* **************************************************************/


const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	optimization: {
	    minimizer: [
	    	new OptimizeCSSAssetsPlugin({})
	    ],
	    splitChunks: {
      		chunks: 'all'
    	}
	},
	plugins: [
		new UglifyJSPlugin({
		  cache: true,
		  parallel: true,
		  sourceMap: true // set to true if you want JS source maps
		}),
		new MiniCssExtractPlugin({
	      filename: "[name].css",
	      chunkFilename: "[id].css"
	    }),
		new webpack.DefinePlugin({
		  'process.env.NODE_ENV': JSON.stringify('production')
		})
	],
});