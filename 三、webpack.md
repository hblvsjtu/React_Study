# React_Study
        
## 三、webpack
        

### 作者：冰红茶  
### 参考书籍：《React全栈》 张轩 杨寒星   
        
------    
        

        
   跟据目前所了解的情况，从MVC到MVVM再到React，前端经历了几个大的技术上的变化，不再是以前单纯的切图做ppt的层次，更多的需要同时具备后端工作的能力，即所谓的大前端或者叫全端。此时React盛起，打算花半个月的时间把他搞通^_ ^  
        

## 目录

## [三、webpack](#3)
### [3.1 简介，安装与卸载](#3.1)
### [3.2 一个简单的例子](#3.2) 

------      
        
        
<h2 id='3'>三、webpack</h2>
<h3 id='3.1'>3.1 简介，安装与卸载</h3>  
        
#### 1) 简介
> -  现代的静态模块包装器webpack is a static module bundler for modern JavaScript applications
> -  建立一个依赖图对应你每一个需要打一个或者多个包的依赖模块it internally builds a dependency graph which maps every module your project needs and generates one or more bundles 
> - 打包工具的意义在于减少组件的入口文件书，尽可能将所有的依赖进行内部声明，可以提高组件的内聚度，便于开发和维护
> - 一般来讲，管理JavaScript projects会有以下三个问题：
>> - JavaScript的外部依赖不明显
>> - 如果依赖丢失或者加载的顺序出错，那么这个project的功能会出问题
>> - 如果包含进来的依赖没有用的话，浏览器依然会下载这些没有用的代码
> - 四大核心概念
>> - Entry
>> - Output
>> - Loaders
>> - Plugins
#### 2) 安装
> -  全局安装
        
                LvHongbins-Mac-2:webpacktest lvhongbin$ npm install webpack-cli -g
                /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/webpack-cli -> /Users/lvhongbin/software/node-v10.3.0-darwin-x64/lib/node_modules/webpack-cli/bin/cli.js
                npm WARN webpack-cli@3.0.2 requires a peer of webpack@^4.x.x but none is installed. You must install peer dependencies yourself.

                + webpack-cli@3.0.2
                added 105 packages from 44 contributors in 20.705s
                
                LvHongbins-Mac-2:webpacktest lvhongbin$ ln -s /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/webpack-cli /usr/local/bin/webpack
                LvHongbins-Mac-2:webpacktest lvhongbin$ webpack -v
                3.0.2
> -  本地安装
        
                # 初始化package.json文件
                LvHongbins-Mac-2:webpacktest lvhongbin$ npm init -y
                Wrote to /Users/lvhongbin/Desktop/React_Study/webpacktest/package.json:

                {
                  "name": "webpacktest",
                  "version": "1.0.0",
                  "description": "",
                  "main": "index.js",
                  "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1"
                  },
                  "keywords": [],
                  "author": "",
                  "license": "ISC"
                }

                # 本地安装webpack webpack-cli两个都要装
                LvHongbins-Mac-2:webpacktest lvhongbin$ npm install webpack webpack-cli  --save-dev

                > fsevents@1.2.4 install /Users/lvhongbin/Desktop/React_Study/webpacktest/node_modules/fsevents
                > node install

                [fsevents] Success: "/Users/lvhongbin/Desktop/React_Study/webpacktest/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" already installed
                Pass --update-binary to reinstall or --build-from-source to recompile
                npm notice created a lockfile as package-lock.json. You should commit this file.
                npm WARN webpacktest@1.0.0 No description
                npm WARN webpacktest@1.0.0 No repository field.

                + webpack@4.10.2
                added 386 packages from 296 contributors and audited 3358 packages in 37.567s
                found 0 vulnerabilities

<h3 id='3.2'>3.2 一个简单的例子</h3>  
        
#### 1) 文件夹
> - src 放源码的地方 The "source" code is the code that we'll write and edit.   
> - dist 经过压缩和优化的，需要最终加载进入浏览器的代码  The "distribution" code is the minimized and optimized output of our build process that will eventually be loaded in the browser: 
#### 2) 本地安装lodash
        
                LvHongbins-Mac-2:webpacktest lvhongbin$ npm install --save lodash
                + lodash@4.17.10
                added 1 package from 2 contributors and audited 3359 packages in 5.532s
                found 0 vulnerabilities
#### 3) 往src/index.js文件中引入lodash 为什么要显式引入呢？主要是为了避免污染全局变量 in this setup, index.js explicitly requires lodash to be present, and binds it as _ (no global scope pollution)
        
                /* ***************************************************************
                 *
                 * * Filename: index.js
                 *
                 * * Description:test for webpack
                 *
                 * * Version: 1.0.0
                 *
                 * * Created: 2018/06/05
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

                import _ from 'lodash';

                 function component() {
                   var element = document.createElement('div');

                   /*
                    * Lodash, currently included via a script, is required for this line to work
                    * Our index.js file depends on lodash being included in the page before it runs.
                    * This is because index.js never explicitly declared a need for lodash;
                    * it just assumes that the global variable _ exists.
                    */
                    // Lodash, now imported by this script
                   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

                   return element;
                 }

                 document.body.appendChild(component());
#### 4) dist/index.html
        
                LvHongbins-Mac-2:webpacktest lvhongbin$ cat dist/index.html
                <!--* ***************************************************************
                 *
                 * * Filename: index.html
                 *
                 * * Description:test for webpack
                 *
                 * * Version: 1.0.0
                 *
                 * * Created: 2018/06/05
                 *
                 * * Revision: none
                 *
                 * * Compiler: Browser
                 *
                 * * Author: Lv Hongbin
                 *
                 * * Company: Shanghai JiaoTong Univerity
                 *
                /* **************************************************************-->

                <!DOCTYPE html>
                <html>
                    <head>
                        <meta charset="utf-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
                        <title>Getting Started</title>
                        <meta name="description" content="test for webpack">
                        <meta name="keywords" content="test for webpack">
                        <!-- 由于在src/index.js中引入了lodash模块，所以不需要在这里引入 -->
                        <!-- <script src="https://unpkg.com/lodash@4.16.6"></script> -->
                    </head>
                    
                    <body>
                        <!-- 经过打包bundle之后，输出的文件变成了bundle.js -->
                        <!-- <script src="./src/index.js"></script> -->
                        <script src="bundle.js"></script>
                    </body>
                </html>
#### 5) 修改package.json文件，Private可选字段，布尔值。如果private为true，npm会拒绝发布。这可以防止私有repositories不小心被发布出去。
                
                # package.json
                LvHongbins-Mac-2:webpacktest lvhongbin$ cat package.json
                {
                  "name": "webpacktest",
                  "version": "1.0.0",
                  "description": "",
                  "private": true,
                  "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1"
                  },
                  "keywords": [],
                  "author": "",
                  "license": "ISC",
                  "devDependencies": {
                    "webpack": "^4.10.2",
                    "webpack-cli": "^3.0.2"
                  },
                  "dependencies": {
                    "lodash": "^4.17.10"
                  }
                }
#### 6) 运行 ./node_modules/.bin/webpack命令 或者是npx webpack进行打包
        
                LvHongbins-Mac-2:webpacktest lvhongbin$ ./node_modules/.bin/webpack
                Hash: cbc93658b30e05c9a93b
                Version: webpack 4.10.2
                Time: 685ms
                Built at: 06/05/2018 4:06:35 PM
                  Asset      Size  Chunks             Chunk Names
                main.js  70.4 KiB       0  [emitted]  main
                [1] (webpack)/buildin/module.js 497 bytes {0} [built]
                [2] (webpack)/buildin/global.js 489 bytes {0} [built]
                [3] ./src/index.js 950 bytes {0} [built]
                    + 1 hidden module

                WARNING in configuration
                The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
                You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
#### 7) 配置webpack.config.js
                
                // webpack.config.js
                const path = require('path');
                  
                module.exports = {
                  entry: './src/index.js',
                  output: {
                    filename: 'bundle.js',
                    path: path.resolve(__dirname, 'dist')
                  }
                }; 
#### 8) 配合webpack.config.js进行打包
> - npx webpack --config                
                
                # 配合webpack.config.js进行打包
                LvHongbins-Mac-2:webpacktest lvhongbin$ npx webpack --config webpack.config.js
                Hash: f5c5c1cdb63051604e41
                Version: webpack 4.10.2
                Time: 365ms
                Built at: 06/06/2018 12:08:22 AM
                    Asset      Size  Chunks             Chunk Names
                bundle.js  70.4 KiB       0  [emitted]  main
                [1] (webpack)/buildin/module.js 497 bytes {0} [built]
                [2] (webpack)/buildin/global.js 489 bytes {0} [built]
                [3] ./src/index.js 950 bytes {0} [built]
                    + 1 hidden module

                WARNING in configuration
                The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
                You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
> - 假设我们不想用命令行的话，还可以用npm script
                
                npm run build

                # package.json
                  {
                    "name": "webpack-demo",
                    "version": "1.0.0",
                    "description": "",
                    "main": "index.js",
                    "scripts": {
                      "test": "echo \"Error: no test specified\" && exit 1",
                +     "build": "webpack"
                    },
                    "keywords": [],
                    "author": "",
                    "license": "ISC",
                    "devDependencies": {
                      "webpack": "^4.0.1",
                      "webpack-cli": "^2.0.9",
                      "lodash": "^4.17.5"
                    }
                  }
> - 