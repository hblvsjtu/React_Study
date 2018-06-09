const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge{common, 
    {
        mode: development,

        //开启dev source map
        devtool: 'inline-source-map',

        //开启webpack dev server
        devServer: {
            contentBase: DIST_PATH,
            hot: true,
            eslint: {
              configFile: '../.eslintrc.json'
            },
        },

        //插件的配置
        plugins: [
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ],
    };
}
