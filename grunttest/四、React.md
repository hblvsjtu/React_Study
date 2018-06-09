# React_Study
        
        
        
## 四、React
        
        
### 作者：冰红茶  
### 参考书籍：《React全栈》 张轩 杨寒星  &&   《深入React技术栈》 陈屹 
### 参考源：[webpack官网文档https://webpack.js.org/concepts/](https://webpack.js.org/concepts/)
### 参考源：[Reactjs官网文档https://reactjs.org ](https://reactjs.org)
  
        
------    
        
        
        
   跟据目前所了解的情况，从MVC到MVVM再到React，前端经历了几个大的技术上的变化，不再是以前单纯的切图做ppt的层次，更多的需要同时具备后端工作的能力，即所谓的大前端或者叫全端。此时React盛起，打算花半个月的时间把他搞通^_ ^
        
        
## 目录
        
## [四、React](#4)
### [4.1 简介](#4.1)
### [4.2 开发环境](#4.2) 
### [4.3 sass的基本用法](#4.3) 
### [4.3 任务流工具 Task Runner](#4.3)
### [4.4 模块打包工具 Bundler](#4.4)  
        
------
        
<h2 id='4'>四、React</h2>
<h3 id='4.1'>4.1 简介</h3>  
        
#### 1) 简介
> - A JavaScript library for building user interfaces
> - 三大组件
>> - 基于组件 组件有着良好的封装性，可以让代码复用，测试和分离变得简单
>> - JSX 可以直接把HTML嵌套在JS中，但是JSX跟HTML并不是一回事，JSX只是作为编译器，利用render把类似HTML结构编译成JavaScript 
>> - Virtual DOM 每个React组件都是用Virtual DOM渲染，它是一种对于HTML DOM节点的抽象描述，不需要浏览器DOM API的支持，在Node.js中也可以使用。另外在用Diff算法，每次更新的时候检查变更的节点，然后修改变更的节点，而非更新整个DOM 
> - 消耗性能最大的地方就是对真实DOM的渲染，由于Diff算法的使用，先计算出虚拟的DOM，在通过Diff算法检查出需要更新的节点，然后只更新那些节点。另外，由于对真实DOM的操作进行了封装，对外只暴露出回调函数的组件属性作为数据的接口，避免性能大量的衰减和引用的失效
> - 
#### 2) 模版创建
                
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
> - 使用方法 非常傻瓜
                
    # 使用 create-react-app命令创建一个模板
    LvHongbins-Mac-2:React lvhongbin$ create-react-app my-react-app

    Creating a new React app in /Users/lvhongbin/Desktop/React_Study/React/my-react-app.

    Installing packages. This might take a couple of minutes.
    Installing react, react-dom, and react-scripts...


    > fsevents@1.2.4 install /Users/lvhongbin/Desktop/React_Study/React/my-react-app/node_modules/fsevents
    > node install

    [fsevents] Success: "/Users/lvhongbin/Desktop/React_Study/React/my-react-app/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" already installed
    Pass --update-binary to reinstall or --build-from-source to recompile

    > uglifyjs-webpack-plugin@0.4.6 postinstall /Users/lvhongbin/Desktop/React_Study/React/my-react-app/node_modules/uglifyjs-webpack-plugin
    > node lib/post_install.js

    + react-dom@16.4.0
    + react@16.4.0
    + react-scripts@1.1.4
    added 1387 packages from 826 contributors and audited 14354 packages in 332.088s
    found 0 vulnerabilities


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
        
#### 1) 安装nvm,node和npm
> - nvm
                
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
> - 使用nvm
    
    Usage:
      nvm --help                                Show this message
      nvm --version                             Print out the installed version of nvm
      nvm install [-s] <version>                Download and install a <version>, [-s] from source. Uses .nvmrc if available
        --reinstall-packages-from=<version>     When installing, reinstall packages installed in <node|iojs|node version number>
        --lts                                   When installing, only select from LTS (long-term support) versions
        --lts=<LTS name>                        When installing, only select from versions for a specific LTS line
        --skip-default-packages                 When installing, skip the default-packages file if it exists
        --latest-npm                            After installing, attempt to upgrade to the latest working npm on the given node version
      nvm uninstall <version>                   Uninstall a version
      nvm uninstall --lts                       Uninstall using automatic LTS (long-term support) alias `lts/*`, if available.
      nvm uninstall --lts=<LTS name>            Uninstall using automatic alias for provided LTS line, if available.
      nvm use [--silent] <version>              Modify PATH to use <version>. Uses .nvmrc if available
        --lts                                   Uses automatic LTS (long-term support) alias `lts/*`, if available.
        --lts=<LTS name>                        Uses automatic alias for provided LTS line, if available.
      nvm exec [--silent] <version> [<command>] Run <command> on <version>. Uses .nvmrc if available
        --lts                                   Uses automatic LTS (long-term support) alias `lts/*`, if available.
        --lts=<LTS name>                        Uses automatic alias for provided LTS line, if available.
      nvm run [--silent] <version> [<args>]     Run `node` on <version> with <args> as arguments. Uses .nvmrc if available
        --lts                                   Uses automatic LTS (long-term support) alias `lts/*`, if available.
        --lts=<LTS name>                        Uses automatic alias for provided LTS line, if available.
      nvm current                               Display currently activated version
      nvm ls                                    List installed versions
      nvm ls <version>                          List versions matching a given <version>
      nvm ls-remote                             List remote versions available for install
        --lts                                   When listing, only show LTS (long-term support) versions
      nvm ls-remote <version>                   List remote versions available for install, matching a given <version>
        --lts                                   When listing, only show LTS (long-term support) versions
        --lts=<LTS name>                        When listing, only show versions for a specific LTS line
      nvm version <version>                     Resolve the given description to a single local version
      nvm version-remote <version>              Resolve the given description to a single remote version
        --lts                                   When listing, only select from LTS (long-term support) versions
        --lts=<LTS name>                        When listing, only select from versions for a specific LTS line
      nvm deactivate                            Undo effects of `nvm` on current shell
      nvm alias [<pattern>]                     Show all aliases beginning with <pattern>
      nvm alias <name> <version>                Set an alias named <name> pointing to <version>
      nvm unalias <name>                        Deletes the alias named <name>
      nvm install-latest-npm                    Attempt to upgrade to the latest working `npm` on the current node version
      nvm reinstall-packages <version>          Reinstall global `npm` packages contained in <version> to current version
      nvm unload                                Unload `nvm` from shell
      nvm which [current | <version>]           Display path to installed node version. Uses .nvmrc if available
      nvm cache dir                             Display path to the cache directory for nvm
      nvm cache clear                           Empty cache directory for nvm

    Example:
      nvm install 8.0.0                     Install a specific version number
      nvm use 8.0                           Use the latest available 8.0.x release
      nvm run 6.10.3 app.js                 Run app.js using node 6.10.3
      nvm exec 4.8.3 node app.js            Run `node app.js` with the PATH pointing to node 4.8.3
      nvm alias default 8.1.0               Set default node version on a shell
      nvm alias default node                Always default to the latest available node version on a shell

    Note:
      to remove, delete, or uninstall nvm - just remove the `$NVM_DIR` folder (usually `~/.nvm`)

> - 
#### 2) ES6编译工具：Babel
> - 安装babel-loader babel-core 
        
    babel-pLvHongbins-Mac-2:first_react_app lvhongbin$ npm install --save-dev babel-loader babel-core
    npm WARN babel-loader@7.1.4 requires a peer of webpack@2 || 3 || 4 but none is installed. You must install peer dependencies yourself.

    * babel-core@6.26.3
    * babel-loader@7.1.4
    added 66 packages from 60 contributors and audited 226 packages in 18.025s
    found 0 vulnerabilities
> - 安装预设
>> -   
    
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
> - 添加.babelre文件
                
    # 编辑.babelre文件
    LvHongbins-Mac-2:first_react_app lvhongbin$ touch .babelre && echo '{ "presets": ["env", "react"] }' > .babelrc
    LvHongbins-Mac-2:first_react_app lvhongbin$ cat .babelre
    {
      "presets": ["env", "react"]
    }
> - 两种使用的方法
>> 使用命令行
    
    babel script.js --presets react 
>> - 使用config 无.jsx
    
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
>> - 使用node API
    
    require("babel-core").transform("code", {
      presets: ["react"]
    });
>> - 使用loader 无.jsx
    
    var Person = require("babel!./Person.js").default;
    new Person();
#### 3) CSS预处理器：[Sass](http://sass-lang.com)
> - CSS with superpowers
> - Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
> - 编译前置，无需考虑浏览器兼容性的问题
> - 拥有很多方便的特性：
>> - 设置变量
>> - 树状结构
>> -  
> - 全局安装
                
                LvHongbins-Mac-2:first_react_app lvhongbin$ npm install -g sass
                /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/sass -> /Users/lvhongbin/software/node-v10.3.0-darwin-x64/lib/node_modules/sass/sass.js
                + sass@1.5.1
                added 1 package from 1 contributor in 7.433s
                LvHongbins-Mac-2:first_react_app lvhongbin$ ln -s /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/sass /usr/local/bin/sass
                LvHongbins-Mac-2:first_react_app lvhongbin$ sass --version
                1.5.1 compiled with dart2js 2.0.0-dev.59.0
#### 4) 测试环境：[Karma](http://karma-runner.github.io/2.0/index.html)
> - Things should be simple. We believe in testing and so we want to make it as simple as possible.
> - 快速响应 The main goal for Karma is to bring a productive testing environment to developers. The environment being one where they don't have to set up loads of configurations, but rather a place where developers can just write the code and get instant feedback from their tests. Because getting quick feedback is what makes you productive and creative.
> - 安装 这个必须要全局安装完后再进行本地安装，才能执行验证安装的相关操作
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
#### 5) 工程构建工具：[webpack](https://webpack.js.org/concepts/)
> - 首先安装webpack  
    
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install --save-dev webpack
    npm WARN karma-chai@0.1.0 requires a peer of chai@* but none is installed. You must install peer dependencies yourself.
    npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.

    + webpack@4.11.1
    added 313 packages from 252 contributors and audited 7789 packages in 111.602s
    found 6 vulnerabilities (1 low, 5 moderate)
      run `npm audit fix` to fix them, or `npm audit` for details
> - 开发环境的配置
>> - 然后安装webpack服务器
    
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install --save-dev webpack-dev-server
    npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
    npm WARN karma-chai@0.1.0 requires a peer of chai@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-hot-loader@4.3.0 requires a peer of react@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.

    + webpack-dev-server@3.1.4
    added 206 packages from 135 contributors and audited 11164 packages in 63.294s
    found 6 vulnerabilities (1 low, 5 moderate)
      run `npm audit fix` to fix them, or `npm audit` for details
>> - 装一些loader和插件: babel-loader sass-loader style-loader css-loader file-loader babel-loader babel-core babel-preset-env  @babel/runtime --save @babel/plugin-transform-runtime express webpack-dev-middleware
    
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
> - 线上环境的配置
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
#### 6) 安装React环境
> - 安装插件 react react-dom
        
    LvHongbins-Mac-2:first_react_app lvhongbin$ npm install --save react react-dom
    npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
    npm WARN extract-text-webpack-plugin@3.0.2 requires a peer of webpack@^3.1.0 but none is installed. You must install peer dependencies yourself.
    npm WARN karma-chai@0.1.0 requires a peer of chai@* but none is installed. You must install peer dependencies yourself.

    + react@16.4.0
    + react-dom@16.4.0
    added 2 packages and audited 11827 packages in 22.337s
    found 6 vulnerabilities (1 low, 5 moderate)
      run `npm audit fix` to fix them, or `npm audit` for details
#### 7) 安装语法检查ESLint
> - 类似的还有JSLint, JSHint, JSCS
> - ESLint特点是提供一个完全可配置的检查规则，并且有大量的第三方插件
> - 有着ES6的最佳支持，还支持JSX语法
> - 

        
<h3 id='4.3'>4.3 sass的基本用法</h3>  
        
#### 1) 设置变量
> - 变量前面需要有$
                
                $font-stack:    Helvetica, sans-serif
                $primary-color: #333

                body
                  font: 100% $font-stack
                  color: $primary-color

> - 
> - 
> - 
> - 
> - 
> - 
> - 
> - 
> - 
> - 
> - 
> - 
> - 


                















