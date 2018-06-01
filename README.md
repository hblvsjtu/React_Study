# React_Study


### 作者：冰红茶  
### 参考书籍：《React全栈》 张轩 杨寒星   

------    



   跟据目前所了解的情况，从MVC到MVVM再到React，前端经历了几个大的技术上的变化，不再是以前单纯的切图做ppt的层次，更多的需要同时具备后端工作的能力，即所谓的大前端或者叫全端。此时React盛起，打算花半个月的时间把他搞通^_ ^
  
## 目录

## [一、现代前端开发](#1)
### [1.1 新一代JS标准](#1.1)
### [1.2 对象拓展](#1.2) 
### [1.3 数组化](#1.3) 
### [1.4 类型的判断](#1.4)
### [1.5 无冲突处理](#1.5)
## [二、环境的安装](#2)
### [2.1 Homebrew](#2.1)
### [2.2 wget](#2.2) 
### [2.3 Node](#2.3) 
### [2.4 babel](#2.4)
### [2.5 无冲突处理](#2.5)  
------      
        

<h2 id='1'> 一、现代前端开发</h2>
<h3 id='1.1'>1.1 新一代JS标准</h3>  

#### 1) 语言特性
> - const 只读，但是可以修改属性
        
                21:29:42.877 const myName = {name: 'lvhongbin'};
                21:30:09.381 const myName.name = 'binghongcha';
                21:30:24.318 myName.name = 'binghongcha';
                21:30:24.322 "binghongcha"
> - let 创建封闭作用域
#### 2) 函数 
> - 箭头函数 
        
                (参数) => {return 返回值}

                或者：
                (参数) => 表达式
                ((a,b) => a+b)(1,2);
                => 3

> - 嵌套this的作用 对象方法中嵌套函数，this会指向global，这被看作是JS在设计上的缺陷
        
                var testvar = 'window属性';  
                var o1 = {  
                    testvar: '1',   
                    fun: function() {  
                        var testvar = 3;
                        console.log('o1: '+this.testvar+'<<');  
                    }  
                };  
                var o2 = {  
                    testvar:'2',   
                    fun:function() {  
                        console.log('o2: '+this.testvar);  
                    }  
                };  
                o1.fun();  
                o2.fun(); 
                o1.fun.call(o2);  

                结果：
                22:06:37.382 VM908:6 o1: 1<<
                22:06:37.382 VM908:12 o2: 2
                22:06:37.382 VM908:6 o1: 2<<

                var testvar = 'window属性';  
                var o1 = {  
                    testvar: '1',   
                    fun: function() {  
                        var testvar = 3;
                        setTimeout(function(){console.log('o1: '+this.testvar+'<<');},100);
                    }  
                };  
                var o2 = {  
                    testvar:'2',   
                    fun:function() {  
                        console.log('o2: '+this.testvar);  
                    }  
                };  
                o1.fun();  
                o2.fun(); 
                o1.fun.call(o2); 
                结果： 
                22:01:42.512 VM907:12 o2: 2
                22:01:42.519 undefined
                22:01:42.613 VM907:6 o1: window属性<<
                22:01:42.614 VM907:6 o1: window属性<<
> - 解决办法 详细看[jlu16的博客](https://blog.csdn.net/jlu16/article/details/77727639)
>> - 在内部函数中将外部对象（obj）的this同名覆盖了，如果预先将外部的this保存在一个不会被覆盖的量中，便可在内部函数中直接使用。
        
                var obj = {
                    val : 1,
                    outShow : function(){
                        var that = this;
                        (function(){
                            alert(that.val);
                         })();
                    }
                };
                obj.outShow();
>> - 采用bind,call或者apply等进行绑定
        
                var obj = {
                    val : 1,
                    outShow : function(){
                        (function(){
                            alert(this.val);
                         }).call(this);
                    }
                };
                obj.outShow();
>> - 或者采用箭头函数 
        
                val =2;
                var obj = {
                    val: 1,
                    outShow: function(){
                        (() => alert(this.val))();
                    }
                };
                obj.outShow();
> - 函数的默认参数
        
                var func = function(a1 = 1, a2 = 2) {

                    //do sometiong
                }

        
------      
        
        
<h2 id='2'>二、环境的安装</h2>
<h3 id='2.1'>2.1 Homebrew</h3>  
        
#### 1) 简介，安装与卸载
> -  Homebrew是以最简单，最灵活的方式来安装苹果公司在MacOS中不包含的UNIX工具
> -  安装 /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
        
                LvHongbins-Mac:~ lvhongbin$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
                ==> This script will install:
                /usr/local/bin/brew
                /usr/local/share/doc/homebrew
                /usr/local/share/man/man1/brew.1
                /usr/local/share/zsh/site-functions/_brew
                /usr/local/etc/bash_completion.d/brew
                /usr/local/Homebrew
                ==> The following new directories will be created:
                /usr/local/Cellar
                /usr/local/Homebrew
                /usr/local/Frameworks
                /usr/local/bin
                /usr/local/etc
                /usr/local/include
                /usr/local/lib
                /usr/local/opt
                /usr/local/sbin
                /usr/local/share
                /usr/local/share/zsh
                /usr/local/share/zsh/site-functions
                /usr/local/var
                ==> The Xcode Command Line Tools will be installed.

                Press RETURN to continue or any other key to abort
                ==> /usr/bin/sudo /bin/mkdir -p /usr/local/Cellar /usr/local/Homebrew /usr/local/Frameworks /usr/local/bin /usr/local/etc /usr/local/include /usr/local/lib /usr/local/opt /usr/local/sbin /usr/local/share /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var
                Password:
                ==> /usr/bin/sudo /bin/chmod g+rwx /usr/local/Cellar /usr/local/Homebrew /usr/local/Frameworks /usr/local/bin /usr/local/etc /usr/local/include /usr/local/lib /usr/local/opt /usr/local/sbin /usr/local/share /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var
                ==> /usr/bin/sudo /bin/chmod 755 /usr/local/share/zsh /usr/local/share/zsh/site-functions
                ==> /usr/bin/sudo /usr/sbin/chown lvhongbin /usr/local/Cellar /usr/local/Homebrew /usr/local/Frameworks /usr/local/bin /usr/local/etc /usr/local/include /usr/local/lib /usr/local/opt /usr/local/sbin /usr/local/share /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var
                ==> /usr/bin/sudo /usr/bin/chgrp admin /usr/local/Cellar /usr/local/Homebrew /usr/local/Frameworks /usr/local/bin /usr/local/etc /usr/local/include /usr/local/lib /usr/local/opt /usr/local/sbin /usr/local/share /usr/local/share/zsh /usr/local/share/zsh/site-functions /usr/local/var
                ==> /usr/bin/sudo /bin/mkdir -p /Users/lvhongbin/Library/Caches/Homebrew
                ==> /usr/bin/sudo /bin/chmod g+rwx /Users/lvhongbin/Library/Caches/Homebrew
                ==> /usr/bin/sudo /usr/sbin/chown lvhongbin /Users/lvhongbin/Library/Caches/Homebrew
                ==> /usr/bin/sudo /bin/mkdir -p /Library/Caches/Homebrew
                ==> /usr/bin/sudo /bin/chmod g+rwx /Library/Caches/Homebrew
                ==> /usr/bin/sudo /usr/sbin/chown lvhongbin /Library/Caches/Homebrew
                ==> Searching online for the Command Line Tools
                ==> /usr/bin/sudo /usr/bin/touch /tmp/.com.apple.dt.CommandLineTools.installondemand.in-progress
                ==> Installing Command Line Tools (macOS High Sierra version 10.13) for Xcode-9.4
                ==> /usr/bin/sudo /usr/sbin/softwareupdate -i Command\ Line\ Tools\ (macOS\ High\ Sierra\ version\ 10.13)\ for\ Xcode-9.4
                Software Update Tool


                Downloading Command Line Tools (macOS High Sierra version 10.13) for Xcode
                Downloaded Command Line Tools (macOS High Sierra version 10.13) for Xcode
                Installing Command Line Tools (macOS High Sierra version 10.13) for Xcode
                Done with Command Line Tools (macOS High Sierra version 10.13) for Xcode
                Done.
                ==> /usr/bin/sudo /bin/rm -f /tmp/.com.apple.dt.CommandLineTools.installondemand.in-progress
                ==> /usr/bin/sudo /usr/bin/xcode-select --switch /Library/Developer/CommandLineTools
                ==> Downloading and installing Homebrew...
                remote: Counting objects: 101963, done.
                remote: Compressing objects: 100% (43/43), done.
                remote: Total 101963 (delta 26), reused 36 (delta 18), pack-reused 101900
                Receiving objects: 100% (101963/101963), 23.26 MiB | 804.00 KiB/s, done.
                Resolving deltas: 100% (74243/74243), done.
                From https://github.com/Homebrew/brew
                 * [new branch]          master     -> origin/master
                 * [new tag]             0.1        -> 0.1
                 ...
                 * [new tag]             1.6.6      -> 1.6.6
                HEAD is now at 43bb5d28d Merge pull request #4247 from MikeMcQuaid/bump-formula-pr-bad-args
                ==> Tapping homebrew/core
                Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core'...
                remote: Counting objects: 4780, done.
                remote: Compressing objects: 100% (4563/4563), done.
                remote: Total 4780 (delta 49), reused 1146 (delta 29), pack-reused 0
                Receiving objects: 100% (4780/4780), 3.88 MiB | 852.00 KiB/s, done.
                Resolving deltas: 100% (49/49), done.
                Tapped 4568 formulae (4,821 files, 12.2MB)
                ==> Cleaning up /Library/Caches/Homebrew...
                ==> Migrating /Library/Caches/Homebrew to /Users/lvhongbin/Library/Caches/Homebrew...
                ==> Deleting /Library/Caches/Homebrew...
                Already up-to-date.
                ==> Installation successful!

                ==> Homebrew has enabled anonymous aggregate user behaviour analytics.
                Read the analytics documentation (and how to opt-out) here:
                  https://docs.brew.sh/Analytics.html

                ==> Next steps:
                - Run `brew help` to get started
                - Further documentation: 
                    https://docs.brew.sh
> - 卸载 /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
#### 2) 常用命令
> - 安装软件，如：brew install oclint
> - 卸载软件，如：brew uninstall oclint
> - 搜索软件，如：brew search oclint
> - 更新软件，如：brew upgrade oclint
> - 查看安装列表， 如：brew list
> - 更新Homebrew，如：brew update
        
<h3 id='2.2'>2.2 wget</h3>  
        
#### 1) 简介，安装与卸载
> -  wget是我在Centos中用得最多的远程下载安装包的程序
> -  brew install wget
                
                LvHongbins-Mac:software lvhongbin$ brew search wget
                ==> Searching local taps...
                wget                                                                             wgetpaste
                ==> Searching taps on GitHub...
                ==> Searching blacklisted, migrated and deleted formulae...
                LvHongbins-Mac:software lvhongbin$ brew install wget
                Updating Homebrew...
                ==> Auto-updated Homebrew!
                Updated 1 tap (homebrew/core).
                No changes to formulae.

                ==> Installing dependencies for wget: gettext, libunistring, libidn2, openssl
                ==> Installing wget dependency: gettext
                ==> Downloading https://homebrew.bintray.com/bottles/gettext-0.19.8.1.high_sierra.bottle.tar.gz
                ######################################################################## 100.0%
                ==> Pouring gettext-0.19.8.1.high_sierra.bottle.tar.gz
                ==> Caveats
                This formula is keg-only, which means it was not symlinked into /usr/local,
                because macOS provides the BSD gettext library & some software gets confused if both are in the library path.

                If you need to have this software first in your PATH run:
                  echo 'export PATH="/usr/local/opt/gettext/bin:$PATH"' >> ~/.bash_profile

                For compilers to find this software you may need to set:
                    LDFLAGS:  -L/usr/local/opt/gettext/lib
                    CPPFLAGS: -I/usr/local/opt/gettext/include

                ==> Summary
                🍺  /usr/local/Cellar/gettext/0.19.8.1: 1,935 files, 16.9MB
                ==> Installing wget dependency: libunistring
                ==> Downloading https://homebrew.bintray.com/bottles/libunistring-0.9.10.high_sierra.bottle.tar.gz
                ######################################################################## 100.0%
                ==> Pouring libunistring-0.9.10.high_sierra.bottle.tar.gz
                🍺  /usr/local/Cellar/libunistring/0.9.10: 54 files, 4.4MB
                ==> Installing wget dependency: libidn2
                ==> Downloading https://homebrew.bintray.com/bottles/libidn2-2.0.5.high_sierra.bottle.tar.gz
                ######################################################################## 100.0%
                ==> Pouring libidn2-2.0.5.high_sierra.bottle.tar.gz
                🍺  /usr/local/Cellar/libidn2/2.0.5: 68 files, 669.1KB
                ==> Installing wget dependency: openssl
                ==> Downloading https://homebrew.bintray.com/bottles/openssl-1.0.2o_1.high_sierra.bottle.tar.gz
                ######################################################################## 100.0%
                ==> Pouring openssl-1.0.2o_1.high_sierra.bottle.tar.gz
                ==> Caveats
                A CA file has been bootstrapped using certificates from the SystemRoots
                keychain. To add additional certificates (e.g. the certificates added in
                the System keychain), place .pem files in
                  /usr/local/etc/openssl/certs

                and run
                  /usr/local/opt/openssl/bin/c_rehash

                This formula is keg-only, which means it was not symlinked into /usr/local,
                because Apple has deprecated use of OpenSSL in favor of its own TLS and crypto libraries.

                If you need to have this software first in your PATH run:
                  echo 'export PATH="/usr/local/opt/openssl/bin:$PATH"' >> ~/.bash_profile

                For compilers to find this software you may need to set:
                    LDFLAGS:  -L/usr/local/opt/openssl/lib
                    CPPFLAGS: -I/usr/local/opt/openssl/include

                ==> Summary
                🍺  /usr/local/Cellar/openssl/1.0.2o_1: 1,791 files, 12.3MB
                ==> Installing wget
                ==> Downloading https://homebrew.bintray.com/bottles/wget-1.19.5.high_sierra.bottle.tar.gz
                ######################################################################## 100.0%
                ==> Pouring wget-1.19.5.high_sierra.bottle.tar.gz
                🍺  /usr/local/Cellar/wget/1.19.5: 50 files, 3.7MB

        
<h3 id='2.3'>2.3 node</h3>  
        
#### 1) 简介，安装与卸载
> -  node这个我们未来的核心，服务器的主要JacvaScript编译器
                
                LvHongbins-Mac:software lvhongbin$ wget https://nodejs.org/dist/v10.3.0/node-v10.3.0-darwin-x64.tar.gz
                --2018-06-01 14:35:34--  https://nodejs.org/dist/v10.3.0/node-v10.3.0-darwin-x64.tar.gz
                Resolving nodejs.org (nodejs.org)... 104.20.22.46, 104.20.23.46
                Connecting to nodejs.org (nodejs.org)|104.20.22.46|:443... connected.
                HTTP request sent, awaiting response... 200 OK
                Length: 16108647 (15M) [application/gzip]
                Saving to: 'node-v10.3.0-darwin-x64.tar.gz'

                node-v10.3.0-darwin-x64.tar.gz          100%[===============================================================================>]  15.36M   461KB/s    in 32s     

                2018-06-01 14:36:09 (486 KB/s) - 'node-v10.3.0-darwin-x64.tar.gz' saved [16108647/16108647]

                LvHongbins-Mac:software lvhongbin$ ls
                node-v10.3.0-darwin-x64.tar.gz
                LvHongbins-Mac:software lvhongbin$ tar -xvf node-v10.3.0-darwin-x64.tar.gz
> - 配置环境变量
> - -bash: ./node: Too many levels of symbolic links的出现，原因是建立软连接的时候采用的是相对路径，所以才会产生这样的错误，解决方式是采用绝对路径建立软链接
> - ln: /usr/local/node: Permission denied的出现，原因是全县不够，可以在前面加上sudo
                
                LvHongbins-Mac:node-v10.3.0-darwin-x64 lvhongbin$ sudo ln -s /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/node /usr/local/bin/node
                LvHongbins-Mac:node-v10.3.0-darwin-x64 lvhongbin$ sudo ln -s /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/npm /usr/local/bin/npm
                LvHongbins-Mac:node-v10.3.0-darwin-x64 lvhongbin$ node -v
                v10.3.0
                LvHongbins-Mac:node-v10.3.0-darwin-x64 lvhongbin$ npm -v
                6.1.0
> - 测试 输入.exit然后回车退出
        
                LvHongbins-Mac:~ lvhongbin$ node
                > console.log('Hello World');
                Hello World
                undefined
                > .exit

        
<h3 id='2.4'>2.4 babel</h3>  
        
#### 1) 简介，安装与卸载
> -  Babel is a JavaScript compiler,Use next generation JavaScript, today.
> -  主要用来把高版本的JS翻译成低版本，比如把es6转化为es5
        
                LvHongbins-Mac:software lvhongbin$ npm install babel-cli -g
                /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/babel-doctor -> /Users/lvhongbin/software/node-v10.3.0-darwin-x64/lib/node_modules/babel-cli/bin/babel-doctor.js
                /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/babel -> /Users/lvhongbin/software/node-v10.3.0-darwin-x64/lib/node_modules/babel-cli/bin/babel.js
                /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/babel-node -> /Users/lvhongbin/software/node-v10.3.0-darwin-x64/lib/node_modules/babel-cli/bin/babel-node.js
                /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/babel-external-helpers -> /Users/lvhongbin/software/node-v10.3.0-darwin-x64/lib/node_modules/babel-cli/bin/babel-external-helpers.js
                + babel-cli@6.26.0
                updated 1 package in 19.797s
                LvHongbins-Mac:software lvhongbin$ export PATH="${PATH}:/Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin"
                LvHongbins-Mac:software lvhongbin$ babel -V
                6.26.0 (babel-core 6.26.3)
> -  期间你还会遇到环境变量的问题，因为Babel安装在node安装目录的bin文件夹里面，所以需要把那个文件夹export到环境变量中
        
                LvHongbins-Mac:software lvhongbin$ export PATH="${PATH}:/Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin"
                LvHongbins-Mac:software lvhongbin$ babel -V
                6.26.0 (babel-core 6.26.3)
> -  安装预设preset 具体可以查看[官网教程](https://babeljs.io/docs/plugins/preset-es2015)
> -  其中cli表示command-line interface，命令行界面，具体可以看[百度百科](https://baike.baidu.com/item/命令行界面/9910197?fr=aladdin&fromtitle=CLI&fromid=2898851)
> -  旧版的预设和运行
                
                # 安装预设 不过这是旧版的预设
                LvHongbins-Mac:EnvironmentCreat lvhongbin$ npm install --save-dev babel-cli babel-preset-es2015
                npm WARN deprecated babel-preset-es2015@6.24.1: 🙌  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update! 

                > fsevents@1.2.4 install /Users/lvhongbin/Desktop/React_Study/EnvironmentCreat/node_modules/fsevents
                > node install

                [fsevents] Success: "/Users/lvhongbin/Desktop/React_Study/EnvironmentCreat/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" already installed
                Pass --update-binary to reinstall or --build-from-source to recompile
                npm WARN saveError ENOENT: no such file or directory, open '/Users/lvhongbin/Desktop/React_Study/EnvironmentCreat/package.json'
                npm WARN enoent ENOENT: no such file or directory, open '/Users/lvhongbin/Desktop/React_Study/EnvironmentCreat/package.json'
                npm WARN EnvironmentCreat No description
                npm WARN EnvironmentCreat No repository field.
                npm WARN EnvironmentCreat No README data
                npm WARN EnvironmentCreat No license field.

                + babel-cli@6.26.0
                + babel-preset-es2015@6.24.1
                added 160 packages from 110 contributors, updated 1 package and audited 4224 packages in 23.58s
                found 0 vulnerabilities
                
                # 旧版
                LvHongbins-Mac:EnvironmentCreat lvhongbin$ echo '{ "presets": ["es2015"] }' > .babelrc
                LvHongbins-Mac:EnvironmentCreat lvhongbin$ cat .babelrc
                { "presets": ["es2015"] }
                LvHongbins-Mac:EnvironmentCreat lvhongbin$ babel ./jsTest.js -o ./compiled.js
                LvHongbins-Mac:EnvironmentCreat lvhongbin$ cat ./compiled.js
                "use strict";
                
                # 转换后的代码
                var a = [1, 2, 3];
                var b = a.map(function (ele) {
                  return ele * 2;
                });
                console.log(b);

                # 原版代码
                LvHongbins-Mac:EnvironmentCreat lvhongbin$ cat ./jsTest.js
                var a = [1, 2, 3];
                var b = a.map((ele) => ele*2) ;
                console.log(b);LvHongbins-Mac:EnvironmentCreat lvhongbin$ 
> - 新版的预设 npm install babel-preset-env --save-dev 旧版和新版的差异请看[官网](http://babeljs.io/env/)
                
                LvHongbins-Mac:EnvironmentCreat lvhongbin$ npm install babel-preset-env --save-dev
                LvHongbins-Mac:EnvironmentCreat lvhongbin$ echo '{ "presets": ["env"] }' > .babelrc
                LvHongbins-Mac:EnvironmentCreat lvhongbin$ babel ./jsTest.js -o ./compiled.js
                LvHongbins-Mac:EnvironmentCreat lvhongbin$ cat ./compiled.js
                "use strict";

                var a = [1, 2, 3];
                var b = a.map(function (ele) {
                  return ele * 2;
                });
                console.log(b);
                LvHongbins-Mac:EnvironmentCreat lvhongbin$ 
> - 
#### 2) .babelrc的写法，具体可以看[官网教程](https://babeljs.io/docs/plugins/preset-env)
> - target：{ [string]: number | string }, defaults to {}. 
>> - 属性可选范围：chrome, opera, edge, firefox, safari, ie, ios, android, node, electron
>> - 对于浏览器的属性值可指定为：last 2 versions, > 5%
> - loose boolean, defaults to false Enable “loose” transformations for any plugins in this preset that allow them.
> - modules "amd" | "umd" | "systemjs" | "commonjs" | false, defaults to "commonjs" Enable transformation of ES6 module syntax to another module type Setting this to false will not transform modules
> - 
> - Target Chrome 52 with webpack 2/rollup and loose mode
        
                {
                  "presets": [
                    ["env", {
                      "targets": {
                        "chrome": 52
                      },
                      "modules": false,
                      "loose": true
                    }]
                  ]
                }  
> -  Target specific browsers via browserslist
        
                {
                  "presets": [
                    ["env", {
                      "targets": {
                        "chrome": 52,
                        "browsers": ["last 2 versions", "safari 7"]
                      }
                    }]
                  ]
                }
> - Target latest node via node: true or node: "current"
        
                {
                  "presets": [
                    ["env", {
                      "targets": {
                        "node": "current"
                      }
                    }]
                  ]
                }        
> -  Include and exclude specific plugins/built-ins
        
                {
                  "presets": [
                    ["env", {
                      "targets": {
                        "browsers": ["last 2 versions", "safari >= 7"]
                      },
                      "include": ["transform-es2015-arrow-functions", "es6.map"],
                      "exclude": ["transform-regenerator", "es6.set"]
                    }]
                  ]
                }
> -                          
















