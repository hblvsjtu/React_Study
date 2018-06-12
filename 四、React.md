# React_Study
        
        
        
## [四、React](#4)
        
        
### 作者：冰红茶  
### 参考书籍：《React全栈》 张轩 杨寒星  &&   《深入React技术栈》 陈屹 
### 参考源：[webpack官网文档https://webpack.js.org/concepts/](https://webpack.js.org/concepts/)
### 参考源：[Reactjs官网文档https://reactjs.org ](https://reactjs.org)
### 参考源：[sass教学视频](https://www.bilibili.com/video/av17492787/?p=1)
  
        
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
    added 26 packages from 19 contributors and audited 8834 packages in 14.461s
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
> -        
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
#### 2) setState()
> - 而通过this.setState方法可以再次调用render的方法，来渲染新的UI
> - 如果你直接改变this.state内部属性的值是不能直接渲染的，因为你还缺少来render方法
> - 异步更新，所以你不能依赖它的值去计算下一个状态 State Updates May Be Asynchronous，Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
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



                















