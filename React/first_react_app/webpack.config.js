var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//定义一些常用路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = {

  entry: {
    app:[path.resolve(APP_PATH, 'app.jsx')],
  },

  output: {
    path: BUILD_PATH,
    filename: '[name].bundle.js',
    path: DIST_PATH
  },

  //开启dev source map
  devtool: 'inline-source-map',

  //开启webpack dev server
  devServer: {
    contentBase: DIST_PATH,
    hot: true,
  },

  optimization: {
    splitChunks: {
        //chunks: ['vendors', 'vendors.js']
        chunks: 'all'
    }
  },
  /* 
   *整个module的写法已经被更新，不要用原来的写法了
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'js'),
      ],
      loaders: ['react-hot', 'babel'],
    },
    {
      test: /\.scss$/,
      include: [
        path.resolve(__dirname, 'css'),
      ],
      loader: sassLoader
    }],
  },
  */

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
        enforce: "pre",
        test: /\.jsx?$/,
        include: APP_PATH,
        loader: "eslint-loader",
      },

      // the 'transform-runtime' plugin tells babel to require the runtime
      // instead of inlining it.
      {
        test: /\.jsx?$/,
        include: APP_PATH,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            //plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },

  //插件的配置
  plugins: [
    new HtmlWebpackPlugin({
        title: 'My First react app'
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  //配置拓展名，目的是让js文件可以引入指定后缀的文档
  resolve: {
    extensions: ['.js', 'jsx']
  }
};
