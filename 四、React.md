# React_Study
        
        
        
## [四、React](#4)
        
        
### 作者：冰红茶  
### 参考书籍：《React全栈》 张轩 杨寒星  &&   《深入React技术栈》 陈屹
### 参考源：[Reactjs官网文档https://reactjs.org ](https://reactjs.org)
### 参考源：[Reactjs官网中文文档](http://www.css88.com/react/) 
### 参考源：[webpack官网文档https://webpack.js.org/concepts/](https://webpack.js.org/concepts/)
### 参考源：[REACT ROUTER](https://reacttraining.com/react-router/)
### 参考源：[REACT ROUTER教学视频](https://www.bilibili.com/video/av22934284/?p=21)

  
        
------    
        
        
        
   跟据目前所了解的情况，从MVC到MVVM再到React，前端经历了几个大的技术上的变化，不再是以前单纯的切图做ppt的层次，更多的需要同时具备后端工作的能力，即所谓的大前端或者叫全端。此时React盛起，打算花半个月的时间把他搞通^_ ^
        
        
## 目录
        
## [4.1 简介](#4.1)
### [4.1.1 特点](#4.1.1)
### [4.1.2 模版创建](#4.1.2)
## [4.2 开发环境](#4.2) 
### [4.2.1 安装nvm,node和npm](#4.2.1)
### [4.2.2 工程构建工具：webpack](#4.2.2)
### [4.2.3 安装语法检查: ESLint](#4.2.3)
### [4.2.4 ES6编译工具：Babel](#4.2.4)
### [4.2.5 CSS预处理器：sass](#4.2.5)
### [4.2.6 其他插件](#4.2.6)
### [4.2.7 安装React环境](#4.2.7)
### [4.2.8 测试环境：Karma](#4.2.8)
## [4.3 基本语法](#4.3) 
### [4.3.1 库的介绍和使用](#4.3.1)
### [4.3.2 prop属性与propTypes](#4.3.2)
### [4.3.3 创建虚拟对象](#4.3.3)
### [4.3.4 面向组件编程](#4.3.4)
### [4.3.5 state](#4.3.5)
### [4.3.6 事件与ref](#4.3.6)
### [4.3.7 动态组件](#4.3.7)
### [4.3.8 受控组件与非受控组件](#4.3.8)
### [4.3.9 生命周期](#4.3.9)
### [4.3.10 关于ReactDOM的操作方法](#4.3.10)
## [4.4 高级用法](#4.4) 
### [4.4.1 虚拟DOM的操纵](#4.4.1)
## [4.5 React Router](#4.5) 
### [4.5.1 介绍和使用](#4.5.1)
### [4.5.2 相关标签的使用](#4.5.2)

        
------
        
<h2 id='4'>四、React</h2>
<h3 id='4.1'>4.1 简介</h3>  
        
<h4 id='4.1.1'>4.1.1 特点</h4>  
        
#### 1) A JavaScript library for building user interfaces
> - 声明式编码（declarative），对应的是函数式编码，举个简单呢的例子：创建一条规则作用于一个数组，然后返回一个新的数组。而传统的命令式编码则是会把数组里面的每一个元素进行规则的运算，然后再返回所有元素所组成的数组
> - Component-Based 组件化编码
> - Learn Once，Write Anywhere，可以应用于网页端或者移动端
> - 高效 虚拟DOM 和 DOM Diff算法（最小化重绘）
> - 单向数据流
#### 2) 三大组件
> - 基于组件 组件有着良好的封装性，可以让代码复用，测试和分离变得简单
> - JSX 可以直接把HTML嵌套在JS中，但是JSX跟HTML并不是一回事，JSX只是作为编译器，利用render把类似HTML结构编译成JavaScript 
> - Virtual DOM 每个React组件都是用Virtual DOM渲染，它是一种对于HTML DOM节点的抽象描述，不需要浏览器DOM API的支持，在Node.js中也可以使用。另外在用Diff算法，每次更新的时候检查变更的节点，然后修改变更的节点，而非更新整个DOM 
> - 消耗性能最大的地方就是对真实DOM的渲染，由于Diff算法的使用，先计算出虚拟的DOM，在通过Diff算法检查出需要更新的节点，然后只更新那些节点。另外，由于对真实DOM的操作进行了封装，对外只暴露出回调函数的组件属性作为数据的接口，避免性能大量的衰减和引用的失效
#### 3) 模块与组件
> - 模块： 实现特定功能的js文件，一般是一个js文件
> - 组件：实现特定或者局部功能的代码集合，包括HTML，CSS，js等
> - 都是为了代码复用的
        
<h4 id='4.1.2'>4.1.2 模版创建</h4>  
        
#### 1) 下载模版
                
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install -g create-react-app
    /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/create-react-app -> /Users/lvhongbin/software/node-v10.3.0-darwin-x64/lib/node_modules/create-react-app/index.js
    + create-react-app@1.5.2
    added 67 packages from 20 contributors in 27.029s
    LvHongbins-Mac-2:first_react_app lvhongbin$ ln -s /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/create-react-app /usr/local/bin/create-react-app

    LvHongbins-Mac-2:first_react_app lvhongbin$ create-react-app --version
    1.5.2
    LvHongbins-Mac-2:first_react_app lvhongbin$ create-react-app --help

      Usage: create-react-app <project-directory> [options]

      Options:

        -V, --version                            output the version number
        --verbose                                print additional logs
        --info                                   print environment debug info
        --scripts-version <alternative-package>  use a non-standard version of react-scripts
        --use-npm                                
        -h, --help                               output usage information
        Only <project-directory> is required.

        A custom --scripts-version can be one of:
          - a specific npm version: 0.8.2
          - a custom fork published on npm: my-react-scripts
          - a .tgz archive: https://mysite.com/my-react-scripts-0.8.2.tgz
          - a .tar.gz archive: https://mysite.com/my-react-scripts-0.8.2.tar.gz
        It is not needed unless you specifically want to use a fork.

        If you have any problems, do not hesitate to file an issue:
          https://github.com/facebookincubator/create-react-app/issues/new
#### 2）使用方法 非常傻瓜
                
    # 使用 create-react-app命令创建一个模板
    LvHongbins-Mac-2:React lvhongbin$ create-react-app my-react-app

    Creating a new React app in /Users/lvhongbin/Desktop/React_Study/React/my-react-app.

    Success! Created my-react-app at /Users/lvhongbin/Desktop/React_Study/React/my-react-app
    Inside that directory, you can run several commands:

      npm start
        Starts the development server.

      npm run build
        Bundles the app into static files for production.

      npm test
        Starts the test runner.

      npm run eject
        Removes this tool and copies build dependencies, configuration files
        and scripts into the app directory. If you do this, you can’t go back!

    We suggest that you begin by typing:

      cd my-react-app
      npm start

    Happy hacking!
    LvHongbins-Mac-2:React lvhongbin$ cd my-react-app

    # 运行
    LvHongbins-Mac-2:React lvhongbin$ npm run start
    Compiled successfully!

    You can now view my-react-app in the browser.

      Local:            http://localhost:3000/
      On Your Network:  http://192.168.222.128:3000/

    Note that the development build is not optimized.
    To create a production build, use npm run build.
>>>>>> ![图4-1 my-react-app]()
        
<h3 id='4.2'>4.2 开发环境</h3>  
        
<h4 id='4.2.1'>4.2.1 安装nvm,node和npm</h4>   
        
#### 1) nvm
                
    # 创建~/.bash_profile文件
    LvHongbins-Mac-2: touch ~/.bash_profile

    # 下载
    LvHongbins-Mac-2:~ lvhongbin$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

    # 安装
    LvHongbins-Mac-2:.nvm lvhongbin$ export NVM_DIR="$HOME/.nvm"
    LvHongbins-Mac-2:.nvm lvhongbin$ [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    LvHongbins-Mac-2:.nvm lvhongbin$ [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

    # 验证
    LvHongbins-Mac-2:.nvm lvhongbin$ command -v nvm
    nvm
#### 2) 使用nvm
    
    Example:
      nvm install 8.0.0                     Install a specific version number
      nvm use 8.0                           Use the latest available 8.0.x release
      nvm run 6.10.3 app.js                 Run app.js using node 6.10.3
      nvm exec 4.8.3 node app.js            Run `node app.js` with the PATH pointing to node 4.8.3
      nvm alias default 8.1.0               Set default node version on a shell
      nvm alias default node                Always default to the latest available node version on a shell

    Note:
      to remove, delete, or uninstall nvm - just remove the `$NVM_DIR` folder (usually `~/.nvm`)        

        
<h4 id='4.2.2'>4.2.2 <a href="https://webpack.js.org/concepts/">工程构建工具：webpack</a></h4>   
        
#### 1) 首先安装webpack  
    
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install --save-dev webpack webpack-cli webpack-dev-server
    
#### 2) 装一些loader和插件: babel-loader sass-loader style-loader css-loader file-loader babel-loader babel-core babel-preset-env  @babel/runtime --save @babel/plugin-transform-runtime express webpack-dev-middleware
    
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install --save-dev babel-loader sass-loader style-loader css-loader file-loader react-hot-loader
    npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
    npm WARN karma-chai@0.1.0 requires a peer of chai@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-hot-loader@4.3.0 requires a peer of react@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.

    + babel-loader@7.1.4
    + style-loader@0.21.0
    + file-loader@1.1.11
    + react-hot-loader@4.3.0
    + sass-loader@7.0.3
    + css-loader@0.28.11
    added 158 packages from 315 contributors and audited 8487 packages in 49.704s
    found 6 vulnerabilities (1 low, 5 moderate)
      run `npm audit fix` to fix them, or `npm audit` for details
#### 3) 线上环境的配置
> - postcss cssnano extract-text-webpack-plugin postcss-loader mini-css-extract-plugin 
    
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install --save-dev postcss cssnano extract-text-webpack-plugin postcss-loader
    npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
    npm WARN karma-chai@0.1.0 requires a peer of chai@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-hot-loader@4.3.0 requires a peer of react@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
    npm WARN extract-text-webpack-plugin@3.0.2 requires a peer of webpack@^3.1.0 but none is installed. You must install peer dependencies yourself.

    + postcss-loader@2.1.5
    + cssnano@3.10.0
    + postcss@6.0.22
    + extract-text-webpack-plugin@3.0.2
    added 72 packages from 52 contributors, updated 3 packages and audited 11747 packages in 77.329s
    found 6 vulnerabilities (1 low, 5 moderate)
      run `npm audit fix` to fix them, or `npm audit` for details

        
<h4 id='4.2.3'>4.2.3 <a href="https://eslint.org">安装语法检查: ESLint</a></h4>   
        
#### 1) 简介 
> - 类似的还有JSLint, JSHint, JSCS
> - ESLint特点是支持ES6和JSX语法，而且有丰富的第三方插件
> - 又叫做preloaded，因为这是在loader处理该资源之前进行处理的，代码的检查必须是在转换代码之前
> - 安装[eslint和eslint-loader](https://webpack.js.org/loaders/eslint-loader/)
    
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install eslint eslint-loader --save-dev
    + eslint@4.19.1
    + eslint-loader@2.0.0
    added 84 packages from 103 contributors and audited 8393 packages in 32.109s
    found 0 vulnerabilities
#### 2) 使用方法
> - To be safe, you can use enforce: "pre" section to check source files, not modified by other loaders (like babel-loader)
> - webpack.config.js
    
    #webpack.config.js
    module.exports = {
      // ...
      module: {
        rules: [
          {
            enforce: "pre",
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
            options: {
                configFile: "./.eslintrc.json"
              // eslint options (if necessary)
            }
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
          },
        ],
      },
      // ...
    }
        
#### 3) 相关插件
> - eslint-config-airbnb 
> - eslint-plugin-import 
> - eslint-plugin-react 让eslint支持react的语法
> - eslint-plugin-jsx-a11y 
> - babel-eslint 用babel作为eslint的解释器
    
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y babel-eslint
    + eslint-plugin-react@7.9.1
    + eslint-plugin-import@2.12.0
    + eslint-plugin-jsx-a11y@6.0.3
    + eslint-config-airbnb@16.1.0
    added 26 packages from 19 contributors and audited 8834 packages in 14.561s
    found 0 vulnerabilities
#### 4）添加.eslintrc.json配置文件，使用命令eslint --init
    
    {
        "env": {
            "browser": true,
            "commonjs": true,
            "es6": true,
            "node": true
        },
        "extends": "eslint-config-airbnb",
        "parserOptions": {
            "ecmaVersion": 6,
            "sourceType": "module",
            "ecmaFeatures": {
                "jsx": true
            }
        },
        "plugins": [
            "react"
        ],
        "rules": {
            "strict": 0,
            "valid-jsdoc":2,
            
            "react/jsx-uses-react":2,
            "react/jsx-uses-vars":2,
            "react/react-in-jsx-scope":2
        }
    }

        
<h4 id='4.2.4'>4.2.4 ES6编译工具：Babel</h4>   
        
#### 1）安装babel-loader babel-core 
        
    babel-pLvHongbins-Mac-2:first_react_app lvhongbin$ npm install --save-dev babel-loader babel-core
    npm WARN babel-loader@7.1.4 requires a peer of webpack@2 || 3 || 4 but none is installed. You must install peer dependencies yourself.

    * babel-core@6.26.3
    * babel-loader@7.1.4
    added 66 packages from 60 contributors and audited 226 packages in 18.025s
    found 0 vulnerabilities
#### 2）安装预设
> -   
    
    # 针对js的预设
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install babel-preset-env --save-dev
    npm WARN babel-loader@7.1.4 requires a peer of webpack@2 || 3 || 4 but none is installed. You must install peer dependencies yourself.

    + babel-preset-env@1.7.0
    added 52 packages from 9 contributors and audited 1993 packages in 33.183s
    found 0 vulnerabilities

    # 针对react的预设    
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install --save-dev babel-preset-react
    + babel-preset-react@6.24.1
    added 10 packages from 2 contributors and audited 8125 packages in 11.118s
    found 0 vulnerabilities
#### 3）添加.babelre文件
                
    # 编辑.babelre文件
    LvHongbins-Mac-2:first_react_app lvhongbin$ touch .babelre && echo '{ "presets": ["env", "react"] }' > .babelrc
    LvHongbins-Mac-2:first_react_app lvhongbin$ cat .babelre
    {
      "presets": ["env", "react"]
    }
#### 4）两种使用的方法
> - 使用命令行
    
    babel script.js --presets react 
> - 使用config 无.jsx
    
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
> - 使用node API
    
    require("babel-core").transform("code", {
      presets: ["react"]
    });
> - 使用loader 无.jsx
    
    var Person = require("babel!./Person.js").default;
    new Person();

        
<h4 id='4.2.5'>4.2.5 <a href="http://sass-lang.com">CSS预处理器：sass</a></h4>   
        
#### 1) 简介
> - CSS with superpowers
> - Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
> - 编译前置，无需考虑浏览器兼容性的问题
> - 拥有很多方便的特性：
>> - 设置变量
>> - 树状结构
>> -  
#### 2) 全局安装
                
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install -g sass
    /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/sass -> /Users/lvhongbin/software/node-v10.3.0-darwin-x64/lib/node_modules/sass/sass.js
    + sass@1.5.1
    added 1 package from 1 contributor in 7.433s
    LvHongbins-Mac-2:first_react_app lvhongbin$ ln -s /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/sass /usr/local/bin/sass
    LvHongbins-Mac-2:first_react_app lvhongbin$ sass --version
    1.5.1 compiled with dart2js 2.0.0-dev.59.0
#### 2) 局部安装 sass-loader node-sass webpack 
    
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install sass-loader node-sass webpack --save-dev
#### 3) 使用方法 需要预先安装mini-css-extract-plugin
    
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");

    module.exports = {
        ...
        module: {
            rules: [{
                test: /\.scss$/,
                use: [
                    {
                        // fallback to style-loader in development
                        process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                        options: {
                            includePaths: ["app/src/css"]
                        }
                    }
                ]
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ]
    };

        
<h4 id='4.2.6'>4.2.6 其他插件</h4>   
        
#### 1）自动生成HTML文件：html-webpack-plugin
    
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install --save-dev html-webpack-plugin
    + html-webpack-plugin@3.2.0
    added 38 packages from 57 contributors and audited 8467 packages in 14.626s
    found 0 vulnerabilities=
#### 2）clean-webpack-plugin
        
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install --save-dev clean-webpack-plugin
    + clean-webpack-plugin@0.1.19
    added 1 package from 1 contributor and audited 8850 packages in 15.091s
    found 0 vulnerabilities
#### 3）webpack-merge
    
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install --save-dev webpack-merge
    + webpack-merge@4.1.2
    added 1 package from 1 contributor and audited 8852 packages in 9.714s
    found 0 vulnerabilities
 
        
<h4 id='4.2.7'>4.2.7 安装React环境</h4>   
        
#### 1）安装插件 
> - react
> - react-dom
> - [prop-types](http://www.css88.com/react/docs/typechecking-with-proptypes.html) 数据验证
        
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install --save react react-dom
    npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
    npm WARN extract-text-webpack-plugin@3.0.2 requires a peer of webpack@^3.1.0 but none is installed. You must install peer dependencies yourself.
    npm WARN karma-chai@0.1.0 requires a peer of chai@* but none is installed. You must install peer dependencies yourself.

    + react@16.4.0
    + react-dom@16.4.0
    added 2 packages and audited 11827 packages in 22.337s
    found 6 vulnerabilities (1 low, 5 moderate)
      run `npm audit fix` to fix them, or `npm audit` for details
 
        
<h4 id='4.2.8'>4.2.8 <a href="http://karma-runner.github.io/2.0/index.html">测试环境：Karma</a></h4>   
        
#### 1）简介
> - Things should be simple. We believe in testing and so we want to make it as simple as possible.
> - 快速响应 The main goal for Karma is to bring a productive testing environment to developers. The environment being one where they don't have to set up loads of configurations, but rather a place where developers can just write the code and get instant feedback from their tests. Because getting quick feedback is what makes you productive and creative.
#### 2）安装 这个必须要全局安装完后再进行本地安装，才能执行验证安装的相关操作
> - 本地安装的插件还是蛮多的
>> - karma  
>> - karma-chai 
>> - karma-chrome-launcher 
>> - karma-coverage 
>> - karma-coveralls 
>> - karma-mocha 
>> - karma-sourcemap-loader 
>> - karma-webpack 
>> - istanbul-instrumenter-loader
    
    # 命令行安装
    LvHongbins-Mac-2:~ lvhongbin$ npm install -g karma-cli
    /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/karma -> /Users/lvhongbin/software/node-v10.3.0-darwin-x64/lib/node_modules/karma-cli/bin/karma
    + karma-cli@1.0.1
    added 3 packages from 12 contributors in 5.66s
    LvHongbins-Mac-2:~ lvhongbin$ ln -s /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/karma /usr/local/bin/karma
    LvHongbins-Mac-2:~ lvhongbin$ karma --version
    Cannot find local Karma!
      Please install Karma by `npm install karma --save-dev`.
      If you wanna use a global instance, please set NODE_PATH env variable.

    # 本地安装
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install --save-dev karma  karma-chai karma-chrome-launcher karma-coverage karma-coveralls karma-mocha karma-sourcemap-loader karma-webpack istanbul-instrumenter-loader
    npm WARN deprecated nodemailer@2.7.2: All versions below 4.0.1 of Nodemailer are deprecated. See https://nodemailer.com/status/
    npm WARN deprecated node-uuid@1.4.8: Use uuid module instead
    npm WARN deprecated socks@1.1.10: If using 2.x branch, please upgrade to at least 2.1.6 to avoid a serious bug with socket data flow and an import issue introduced in 2.1.0
    npm WARN deprecated socks@1.1.9: If using 2.x branch, please upgrade to at least 2.1.6 to avoid a serious bug with socket data flow and an import issue introduced in 2.1.0
    npm WARN deprecated mailcomposer@4.0.1: This project is unmaintained
    npm WARN deprecated buildmail@4.0.1: This project is unmaintained
    npm WARN deprecated uws@9.14.0: stop using this version

    > uws@9.14.0 install /Users/lvhongbin/Desktop/React_Study/React/first_react_app/node_modules/uws
    > node-gyp rebuild > build_log.txt 2>&1 || exit 0

    npm WARN karma-chai@0.1.0 requires a peer of chai@* but none is installed. You must install peer dependencies yourself.
    npm WARN istanbul-instrumenter-loader@3.0.1 requires a peer of webpack@^2.0.0 || ^3.0.0 || ^4.0.0 but none is installed. You must install peer dependencies yourself.
    npm WARN karma-webpack@3.0.0 requires a peer of webpack@^2.2.0 || ^3.0.0 || ^4.0.0 but none is installed. You must install peer dependencies yourself.
    npm WARN webpack-dev-middleware@2.0.6 requires a peer of webpack@^2.2.0 || ^3.0.0 || ^4.0.0-alpha || ^4.0.0-beta || ^4.0.0 but none is installed. You must install peer dependencies yourself.

    + karma-chai@0.1.0
    + karma-chrome-launcher@2.2.0
    + karma-coveralls@1.2.1
    + karma-mocha@1.3.0
    + istanbul-instrumenter-loader@3.0.1
    + karma-coverage@1.1.2
    + karma-webpack@3.0.0
    + karma@2.0.2
    + karma-sourcemap-loader@0.3.7
    added 455 packages from 845 contributors and audited 4410 packages in 191.693s
    found 6 vulnerabilities (1 low, 5 moderate)
      run `npm audit fix` to fix them, or `npm audit` for details

    # 验证安装
    LvHongbins-Mac-2:123 lvhongbin$ karma --version
    Karma version: 2.0.2
    LvHongbins-Mac-2:123 lvhongbin$ karma --help
    Karma - Spectacular Test Runner for JavaScript.

    Usage:
      /usr/local/bin/karma <command>

    Commands:
      start [<configFile>] [<options>] Start the server / do single run.
      init [<configFile>] Initialize a config file.
      run [<options>] [ -- <clientArgs>] Trigger a test run.
      completion Shell completion for karma.

    Run --help with particular command to see its description and available options.

    Options:
      --help     Print usage and options.
      --version  Print current version.

        
<h3 id='4.3'>4.3 基本语法</h3>  
        
<h4 id='4.3.1'>4.3.1 库的介绍和使用</h4>  
        
#### 1) react.js
> - React的核心库，创建DOM元素
#### 2) react-dom.js
> - 提供操作DOM的react拓展库
#### 3) babel.min.js
> - 解释JSX语法代码转为纯JS语法代码的库
               
<h4 id='4.3.2'>4.3.2 创建虚拟对象</h4>  
        
#### 1) 第一种做法：直接返回HTML标签
> - ReactDOM.render(虚拟DOM对象, 真实DOM对象)是用来渲染虚拟DOM的属于ReactDOM的API
> - 真实DOM对象作为虚拟DOM对象的容器
> - 如果重复插入，则会覆盖之前内容
                
        function App() {
          return (
            <div>
              <h1 className="fontcolor">Hello React!</h1>
            </div>
          );
        }
        const app = document.createElement('div');
        document.body.appendChild(app);
        ReactDOM.render(<App />, app);
#### 2) 第二种做法：使用react的API 
> - React.createElement('tag', id:id, innerHTML);
> - 如果遇到一些动态变量的时候，需要加上大括号，表示里面的是一个动态值，而非静态变量
> - 虚拟对象
        
        // Note: this structure is simplified
        const element = {
          type: 'h1',
          props: {
            className: 'greeting',
            children: 'Hello, world!'
          }
        };
> - 例子
        
        const msg1 = '第一种创建标签的方法';
        const msg2 = '第二种创建标签的方法';
        const id2 = 'vDom2';

        // 1,创建虚拟DOM元素对象
        const vDom1 = <h1 className="fontcolor"> { msg1 } </h1>; // 不是字符串
        const vDom2 = React.createElement('h2', { id: id2.toLowerCase() }, {className: 'greeting'}, msg2);
#### 3) 将一个数组转化成一个li标签
> - 
        
        *
         * 展示动态数据
         * 将一个数组转化成一个li标签
         */
        const names = ['jQuery', 'zepto', 'angular', 'react', 'vue'];
        const ul = (
          <ul>
            { names.map((name, index) => <li id={`li${index}`} > { name } </li>) }
          </ul>
        );

        realObjectFactory('div', 'test3');
        ReactDOM.render(ul, document.getElementById('test3'));

        
<h4 id='4.3.3'>4.3.3 prop属性与propTypes</h4>  
        
#### 1) prop属性
> - We recommend naming props from the component’s own point of view rather than the context in which it is being used.
> -  需要导入相应的库 import PropTypes from 'prop-types';      
        function Comment(props) {
          return (
            <div className="Comment">
              <div className="UserInfo">
                <Avatar user={props.author} />
                <div className="UserInfo-name">
                  {props.author.name}
                </div>
              </div>
              <div className="Comment-text">
                {props.text}
              </div>
              <div className="Comment-date">
                {formatDate(props.date)}
              </div>
            </div>
          );
        }
> - Props都是只读的，不允许直接修改其属性，也不允许参数之间间接修改。Props are Read-Only，All React components must act like pure functions with respect to their props. 
> - 比如下面的函数，是绝对不允许的
        
        function withdraw(account, amount) {
          account.total -= amount;
        } 
#### 2) [propTypes数据验证](https://reactjs.org/docs/typechecking-with-proptypes.html)
> - 简单的指定默认值defaultProps
        
        // ES6类组件（复杂组件）
        realObjectFactory('span', 'test5');
        class MyComponent2 extends React.Component {
          render() {
            return <h1>Hello, {this.props.name}</h1>;
          }
        }

        // 指定 props 的默认值：
        MyComponent2.defaultProps = {
          name: 'Stranger',
        };

        // 验证数据类型和必要性
        MyComponent2.propTypes = {
          name: PropTypes.string.isRequired,
        };
        ReactDOM.render(<MyComponent2 name="lvhongbin" />, document.getElementById('test5'));       
> - Note:React.PropTypes has moved into a different package since React v15.5. Please use the prop-types library instead.
> - 验证数据的必要性 后面加上.isRequired
> - react默认的数据类型是PropTypes.类型
        
        import PropTypes from 'prop-types';

        MyComponent.propTypes = {
          // You can declare that a prop is a specific JS type. By default, these
          // are all optional.
          optionalArray: PropTypes.array,
          optionalBool: PropTypes.bool,
          optionalFunc: PropTypes.func,
          optionalNumber: PropTypes.number,
          optionalObject: PropTypes.object,
          optionalString: PropTypes.string,
          optionalSymbol: PropTypes.symbol,

          // Anything that can be rendered: numbers, strings, elements or an array
          // (or fragment) containing these types.
          optionalNode: PropTypes.node,

          // A React element.
          optionalElement: PropTypes.element,

          // You can also declare that a prop is an instance of a class. This uses
          // JS's instanceof operator.
          optionalMessage: PropTypes.instanceOf(Message),

          // You can ensure that your prop is limited to specific values by treating
          // it as an enum.
          optionalEnum: PropTypes.oneOf(['News', 'Photos']),

          // An object that could be one of many types
          optionalUnion: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.instanceOf(Message)
          ]),

          // An array of a certain type
          optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

          // An object with property values of a certain type
          optionalObjectOf: PropTypes.objectOf(PropTypes.number),

          // An object taking on a particular shape
          optionalObjectWithShape: PropTypes.shape({
            color: PropTypes.string,
            fontSize: PropTypes.number
          }),

          // You can chain any of the above with `isRequired` to make sure a warning
          // is shown if the prop isn't provided.
          requiredFunc: PropTypes.func.isRequired,

          // A value of any data type
          requiredAny: PropTypes.any.isRequired,

          // You can also specify a custom validator. It should return an Error
          // object if the validation fails. Don't `console.warn` or throw, as this
          // won't work inside `oneOfType`.
          customProp: function(props, propName, componentName) {
            if (!/matchme/.test(props[propName])) {
              return new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
              );
            }
          },

          // You can also supply a custom validator to `arrayOf` and `objectOf`.
          // It should return an Error object if the validation fails. The validator
          // will be called for each key in the array or object. The first two
          // arguments of the validator are the array or object itself, and the
          // current item's key.
          customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
            if (!/matchme/.test(propValue[key])) {
              return new Error(
                'Invalid prop `' + propFullName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
              );
            }
          })
        };        
<h4 id='4.3.4'>4.3.4 面向组件编程</h4>  
        
#### 1) 组件component
> - The simplest way to define a component is to write a JavaScript function:
> - When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object “props”.
> - 名称开头必须大写
> - return的内容必须有一个标签包裹内容
> - <ComponentName 键值对/> 其实是一种组件方法的立即执行的简写，ComponentName既是方法的名称，有时组件的名称，又是类名
> - 键值对就是该组件的属性和属性值，属性作为方法的参数传进方法内部，并由挂在在prop属性上的同名属性所接收
        
        function Welcome(props) {
          return <h1>Hello, {props.name}</h1>;
        }

        < Welcome name='Sara' />
> - We call ReactDOM.render() with the <Welcome name="Sara" /> element.
> - React calls the Welcome component with {name: 'Sara'} as the props.
> - Our Welcome component returns a < h1>Hello, Sara< /h1> element as the result.
> - React DOM efficiently updates the DOM to match < h1>Hello, Sara< /h1>.
#### 2) 工厂函数组件（简单组件）
> - 定义组件
> - 渲染组件
        
        // 工厂函数组件
        realObjectFactory('span', 'test4');
        function MyComponent() {
          return <h2>工厂函数组件(简单组件)</h2>;
        }
        ReactDOM.render(<MyComponent />, document.getElementById('test4'));
#### 3) ES6类组件（复杂组件）
> - 使用了ES6的继承方法
        
        // ES6类组件（复杂组件）
        realObjectFactory('span', 'test5');
        class MyComponent2 extends React.Component {
          render() {
            return <h1>Hello, {this.props.name}</h1>;
          }
        }
        ReactDOM.render(<MyComponent2 name='lvhongbin' />, document.getElementById('test5'));
#### 4) 复杂组件
> - 两个组件的嵌套
        
        function Welcome(props) {
          return <h1>Hello, {props.name}</h1>;
        }

        function App() {
          return (
            <div>
              <Welcome name="Sara" />
              <Welcome name="Cahal" />
              <Welcome name="Edite" />
            </div>
          );
        }

        ReactDOM.render(
          <App />,
          document.getElementById('root')
        );        

        
<h4 id='4.3.5'>4.3.5 state</h4>  
        
#### 1) state
> - 是组件内部的属性，
> - 组件本身就是一个状态机，通过constructor内部的this.state直接定义它的值
> - 然后根据这些状态值来渲染不同的UI
        
        import React from 'react';
        import ReactDOM from 'react-dom';

        // 真实容器工厂
        function realObjectFactory(tag, id) {
          const obj = document.createElement(tag);
          document.body.appendChild(obj);
          obj.setAttribute('id', id);
          obj.style.fontSize = '15px';
        }

        // isLikeMe
        realObjectFactory('div', 'test8');
        class Like extends React.Component {
          constructor(props) {
            super(props);

            // 定义状态
            this.state = {
              isLikeMe: false,
            };

            // 绑定当前环境
            this.handleClick = this.handleClick.bind(this);
          }

          handleClick() {
            // 获取状态
            const isLikeMe = !this.state.isLikeMe;

            // 更新状态
            this.setState({ isLikeMe });
          }

          render() {
            return (<button onClick={this.handleClick} onKeyDown={this.handleKeyDown}>{this.state.isLikeMe ? '我喜欢你' : '你喜欢我'}</button>);
          }
        }

        ReactDOM.render(<Like />, document.getElementById('test8'));
#### 2) setState(updater, [callback])
> - 在这个签名中，第一个参数是的一个 updater 函数：
        
        (prevState, props) => stateChange
        // 比如
        this.setState((prevState, props) => {
          return {counter: prevState.counter + props.step};
        });
> - 这种形式的 setState() 也是异步的，并且在同一周期内的多个调用可以被合并在一起执行批处理
> - 异步更新，所以你不能依赖它的值去计算下一个状态 State Updates May Be Asynchronous，Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
> - "记住 setState() 作为一个请求，而不是立即命令来更新组件。为了更好的感知性能，React 可能会延迟它，然后合并多个setState()更新多个组件。 React不保证 state 更新就立即应用(重新渲染)。setState() 并不总是立即更新组件。它可能会 批量 或 延迟到后面更新。这使得在调用 setState() 之后立即读取 this.state 存在一个潜在的陷阱。"
> - 您可以随意的传递 一个对象 作为 setState() 的第一个参数，而不是一个函数：
> - 而通过this.setState方法可以再次调用render的方法，来渲染新的UI
> - 如果你直接改变this.state内部属性的值是不能直接渲染的，因为你还缺少来render方法
> - 
> - 为了解决这个问题，可以使用函数作为参数，函数的第一个参数就是上一个状态的第一个属性值，第二个参数就是上一个状态的第二属性值个值
        
        // Wrong
        this.setState({
          counter: this.state.counter + this.props.increment,
        });

        // Correct
        this.setState((prevState, props) => ({
          counter: prevState.counter + props.increment
        }));

> - State Updates are Merged 设置状态机内部的属性可以分开分别实现
        
        constructor(props) {
            super(props);
            this.state = {
              posts: [],
              comments: []
            };
          }

          componentDidMount() {
              fetchPosts().then(response => {
                this.setState({
                  posts: response.posts
                });
              });

              fetchComments().then(response => {
                this.setState({
                  comments: response.comments
                });
              });
            }
> - 例子
        
        import React from 'react';
        import ReactDOM from 'react-dom';
        import PropTypes from 'prop-types';

        // 真实容器工厂
        function realObjectFactory(tag, id) {
          const obj = document.createElement(tag);
          document.body.appendChild(obj);
          obj.setAttribute('id', id);
          obj.style.fontSize = '15px';
        }

        // ES6类组件（复杂组件）
        realObjectFactory('span', 'test5');
        class MyComponent2 extends React.Component {
          constructor() {
            super();
            this.state = {
              index: 0,
            };
            this.color = ['blue', 'red', 'green', 'yellow'];
            this.handleMouseOver = this.handleMouseOver.bind(this);
            this.getColor = this.getColor.bind(this);
          }
          getColor() {
            return this.color[this.state.index];
          }

          handleMouseOver() {
            let num = this.state.index;
            console.log(`Now this state.index is ${num}`);
            console.log(`Now this color is ${this.color[this.state.index]}`);
            this.setState((prevState) => ({
              index: (prevState.index + 1) % 4,
            }));
          }

          render() {
            return <button onMouseOver={this.handleMouseOver} style={{ color: this.getColor() }} onFocus={() => 0}>Hello, {this.props.name}</button>;
          }
        }

        // 指定 props 的默认值：
        MyComponent2.defaultProps = {
          name: 'Stranger',
        };

        // 验证数据类型
        MyComponent2.propTypes = {
          name: PropTypes.string,
        };

        ReactDOM.render(<MyComponent2 name="lvhongbin" />, document.getElementById('test5'));

        
<h4 id='4.3.6'>4.3.6 事件与ref</h4>  
        
#### 1) [同步事件SyntheticEvent](https://reactjs.org/docs/events.html)
> - 基于浏览器本地的特性
> - Your event handlers will be passed instances of SyntheticEvent, a cross-browser wrapper around the browser’s native event. It has the same interface as the browser’s native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.
> - 所有的属性如下
        
        boolean bubbles
        boolean cancelable
        DOMEventTarget currentTarget
        boolean defaultPrevented
        number eventPhase
        boolean isTrusted
        DOMEvent nativeEvent
        void preventDefault()
        boolean isDefaultPrevented()
        void stopPropagation()
        boolean isPropagationStopped()
        DOMEventTarget target
        number timeStamp
        string type
> - 事件池 事件的属性都是瞬时和同步获得的，异步会失效，如果你要获取某一个时刻事件的状态，请赋值给对象，这样做的原因是提升性能
> - The SyntheticEvent is pooled. This means that the SyntheticEvent object will be reused and all properties will be nullified after the event callback has been invoked. This is for performance reasons. As such, you cannot access the event in an asynchronous way.
        
        function onClick(event) {
          console.log(event); // => nullified object.
          console.log(event.type); // => "click"
          const eventType = event.type; // => "click"

          setTimeout(function() {
            console.log(event.type); // => null
            console.log(eventType); // => "click"
          }, 0);

          // Won't work. this.state.clickEvent will only contain null values.
          this.setState({clickEvent: event});

          // You can still export event properties.
          this.setState({eventType: event.type});
        }
> - 另外一种方法是采用event.persist()
> - If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove the synthetic event from the pool and allow references to the event to be retained by user code.
#### 2) [事件处理](https://reactjs.org/docs/handling-events.html)
> - react和浏览器事件处理的异同点
>> - 第一点：React 采用的是驼峰式记法 React events are named using camelCase, rather than lowercase.
>> - 第二点：React handler采用是用{},而非字符串 With JSX you pass a function as the event handler, rather than a string. 
          
          // HTML
          <button onclick="activateLasers()">
            Activate Lasers
          </button>

          //react
          <button onClick={activateLasers}>
            Activate Lasers
          </button>
>> - 第三点：取消默认事件react必须使用显式使用preventDefault。Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly.
        
        function ActionLink() {
          function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
          }

          return (
            <a href="#" onClick={handleClick}>
              Click me
            </a>
          );
        }
> - this的绑定
> - ou have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.
        
        constructor(props) {
            super(props);
            this.state = {isToggleOn: true};

            // This binding is necessary to make `this` work in the callback
            this.handleClick = this.handleClick.bind(this);
          }
> - 当然了，你也可以使用箭头函数自动绑定当前环境 这叫“class fields syntax”
> - If calling bind annoys you, there are two ways you can get around this. If you are using the experimental public class fields syntax, you can use class fields to correctly bind callbacks:
        
        class LoggingButton extends React.Component {
          // This syntax ensures `this` is bound within handleClick.
          // Warning: this is *experimental* syntax.
          handleClick = () => {
            console.log('this is:', this);
          }

          render() {
            return (
              <button onClick={this.handleClick}>
                Click me
              </button>
            );
          }
        }
> - 另外你还可以再回调函数内部直接使用箭头函数进行绑定
        
        <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
        <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
#### 3) [refs](https://reactjs.org/docs/refs-and-the-dom.html)
> - 什么事refs? Refs provide a way to access DOM nodes or React elements created in the render method.
> - 而且是只读数据，无法修改
> - 不同于典型的react数据流typical React dataflow通过props自上而下传递数据并通过render更新所有局部节点，refs提供了另外一种方式进行组件内节点的数据传递
> - 步骤：
>> - 第一步：Creating Refs 采用React.createRef()方法
        
        class MyComponent extends React.Component {
          constructor(props) {
            super(props);
            this.myRef = React.createRef();
          }
          render() {

            /*
             * When the ref attribute is used on an HTML element, 
             * the ref created in the constructor 
             * with React.createRef() receives the underlying DOM element 
             * as its current property.
             */
            return <div ref={this.myRef} />;
          }
        }
>> - 第二步：Accessing Refs When the ref attribute is used on a custom class component, the ref object receives the mounted instance of the component as its current. You may not use the ref attribute on functional components because they don’t have instances.那什么是**functional components**呢？比如function MyFunctionalComponent()  { return < input />; }
> - 例子 Loginmodule.jsx
        
        import React from 'react';
        import ReactDOM from 'react-dom';

        // 真实容器工厂
        function realObjectFactory(tag, id) {
          const obj = document.createElement(tag);
          document.body.appendChild(obj);
          obj.setAttribute('id', id);
          obj.style.fontSize = '15px';
        }

        class Loginmodule extends React.Component {
          constructor(props) {
            super(props);
            this.content = React.createRef();
            this.handleClick = this.handleClick.bind(this);
          }

          handleClick() {
            let content = this.content.current.value;
            let strRegex = '^((https|http|ftp|rtsp|mms)?://)'
                                  + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" // ftp的user@
                                  + '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184
                                  + '|' // 允许IP和DOMAIN（域名）
                                  + "([0-9a-z_!~*'()-]+.)*" // 域名- www.
                                  + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名
                                  + '[a-z]{2,6})' // first level domain- .com or .museum
                                  + '(:[0-9]{1,4})?' // 端口- :80
                                  + '((/?)|' // a slash isn't required if there is no file name
                                  + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
            if (content.match(strRegex) !== null) {
              alert('网址格式正确！');
              document.getElementById('focus').value = content;
            } else {
              alert('网址格式错误！请重新输入');
            }
          }

          render() {
            return (
              <div>
                <input type="text" ref={this.content} />&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.handleClick} >提示输入</button>&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              );
          }
        }

        class Resultmodule extends React.Component {
          constructor(props) {
            super(props);
            this.rightContent = React.createRef();
          }

          render() {
            return (
              <div>
                <Loginmodule />
                <input id="focus" type="text" placeholder="失去焦点提示内容" />
              </div>
              );
          }
        }

        realObjectFactory('div', 'test9');
        ReactDOM.render(<Resultmodule />, document.getElementById('test9'));

        
<h4 id='4.3.7'>4.3.7 动态组件</h4>  
        
#### 1) 要解决两个问题
> - 数据和状态保存的位置在哪个组件？
> - 如何利用子组件数据的更新来改变父组件的状态？
#### 2) 数据和状态保存的位置在哪个组件？
> - 数据保存的位置，如果数据是某个组件需要的，数据就保存在它那里，如果是某些组件需要的，就给他们共同的父组件
#### 3) 如何利用子组件数据的更新来改变父组件的状态？
> - 父组件定义函数，传递给子组件，然后子组件进行调用
> - 但是这里有一个问题，由于render函数是异步更新的，这会造成数据的获取“慢一拍”，所以你会看到后面的Add组件需要加1，而最后面的List组件不需要
> - todolist.jsx
        
        import React from 'react';
        import ReactDOM from 'react-dom';
        import PropTypes from 'prop-types';
        import realObjectFactory from './isLikeMe.jsx';


        // 建立一个div容器
        realObjectFactory('div', 'test10');

        // 建立共同的父类
        class Todo extends React.Component {
          constructor(prop) {
            super(prop);

            this.state = {
              list: ['lvhongbin', 'lvhongchao'],
              count: 2,
            };

            this.updateState = this.updateState.bind(this);
          }

          updateState(content) {
            this.setState((preState) => {
              let array = preState.list;
              array.push(content);
              let num = preState.count + 1;
              let state = { list: array, count: num };
              return state;
            });
            return this.state.count;
          }

          render() {
            return (
              <div>
                <h2>My todolist</h2>
                <Add updateState={this.updateState} count={this.state.count} ></Add>
                <List list={this.state.list}></List>
              </div>
            );
          }
        }


        // 建立按钮
        class Add extends React.Component {
          constructor(prop) {
            super(prop);
            this.prop = prop;
            this.contentRef = React.createRef();
            this.handleClick = this.handleClick.bind(this);
            this.num = this.prop.count - 1;
          }

          handleClick() {
            let str = this.contentRef.current.value.trim();
            if (str !== '') {
              this.num = this.prop.updateState(str);
            }
          }

          render() {
            return (
              <div>
                <input id="TodoList" type="text" ref={this.contentRef} placeholder="请输入你的TodoList" />&nbsp;&nbsp;&nbsp;
                <button onClick={this.handleClick}>
                  添加#{this.num + 1}
                </button>
              </div>
            );
          }
        }

        Add.propTypes = {
          count: PropTypes.number.isRequired,
          updateState: PropTypes.func.isRequired,
        };

        // 建立列表标签
        function List(prop) {
          return (
              <ul>
                {prop.list.map((content) => <li key={content.toString()}>{content}</li>)}
              </ul>
          );
        }

        List.propTypes = {
          list: PropTypes.array.isRequired,
        };

        ReactDOM.render(<Todo />, document.getElementById('test10'));
#### 4) 流程
> - 拆分组件
> - 实现静态组件
> - 实现动态组件（实现初始化数据动态显示，实现交互功能）

        
<h4 id='4.3.8'>4.3.8 受控组件与非受控组件</h4>  
        
#### 1) 受控组件
> - 拥有value属性，什么叫input标签拥有value属性呢？其实说的是value属性被显式放在标签当中。比如value={this.state.xxx}，value属性被状态机的某个属性所占用。或者是value="Hello!"
> - 其特点是用户不能直接修改value属性
> - 必须铜鼓onChange()方法，然后简介修改状态机属性，才能更改value的值
#### 2) 非受控组件
> - 没有value属性的input标签

        
<h4 id='4.3.9'>4.3.9 生命周期</h4>  
        

    
>>>>>> ![图4-3 生命周期](https://github.com/hblvsjtu/React_Study/blob/master/picture/%E5%9B%BE4-3%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png?raw=true)
    
#### 1) 组件首次加载mount
> - **constructor()**   包含了原来的getDefaultProps()和getInitialState方法
>> - 如果你不需要初始化和为类方法绑定环境变量，就不需要使用该方法。if you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
>> - Constructor是唯一指定状态机的地方 Constructor is the only place where you should assign this.state directly
>> - 避免在初始化的时候才用属性作为状态机的初始状态，这是常见的错误 Avoid copying props into state! This is a common mistake:
        
        constructor(props) {
         super(props);
         // Don't do this!
         this.state = { color: props.color };
        }
> - **static getDerivedStateFromProps(props, state)**  用于设置props和stats。相当于原来的componentWillMount() 它在 render() 之前调用，因此在此方法中的设置state(状态) 不会触发重新渲染。 避免在此方法中进行任何其它修改（side－effects）或订阅（subscriptions）。这是在服务器渲染上调用的唯一的生命周期钩子。在16.4版本的react里面被改名为UNSAFE_componentWillMount()。原来的名字可以用到17.0版本 hat name will continue to work until version 17.目测componentWillMount()最终会被getDerivedStateFromProps(props, state)所取代
> - render() 不应该有任何修改组件state的代码或者是和浏览器交互的请夸昂
> - componentDidMount() 装载完成后调用一次 可以在这里获取组件的DOM结构 “在这个方法中调用 setState() 会触发一个额外的渲染， 但会在浏览器更新屏幕之前发生。在这种情况下，即使 render() 会被调用两次， 也可以保证用户不会看到中间状态。 请谨慎使用此模式，因为这通常会导致性能问题。 但是，当你需要测量一个 DOM 节点，并在渲染一些依赖于它的大小或位置的东西之前，这种情况下，这种模式可能会非常有用，比如 modals 和tooltip 之类的组件。”
> - 注意事项：These methods are considered legacy and you should avoid them in new code: UNSAFE_componentWillMount()
#### 2) 状组件props更新Updating
> - **static getDerivedStateFromProps(props, state)**  其实用来在未来取代UNSAFE_componentWillReceiveProps方法用的
> - **shouldComponentUpdate(nextProps, nextState)**  使用 shouldComponentUpdate() 让 React 知道组件的输出是否不受 state 或 props 当前变化的影响。 默认行为是在每次 state 更改时重新渲染，并调用 componentWillUpdate() ，render()和componentDidUpdate() 如果返回false，则不重新渲染。对于初始(第一次)渲染 或 使用 forceUpdate() 时，不调用此方法。
> - **UNSAFE_componentWillUpdate()**  未来将会被取消，被**getSnapshotBeforeUpdate(prevProps, prevState)**所替代
> - **render()**
> - **getSnapshotBeforeUpdate(prevProps, prevState)**  有点类似UNSAFE_componentWillUpdate()的意味，但是比较奇怪的是在render()方法之后执行的。严格来讲是在render输出到DOM过程中间发生的事件，此时DOM将要被更新，然后运用该方法可以得到DOM更新前的状态信息，然后把返回值传给componentDidUpdate() “getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().” 后来笔者终于知道为什么render()方法之后执行了？这是因为render方法因为异步的原因往往是会“慢一拍”执行的，为了节省时间提升效率，于是就在了render()方法之后执行。“In the above examples, it is important to read the scrollHeight property in getSnapshotBeforeUpdate because there may be delays between “render” phase lifecycles (like render) and “commit” phase lifecycles (like getSnapshotBeforeUpdate and componentDidUpdate).”
> - **componentDidUpdate(prevProps, prevState, snapshot)**
> - 例子
        
        class ScrollingList extends React.Component {
          constructor(props) {
            super(props);
            this.listRef = React.createRef();
          }

          getSnapshotBeforeUpdate(prevProps, prevState) {
            // Are we adding new items to the list?
            // Capture the scroll position so we can adjust scroll later.
            if (prevProps.list.length < this.props.list.length) {
              const list = this.listRef.current;
              return list.scrollHeight - list.scrollTop;
            }
            return null;
          }

          componentDidUpdate(prevProps, prevState, snapshot) {
            // If we have a snapshot value, we've just added new items.
            // Adjust scroll so these new items don't push the old ones out of view.
            // (snapshot here is the value returned from getSnapshotBeforeUpdate)
            if (snapshot !== null) {
              const list = this.listRef.current;
              list.scrollTop = list.scrollHeight - snapshot;
            }
          }

          render() {
            return (
              <div ref={this.listRef}>{/* ...contents... */}</div>
            );
          }
        }
#### 3) Unmounting
> - **componentWillUnmount()** 
#### 4) Error Handling
> - **componentDidCatch()** 
> - 错误边界（Error boundaries）是一个 React 组件，可以在其子组件树中的任何位置捕获JavaScript 错误，记录这些错误，并显示备用 UI 而不是崩溃的组件树。 错误边界在渲染过程中，在生命周期方法中，以及整个树下的构造函数中捕获错误。
> - 错误边界(Error Boundaries) 只能捕获组件树中子组件中的错误。不能捕获 错误边界(Error Boundaries)组件 本身错误。
#### 5) React Without ES6
> - createReactClass() 相当于ES6的组件类的定义方法
> - 另外值得注意的是createReactClass()的Autobinding特性，就是对于内部的方法是自动绑定this的，这就比较类似于箭头函数的特性
> - getDefaultProps()的作用是将组件中赋值的数据被设置在this.props中；
> - getInitialState返回值被设置在this.state中。
> - getDefaultProps()和getInitialState属性，这两个都只会在装载之前调用一次。
        
        var Greeting = createReactClass({
          getDefaultProps: function() {
            return {
              name: 'Mary'
            };
          },

          getInitialState: function() {
             return {count: this.props.initialCount};
           },

           handleClick: function() {
              alert(this.state.message);
            },

            render: function() {
              return (
                <button onClick={this.handleClick}>
                  Say hello
                </button>
              );
            }

          // ...

        });
> - ES6 launched without any mixin support. Therefore, there is no support for mixins when you use React with ES6 classes.


        
<h4 id='4.3.10'>4.3.10 关于ReactDOM的操作方法</h4>  
        
#### 1) 浏览器环境Browser Support
> - 支持IE9及以上的版本 React supports all popular browsers, including Internet Explorer 9 and above, although some polyfills are required for older browsers such as IE 9 and IE 10.
#### 2) render方法
> - ReactDOM.render(element, container[, callback])
> - 不能修改父节点 does not modify the container node (only modifies the children of the container)
#### 3) hydrate方法
> - ReactDOM.hydrate(element, container[, callback])
> - 与 render() 相同，但用于混合容器，该容器的HTML内容是由 ReactDOMServer 渲染的。 React 将尝试将事件监听器附加到现有的标记。
#### 4) unmountComponentAtNode()
> - ReactDOM.unmountComponentAtNode(container)
> - 从 DOM 中移除已装载的 React 组件，并清除其事件处理程序和 state 。 如果在容器中没有挂载组件，调用此函数什么也不做。 如果组件被卸载，则返回 true ，如果没有要卸载的组件，则返回 false 。
#### 5) findDOMNode()
> - ReactDOM.findDOMNode(component)
> - findDOMNode 是一个用于访问真实 DOM 节点（underlying DOM node）的接口。 在大多数情况下，不建议使用它，因为它会越过组件抽象层访问真实 DOM 。
> - findDOMNode 仅适用于已装载的组件（即已放置在DOM中的组件）。 如果你试图在一个尚未安装的组件上调用它（就像在一个尚未创建的组件上调用 render()中的 findDOMNode() ），将抛出一个异常。
> - findDOMNode 不能用于函数式组件。
#### 6) createPortal() [实例](https://codepen.io/gaearon/pen/yzMaBd)
> - ReactDOM.createPortal(child, container)
> - 创建一个 插槽(portal) 。 插槽提供了一种方法，可以将子元素渲染到 DOM 组件层次结构之外的 DOM 节点中。
> - 例子 Portal.jsx
        
        import React from 'react';
        import ReactDOM from 'react-dom';
        import PropTypes from 'prop-types';
        import realObjectFactory from './isLikeMe.jsx';

        // 建立一个div容器
        realObjectFactory('div', 'test11');

        class Modal extends React.Component {
          constructor(prop) {
            super(prop);
            this.contentObj = document.createElement('div');
            this.contentObj.id = 'this.contentObj';
            this.contentObj.style.color = this.props.color;
            this.mountObject = document.getElementById('test10');
          }

          /*
           * 装载组件的行为
           * 只要被父组件render装载之后就会执行
           */
          componentDidMount(state, prop) {
            console.log('componentDidMount...');
            this.mountObject.appendChild(this.contentObj);
          }

          /*
           * 移除组件前的行为
           * 只要被render装载之后
           */
          componentWillUnmount() {
            console.log('componentWillUnmount...');
            // 删除虚拟Portal的装载
            this.mountObject.removeChild(this.contentObj);
          }

          render() {
            return (ReactDOM.createPortal(this.props.children, this.contentObj));
          }
        }

        Modal.propTypes = {
          children: PropTypes.array.isRequired,
          color: PropTypes.string.isRequired,
        };

        class CheakPwd extends React.Component {
          constructor(prop) {
            super(prop);
            this.state = {
              isHidden: true,
              content: '',
            };

            this.content = React.createRef();

            this.handleClick = this.handleClick.bind(this);
            this.handleClickHidden = this.handleClickHidden.bind(this);
            this.handleChange = this.handleChange.bind(this);
          }

          getSnapshotBeforeUpdate(prevProps, prevState) {
            console.log('CheakPwd getSnapshotBeforeUpdate...');
            console.log(prevProps);
            console.log(prevState);
            return 'getSnapshotBeforeUpdate finish';
          }

          componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('CheakPwd componentDidUpdate...');
            console.log(prevProps);
            console.log(prevState);
            console.log(snapshot);
          }

          handleClick() {
            if (this.state.content === '12345687') {
              this.setState({ isHidden: false });
            } else {
              console.log('Your passward is wrong, please input again!');
            }
          }

          handleClickHidden() {
            this.setState({ isHidden: true });
          }

          handleChange(event) {
            let content = event.target.value;

            if (content !== null) {
              this.setState({ content: content });
            } else {
              console.log('your content is empty!');
            }
          }

          render() {
            console.log('CheakPwd render...');
            const modal = this.state.isHidden ? null : (<Modal color="lightpink">你好，这里是Modal<br /> <button onClick={this.handleClickHidden}>Ok</button> </Modal>);
            return (
              <div>
                <h2>Please input the passward</h2>
                <input type="text" value={this.state.content} onChange={this.handleChange} />
                <button onClick={this.handleClick}>check now</button>
                {modal}
              </div>
            );
          }
        }

        ReactDOM.render(<CheakPwd />, document.getElementById('test11'));

        
<h3 id='4.4'>4.4 高级用法</h3>  
        
<h4 id='4.4.1'>4.4.1 虚拟DOM的操纵</h4>  
        
#### 1) Creating React Elements
> - 两个重要的创建方法
> - createElement()
> - createFactory(type)  such as 'div' or 'span' ，但是不建议使用
#### 2) isValidElement()
> - 判别是否是有效的元素
#### 3) React.Children
> - React.Children返回当前标签的子结构
> - children使用的时候可以用this.props.children
> - React.Children.map(children, function[(thisArg)])
> - React.Children.forEach(children, function[(thisArg)])
> - **React.Children.count(children)** Returns the total number of components in children, equal to the number of times that a callback passed to map or forEach would be invoked.
> - **React.Children.only**  Verifies that children has only one child (a React element) and returns it. Otherwise this method throws an error.
> - React.Children.toArray(children)
        
<h3 id='4.5'>4.5 基本语法</h3>  
        
<h4 id='4.5.1'>4.5.1 介绍和使用</h4>  
        
#### 1) React Router组件类型
> - router components
> - route matching components
> - navigation components.
#### 2) 需要的包
> - 'react-router-dom'
        
        import { BrowserRouter, Route, Link } from 'react-router-dom'
> - 安装包
        
        LvHongbins-Mac-2:practice lvhongbin$ npm install --save-dev react-router-dom
        + react-router-dom@4.3.1
        added 10 packages from 5 contributors and audited 10285 packages in 25.18s
        found 10 moderate severity vulnerabilities
          run `npm audit fix` to fix them, or `npm audit` for details
#### 3) 路由的类型 
> - React Router提供了两种路由< BrowserRouter>和< HashRouter>
> - < BrowserRouter> if you have a server that responds to requests 
        
        import { BrowserRouter } from 'react-router-dom'
        ReactDOM.render((
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        ), holder)
> - < HashRouter> if you are using a static file server.
#### 4) 路由的匹配
> - 使用两个标签< Route>和< Switch>
> - < Switch>标签是用来分组的 The < Switch> component is used to group < Route>s together.  
> - < Switch>不是必须的，但是它的存在会非常有用，通过迭代匹配第一个符合要求的router
> - The <Switch> is not required for grouping <Route>s, but it can be quite useful. A <Switch> will iterate over all of its children <Route> elements and only render the first one that matches the current location. This helps when multiple route’s paths match the same pathname, when animating transitions between routes, and in identifying when no routes match the current location (so that you can render a “404” component).
> - 
        
<h4 id='4.5.2'>4.5.2 相关标签的使用</h4>  
        
#### 1) Router 标签
> - 分为四种不同的类型< BrowserRouter>、< HashRouter>、< MemoryRouter>、< NativeRouter>和< StaticRouter>
> - 一般来讲都不主张直接使用Router标签，The most common use-case for using the low-level < Router> is to synchronize a custom history with a state management lib like Redux or Mobx. Note that this is not required to use state management libs alongside React Router, it’s only for deep integration.
> - < StaticRouter>
>> - 主要用在服务器端，因为不需要跳转 This can be useful in server-side rendering scenarios when the user isn’t actually clicking around, so the location never actually changes
>> - context: object 参数传递用的
>> - location: object A location object shaped like { pathname, search, hash, state }
> - <BrowserRouter>
>> - basename={optionalString}
>> - forceRefresh={optionalBool}
>> - getUserConfirmation={optionalFunc}
>> - keyLength={optionalNumber}
> - <HashRouter>
> - <MemoryRouter>
> - <NativeRouter>
#### 2) Link 标签
> - 相当于HTML的link标签，但是比link标签更为强大，< Link>能跳转页面内标签组件
> - Provides declarative, accessible navigation around your application.
> - to
>> - 接收string类型
>> - 接收object类型
>>> - pathname: A string representing the path to link to.
>>> - search: A string represenation of query parameters.
>>> - hash: A hash to put in the URL, e.g. #a-hash.
>>> - state: State to persist to the location.
        
        <Link to={{
          pathname: '/courses',
          search: '?sort=name',
          hash: '#the-hash',
          state: { fromDashboard: true }
        }}/>
> - replace: bool
>> - When true, clicking the link will replace the current entry in the history stack instead of adding a new one.
> - innerRef: function
>> - Allows access to the underlying ref of the component
#### 2) NavLink 标签
> - < Link>的加强版，可以为其配置一系列的active样式
> - A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.
> - activeClassName: string
>> - 提供样式的类名 The class to give the element when it is active. The default given class is active. This will be joined with the className prop.
> - activeStyle: object
>> - 内联样式及的事双大括号，在外面的大括号表示使用JS命令，里面一层的大括号表示对象
> - exact: bool
> - strict: bool
> - isActive: function(match, location) 很奇怪的是，使用了这个函数后，样式就变成一闪而过
#### 2) Switch 标签
> - 在< Switch>标签下只要碰到一个合适的就会被render，然后就结束，如果是<Route>的话就会继续往下匹配，只要成功一个就会render一个，所以< Route>在做动画方面比较有优势
> - < Switch> is unique in that it renders a route exclusively. In contrast, every <Route> that matches the location renders inclusively.
> - This is also useful for animated transitions since the matched <Route> is rendered in the same position as the previous one.
#### 3) Route 标签
> - 有点像转发的意味，一旦匹配得到就会转发到相应的UI组件
> - Its most basic responsibility is to render some UI when a location matches the route’s path.
> - 只要匹配就会自动render
> - A Route is always technically “rendered” even though its rendering null. As soon as the app location matches the route’s path, your component will be rendered.
> - path属性 冒号后面加parasName，然后对应的组件通过this.porps.match.parasName获得相应的变量。当然了，你还可以加一些正则表达式作为过滤的规则，比如直接在参数命的后面加上？号表示不带参数的链接也可以进行传输
        
        const About = ({ match }) => (
          <div>
            <h2>{match.params.username}</h2>
          </div>
        );

        <li><Link to="/user/lvhongbin">/user/lvhongbin</Link></li>
        <li><Link to="/user/lvhongchao">/user/lvhongchao</Link></li>
        <Route path="/user/:username" component={User} />
> - component属性
> - render属性  便捷的内联render函数 func
This allows for convenient inline rendering and wrapping without the undesired remounting explained above.
        
        <li><Link to="/render">内联render</Link></li>
        <Route path="/render" render={() => <div>内联render</div>} />
#### 4) Redirect标签
> - to属性
>> - 接收string类型
>> - 接收object类型 
> - push: bool
>> - 历史是否保存的问题When true, redirecting will push a new entry onto the history instead of replacing the current one.
> - exact: bool
>> - Match from exactly; equivalent to Route.exact.
> - strict: bool
>> - Match from strictly; equivalent to Route.strict.
#### 5) 举例：myfirstrouter.jsx
        
        import React from 'react';
        import ReactDOM from 'react-dom';
        import {
          BrowserRouter,
          Route,
          Link,
          Redirect,
          Switch,
          NavLink,
        } from 'react-Router-dom';
        import realObjectFactor from '../class/isLikeMe.jsx';

        realObjectFactor('div', 'test12');

        const Home = () => (
          <div>
            <h2>Home</h2>
          </div>
        );

        const About = ({ match }) => (
          <div>
            <h2>{match.params.username}</h2>
          </div>
        );

        const Topic = ({ match }) => (
          <div>
            <h3>{match.params.topicId}</h3>
          </div>
        );

        const User = ({ match }) => (
          <h1>
            Hello {match.params.username ? match.params.username : '无参数'}!
          </h1>
        );

        const Topics = ({ match }) => (
          <div>
            <h2>Topics</h2>
            <ul>
              <li>
                <Link to={`${match.url}/rendering`}>
                  Rendering with React
                </Link>
              </li>
              <li>
                <Link to={`${match.url}/components`}>
                  Components
                </Link>
              </li>
              <li>
                <Link to={`${match.url}/props-v-state`}>
                  Props v. State
                </Link>
              </li>
            </ul>

            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route
          exact
          path={match.path}
          render={() => (
              <h3>Please select a topic.</h3>
            )}
            />
          </div>
        );

        const BasicExample = (props) => {
          const log = (match, location) => console.log(`match.params=${match} location=${location}`);
          const activeStyle = { fontWeight: 'bold', color: 'red' };

          (function componentDidMount(state, prop) {
            if (props.children) {
                React.Children.forEach(props.children, (children) => console.log('children.type'));
              } else {
                console.log('it has no children');
              }
          }());


          return (
            <BrowserRouter>
              <div>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><NavLink to="/about" activeStyle={activeStyle}>About</NavLink></li>
                  <li><Link to="/user">/user</Link></li>
                  <li><NavLink to="/user/lvhongbin" activeStyle={activeStyle} isActive={log} >/user/lvhongbin</NavLink></li>
                  <li><NavLink to="/user/lvhongchao" activeStyle={activeStyle} isActive={log} >/user/lvhongchao</NavLink></li>
                  <li><Link to="/user/123">/user/123</Link></li>
                  <li><Link to="/render">内联render</Link></li>
                  <li><Link to="/topics">Topics</Link></li>
                </ul>

                <hr />

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route exact path="/user" component={User} />
                  <Redirect from="/user/123" to="/about" />
                  <Route path="/user/:username([^\d]+)" component={User} />
                  <Route path="/render" render={() => <div>内联render</div>} />
                  <Route path="/topics" component={Topics} />
                </Switch>
              </div>
            </BrowserRouter>
          );
        };

        ReactDOM.render(<BasicExample username="lvhongbin" />, document.getElementById('test12'));
        export default BasicExample;
















