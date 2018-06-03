# React_Study


### 作者：冰红茶  
### 参考书籍：《React全栈》 张轩 杨寒星   

------    



   跟据目前所了解的情况，从MVC到MVVM再到React，前端经历了几个大的技术上的变化，不再是以前单纯的切图做ppt的层次，更多的需要同时具备后端工作的能力，即所谓的大前端或者叫全端。此时React盛起，打算花半个月的时间把他搞通^_ ^
  
## 目录

## [一、现代前端开发](#1)
### [1.1 新一代JS标准](#1.1)
### [1.2 前端组件化方案](#1.2) 
### [1.3 任务流工具](#1.3) 
## [二、环境的安装](#2)
### [2.1 Homebrew](#2.1)
### [2.2 wget](#2.2) 
### [2.3 node & npm](#2.3) 
### [2.4 package.json](#2.4)
### [2.5 babel](#2.5)
### [2.6 jshint](#2.6)  
### [2.7 uglifejs](#2.7)  
        
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

<h3 id='1.2'>1.2 前端组件化方案</h3>  
        
#### 1) 模块和组件
> - 模块是语言层面的，一般指JavaScript文件
> - 组件往往表现在业务层面上的概念，一个可独立使用的功能的实现，往往表现为一个UI部件
#### 2) JavaScript模块化的方案
> - 大约经历过三个阶段：
>> - 全局变量+命名空间
>> - AMD和CommonJS Node.js使用的正是CommonJS的规范，CommonJS的规范中变量的输入和输出都挂载到模块的exports属性和require属性中如：
        
                # condition.js
                /* ***************************************************************
                 *
                 * * Filename: condition.js
                 *
                 * * Description:apply some neccessary condition to find a GF 
                         as a module for findGF.js. Process, Generator,trump function and
                         execute function will be used in this process.
                 *
                 * * Version: 1.0
                 *
                 * * Created: 2018/06/03
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

                var calulate = function(str=null, value=5) {
                    return new Promise(function(resolve, reject){resolve(`${str} fib(${value})=${fib(value)}`)});
                }


                // Fibonacci function
                var fib = (n => n<2?n:fib(n-1)+fib(n-2));

                // print function
                var printCondition = function(str) {
                    console.log("开始执行printCondition!");
                    console.log(str);
                    console.log("结束执行printCondition!");
                }

                // generator for printing the conditions
                var gen = function* () {
                    
                    // defined the valuables
                    let a = "You must be smart and strong enough to protect everything you care!";
                    let b = "You must learn C, Java, JavaScript!";
                    let c = "You must earn much money and keep fit!";
                    
                    yield calulate(a, 10);
                    yield calulate(b, 20);
                    yield calulate(c, 30);

                }

                /* 
                 * trump function
                 * 关键是把generator，next()的结果和回调函数callback三个分离开来
                 */
                var trump = function(fn) {
                    return function(arg) {
                        return function(callback) { 
                            arg.value.then(callback);   
                            return fn;
                        }
                    }
                }

                //execute function
                var execute = function(gen) {
                    
                    // 新建一个generator
                    let g = gen();
                    
                    // 指针指向generator的第一个yield
                    let result = g.next();
                    
                    // 新建一个trump转换器
                    let t = trump(g)

                    /* 
                     * 迭代循环，循环的关键是把generation和next()的结果分开
                     * 这是因为next()的结果用来循环判断的指标，
                     * 而generation用来作为返回值使用
                     */ 
                    while(!result.done) {
                        
                        // 返回迭代器generator，并执行一个yield的值函数
                        let gen=t(result)(printCondition);
                        
                        // 指针指向下一个yield
                        result = gen.next();        
                    }
                }

                // 输出execute模块并挂在exports中
                exports.execute = execute;
                exports.gen = gen;


                # findGF.js
                LvHongbins-Mac-2:commonJS_module lvhongbin$ cat findGF.js
                /* ***************************************************************
                 *
                 * * Filename: findGF.js
                 *
                 * * Description:required condition.js to find GF
                 *
                 * * Version: 1.0
                 *
                 * * Created: 2018/06/03
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

                var condition = require("./condition.js");

                console.log("开始执行execute!");

                // 执行execute
                condition.execute(condition.gen);

                console.log("结束执行execute!");

                #结果
                LvHongbins-Mac-2:commonJS_module lvhongbin$ node findGF.js
                开始执行execute!
                结束执行execute!
                开始执行printCondition!
                You must be smart and strong enough to protect everything you care! fib(10)=55
                结束执行printCondition!
                开始执行printCondition!
                You must learn C, Java, JavaScript! fib(20)=6765
                结束执行printCondition!
                开始执行printCondition!
                You must earn much money and keep fit! fib(30)=832040
                结束执行printCondition!
>> - ES6模块
#### 3) 单JavaScript入口组件方案
> - 允许将一般的资源是作于JavaScript平等的模块，并以一致的方式加载进来
> - 这样做的好处是，可以将一些相关的依赖放在一起，然后对外只暴露一个JavaScript模块作为模块的入口
> - 能实现这些功能的现代打包工具有browserify,webpack.
#### 4) Web Component方案
> - 2011年提出的Web Component，他的引入组件的方式是通过简单的的方法实现，但是这种方法并没有火起来
        
                <link rel="import" href="bar.html"\>  
#### 5) 包和模块
> - 包是指用package.json文件描述的文件夹或者文件
> - 模块则更为具体，任何可以被Node.js或者require载入的文件
        
<h3 id='1.3'>1.3 任务流工具</h3>  
        
#### 1) jshint
> - JSHint is a community-driven tool that detects errors and potential problems in JavaScript code. Since JSHint is so flexible, you can easily adjust it in the environment you expect your code to execute. JSHint is open source and will always stay this way
#### 2) uglify-js 详细请看[这里](https://www.npmjs.com/package/uglify-js)
> - UglifyJS is a JavaScript parser, minifier, compressor and beautifier toolkit.
> - uglify-js only supports JavaScript (ECMAScript 5).
> - To minify ECMAScript 2015 or above, transpile using tools like Babel.

                          
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

        
<h3 id='2.3'>2.3 node & npm</h3>  
        
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

#### 2) npm的使用 详细看[官方网站](https://docs.npmjs.com)
> - 安装
        
                npm install 默认安装最新版本，如果想要安装指定版本，可以在库名称后加 @版本号
> - 更新最新的版本
        
                <!-- To be sure that this matches the latest version, scroll to the bottom of this page. If the version you see does not match the latest version, run:  -->

                npm install npm@latest -g.

                <!-- If you want to try the next, unreleased version of npm to test that packages you have created will work with the planned next release of npm, use this command: -->

                npm install npm@next -g

                # 更新所有
                npm update 

                # 更新某个包
                npm update <package-name>                

> - 发布public
>> - Create a User Account创建一个npm账号 npm adduser
        
                $ npm adduser
                Username: YOUR_USER_NAME
                Password: YOUR_PASSWORD
                Email: YOUR_EMAIL@domain.com

                # 不知道为什么死活加不上
                LvHongbins-Mac-2:React_Study lvhongbin$ npm adduser
                Username: lvhongbin
                Password: 
                Email: (this IS public) hblvsjtu@163.com
                npm ERR! code E400
                npm ERR! Registry returned 400 for PUT on https://registry.npmjs.org/-/user/org.couchdb.user:lvhongbin: Account creation denied. Please contact support@npmjs.com.

                npm ERR! A complete log of this run can be found in:
                npm ERR!     /Users/lvhongbin/.npm/_logs/2018-06-02T16_31_03_371Z-debug.log
>> - If you created a user account on the site, use npm login to access your account from your terminal.
>> - Type npm whoami from a terminal to see if you are already logged in (technically, this also means that your credentials have been stored locally).测试一下你的用户名是否已经创建
>> - 包里面必须包括说明文档readme.md或者以.md为后缀的文件
>> - Use "npm publish" to publish the package.
> - 更新Update the package
        
                # where <update_type> is one of the semantic versioning release types, patch, minor, or major.
                # This command will change the version number in package.json
                npm version <update_type>

                # After updating the version number, run npm publish again
                npm publish
> - npm run 即 npm run-script 的缩写，用来直接运行 package.json 中 scripts 指定的脚本
> - npm run 会创建一个Shell，执行指定的命令，并临时将node_modules/.bin加入PATH 变量，这意味着本地模块可以直接运行。具体可以看[张拭心的博客](https://blog.csdn.net/u011240877/article/details/76582670)
        
                {
                  "name": "demo",
                  "scripts": {
                    "lint": "jshint **.js",
                    "test": "mocha test/"
                  }
                }
    
                # 执行 jshint **.js
                npm run lint 
                
                #或者 
                npm run-script lint 

                # 运行所有的脚本
                npm run
        
<h3 id='2.4'>4.4 package.json 详细看<a href="https://docs.npmjs.com/getting-started/using-a-package.json">官网</a></h3>  
        
#### 1) 简介
> -  它是一个JSON文件，对比手动安装，The best way to manage locally installed npm packages is to create a package.json file.
>> - lists the packages that your project depends on.
>> - allows you to specify the versions of a package that your project can use using semantic versioning rules.
>> - makes your build reproducible, and therefore much easier to share with other developers.
#### 2) 创建
> - 可以手动创建
> - 也使用npm init命令来创建
> - 当然如果你嫌烦的话可以使用 npm init --yes  
> - 一个简单的例子
                        
                npm init --yes
                Wrote to /home/ag_dubs/my_package/package.json:

                {
                  "name": "my_package",
                  "description": "",
                  "version": "1.0.0",
                  "main": "index.js",
                  "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1"
                  },
                  "repository": {
                    "type": "git",
                    "url": "https://github.com/ashleygwilliams/my_package.git"
                  },
                  "keywords": [],
                  "author": "",
                  "license": "ISC",
                  "bugs": {
                    "url": "https://github.com/ashleygwilliams/my_package/issues"
                  },
                  "homepage": "https://github.com/ashleygwilliams/my_package"
                }
#### 3) 包含的字段
> - name 必填 默认是 the current directory name
>> - all lowercase
>> - one word, no spaces
>> - dashes and underscores allowed  
> - version 必填 a.b.c
>> - 补丁版本：解决了 Bug 或者一些较小的更改，增加最后一位数字，比如 1.0.1
>> - 小版本：增加了新特性，同时不会影响之前的版本，增加中间一位数字，比如 1.1.0
>> - 大版本：大改版，无法兼容之前的，增加第一位数字，比如 2.0.0
> - dependencies 选填 生产环境中需要依赖的包 相当于npm install 安装包 --save
> - devDependencies 选填 仅在开发和测试环节中需要依赖的包 相当于npm install 安装包 --save-dev    
> - description：描述信息，有助于搜索 If there is no description field in the package.json, npm uses the first line of the README.md or README instead。这对人们去搜索你的包很有帮助
> - main: 入口文件，一般都是 index.js，这个js应该要符合CommonJS规范
> - scripts：支持的shell脚本，默认是一个空的test，执行的是CLI
> - keywords：关键字，有助于在人们使用 npm search 搜索时发现你的项目
> - author：作者信息
> - license：默认是 MIT
> - bugs：当前项目的一些错误信息，如果有的话
> - 一个简单的例子
        
                {
                  "name": "my_package",
                  "version": "1.0.0",
                  "dependencies": {
                    "my_dep": "^1.0.0"
                  },
                  "devDependencies" : {
                    "my_test_framework": "^3.1.0"
                  }
                }
#### 4) 默认值的设置
> - npm set init.author.email "hblvsjtu@163.com"
> - npm set init.author.name "LvHongbin"
> - npm set init.license "MIT"
#### 5) --save or --save-dev
> - To add an entry to your package.json's dependencies:
        
                npm install <package_name> --save
> - To add an entry to your package.json's devDependencies:
        
                npm install <package_name> --save-dev
#### 5) -locally or -globally
> - If you want to use a package as a command line tool, then install it globally. This way, it works no matter which directory is current. This is the choice you would use if you were installing grunt, for example.
> - If you want to depend on the package from your own module, then install it locally. This is the choice you would use if you are using require statements
> - 比如
        
                npm install -g jshint  

#### 6) 实例
> - 
        
                # 首先初始化 package.json
                LvHongbins-Mac-2:testpackagejson lvhongbin$ npm init
                This utility will walk you through creating a package.json file.
                It only covers the most common items, and tries to guess sensible defaults.

                See `npm help json` for definitive documentation on these fields
                and exactly what they do.

                Use `npm install <pkg>` afterwards to install a package and
                save it as a dependency in the package.json file.

                Press ^C at any time to quit.
                package name: (testpackagejson) testpackagejson
                version: (1.0.0) 1.0.0
                description: test the packagejson file can whether can run the module 
                entry point: (index.js) index.js
                test command: 
                git repository: https://github.com/hblvsjtu/React_Study.git
                keywords: testpackagejson
                author: LvHongbin
                license: (ISC) ISC
                About to write to /Users/lvhongbin/Desktop/React_Study/testpackagejson/package.json:

                {
                  "name": "testpackagejson",
                  "version": "1.0.0",
                  "description": "test the packagejson file can whether can run the module ",
                  "main": "index.js",
                  "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1"
                  },
                  "repository": {
                    "type": "git",
                    "url": "git+https://github.com/hblvsjtu/React_Study.git"
                  },
                  "keywords": [
                    "testpackagejson"
                  ],
                  "author": "LvHongbin",
                  "license": "ISC",
                  "bugs": {
                    "url": "https://github.com/hblvsjtu/React_Study/issues"
                  },
                  "homepage": "https://github.com/hblvsjtu/React_Study#readme"
                }


                Is this OK? (yes) yes
                LvHongbins-Mac-2:testpackagejson lvhongbin$ cat package.json
                {
                  "name": "testpackagejson",
                  "version": "1.0.0",
                  "description": "test the packagejson file can whether can run the module ",
                  "main": "index.js",
                  "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1"
                  },
                  "repository": {
                    "type": "git",
                    "url": "git+https://github.com/hblvsjtu/React_Study.git"
                  },
                  "keywords": [
                    "testpackagejson"
                  ],
                  "author": "LvHongbin",
                  "license": "ISC",
                  "bugs": {
                    "url": "https://github.com/hblvsjtu/React_Study/issues"
                  },
                  "homepage": "https://github.com/hblvsjtu/React_Study#readme"
                }

                # 经过修改和下载依赖包后自动添加dependencies和dependencies
                LvHongbins-Mac-2:testpackagejson lvhongbin$ vim package.json
                LvHongbins-Mac-2:testpackagejson lvhongbin$ cat package.json
                {
                  "name": "testpackagejson",
                  "version": "1.0.0",
                  "description": "test the packagejson file can whether can run the module ",
                  "main": "index.js",
                  "scripts": {
                    "compile": "babel jsTest.js -o compiled.js",
                    "test": "node ./compiled.js"
                  },
                  "repository": {
                    "type": "git",
                    "url": "git+https://github.com/hblvsjtu/React_Study.git"
                  },
                  "keywords": [
                    "testpackagejson"
                  ],
                  "author": "LvHongbin",
                  "license": "ISC",
                  "bugs": {
                    "url": "https://github.com/hblvsjtu/React_Study/issues"
                  },
                  "dependencies": {
                    "babel": "6.26.0",
                    "babel-cli": "^6.26.0",
                    "node": "10.3.0"
                  },
                  "homepage": "https://github.com/hblvsjtu/React_Study#readme",
                  "devDependencies": {
                    "babel-preset-env": "^1.7.0"
                  }
                }

                # jsTest.js
                LvHongbins-Mac-2:testpackagejson lvhongbin$ cat jsTest.js
                var a = [1, 2, 3];
                var b = a.map((ele) => ele*2) ;
                console.log(b);

                export {b as b1};

                # index.js
                LvHongbins-Mac-2:testpackagejson lvhongbin$ cat index.js
                var b2 = require("./compiled.js");
                console.log("Get Start!\nb = " + b2.b1[0] + b2.b1[1] + b2.b1[2]);

                # 这里不能使用npm run运行所有脚本，只能一个一个来，要不然中间生成的compiled.js后面无法直接调用而报错
                LvHongbins-Mac-2:testpackagejson lvhongbin$ npm run compile && npm run test

                > testpackagejson@1.0.0 compile /Users/lvhongbin/Desktop/React_Study/testpackagejson
                > babel jsTest.js -o compiled.js


                > testpackagejson@1.0.0 test /Users/lvhongbin/Desktop/React_Study/testpackagejson
                > node ./compiled.js

                [ 2, 4, 6 ]

                # compiled.js
                LvHongbins-Mac-2:testpackagejson lvhongbin$ cat compiled.js
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                  value: true
                });
                var a = [1, 2, 3];
                var b = a.map(function (ele) {
                  return ele * 2;
                });
                console.log(b);

                exports.b1 = b;

                # 运行最终文件
                LvHongbins-Mac-2:testpackagejson lvhongbin$ node ./index.js
                [ 2, 4, 6 ]
                Get Start!
                b = 246

        
<h3 id='2.5'>2.5 babel</h3>  
        
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
> -  安装包是旧的预设，里面有es5的预设，解压包中是没有es5预设，预设包必须放在跟目标文件相同的目录
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

            
<h3 id='2.6'>2.6 jshint</h3>  
        
#### 1) 安装与卸载
> -  
                # 使用全局安装
                LvHongbins-Mac-2:testpackagejson lvhongbin$ npm install jshint -g
                /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/jshint -> /Users/lvhongbin/software/node-v10.3.0-darwin-x64/lib/node_modules/jshint/bin/jshint
                + jshint@2.9.5
                added 31 packages from 18 contributors in 10.169s
                LvHongbins-Mac-2:testpackagejson lvhongbin$ jshint -v
                jshint v2.9.5
                LvHongbins-Mac-2:testpackagejson lvhongbin$ cd ..
                LvHongbins-Mac-2:React_Study lvhongbin$ jshint -v
                jshint v2.9.5
                LvHongbins-Mac-2:React_Study lvhongbin$ which jshint
                /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/jshint
                

                LvHongbins-Mac-2:testpackagejson lvhongbin$ jshint index.js
#### 2) 基本使用
> -  即使语法有错，jshint都检查不出来
> -  jshint只用来判断那是不是JS文件，并不管里面内容是否编译成功
                
                # 即使语法有错，jshint都检查不出来
                LvHongbins-Mac-2:testpackagejson lvhongbin$ touch error.js && echo "console.log(b);" > error.js
                LvHongbins-Mac-2:testpackagejson lvhongbin$ jshint error.js
                LvHongbins-Mac-2:testpackagejson lvhongbin$ node error.js
                /Users/lvhongbin/Desktop/React_Study/testpackagejson/error.js:1
                (function (exports, require, module, __filename, __dirname) { console.log(b);
                                                                                          ^
                ReferenceError: b is not defined
                    at Object.<anonymous> (/Users/lvhongbin/Desktop/React_Study/testpackagejson/error.js:1:75)
                    at Module._compile (internal/modules/cjs/loader.js:702:30)
                    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)
                    at Module.load (internal/modules/cjs/loader.js:612:32)
                    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)
                    at Function.Module._load (internal/modules/cjs/loader.js:543:3)
                    at Function.Module.runMain (internal/modules/cjs/loader.js:744:10)
                    at startup (internal/bootstrap/node.js:238:19)
                    at bootstrapNodeJSCore (internal/bootstrap/node.js:572:3)
                LvHongbins-Mac-2:testpackagejson lvhongbin$ cat error.js
                console.log(b);

                # jshint只用来判断那是不是JS文件，并不管里面内容是否编译成功
                LvHongbins-Mac-2:testpackagejson lvhongbin$ jshint setPATH.sh
                setPATH.sh: line 1, col 1, 'export' is only available in ES6 (use 'esversion: 6').
                setPATH.sh: line 1, col 8, Unexpected 'PATH'.
                setPATH.sh: line 1, col 7, Missing semicolon.
                setPATH.sh: line 1, col 14, Missing semicolon.
                setPATH.sh: line 1, col 15, Expected an assignment or function call and instead saw an expression.
                setPATH.sh: line 1, col 19, Missing semicolon.
                setPATH.sh: line 1, col 19, Unrecoverable syntax error. (50% scanned).

                7 errors

            
<h3 id='2.7'>2.7 uglifejs <a href="https://www.npmjs.com/package/uglify-js">详细请看这里</a></h3>  
        
#### 1) 安装与卸载
> - 作为命令行安装
        
                LvHongbins-Mac-2:React_Study lvhongbin$ npm install uglify-js -g
                /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/uglifyjs -> /Users/lvhongbin/software/node-v10.3.0-darwin-x64/lib/node_modules/uglify-js/bin/uglifyjs
                + uglify-js@3.4.0
                added 3 packages from 38 contributors in 5.918s
                LvHongbins-Mac-2:React_Study lvhongbin$ uglifyjs -V
                uglify-js 3.4.0
> - 作为为程序所使用
                
                npm install uglify-js
#### 2) 基本使用
> - If no input file is specified, UglifyJS will read from STDIN.
        
                uglifyjs --compress --mangle -- input.js
> - -c, --compress [options]    Enable compressor/specify compressor options: `pure_funcs`  List of functions that can be safely removed when their return values are not used.即去掉函数中一些没有用的参数
> - -m, --mangle [options]      Mangle names/specify mangler options:`reserved`  List of names that should not be mangled. 更换属性的名字
        
                LvHongbins-Mac-2:uglifejsTest lvhongbin$ vim example.js
                LvHongbins-Mac-2:uglifejsTest lvhongbin$ cat example.js
                var x = {
                    baz_: 0,
                    foo_: 1,
                    calc: function() {
                        return this.foo_ + this.baz_;
                    }
                };
                x.bar_ = 2;
                x["baz_"] = 3;
                console.log(x.calc());

                # 单纯的把空格给去掉
                LvHongbins-Mac-2:uglifejsTest lvhongbin$ cat example4.js
                var x={baz_:0,foo_:1,calc:function(){return this.foo_+this.baz_},bar_:2,baz_:3};console.log(x.calc());
                
                LvHongbins-Mac-2:uglifejsTest lvhongbin$ uglifyjs example.js -c -m --mangle-props -o example1.js
                LvHongbins-Mac-2:uglifejsTest lvhongbin$ cat example1.js
                var x={o:0,t:1,_:function(){return this.t+this.o},i:2,o:3};console.log(x._());

                # 可以剔除某些变量不让改
                LvHongbins-Mac-2:uglifejsTest lvhongbin$ uglifyjs example.js -c -m --mangle-props reserved=[foo_,bar_] -o example2.js
                LvHongbins-Mac-2:uglifejsTest lvhongbin$ cat example2.js
                var x={o:0,foo_:1,t:function(){return this.foo_+this.o},bar_:2,o:3};console.log(x.t());LvHongbins-Mac-2:uglifejsTest lvhongbin$

                # 也可以使用正则表达式
                LvHongbins-Mac-2:uglifejsTest lvhongbin$ uglifyjs example.js -c -m --mangle-props regex=/_$/ -o example3.js
                LvHongbins-Mac-2:uglifejsTest lvhongbin$ cat example3.js
                var x={o:0,t:1,calc:function(){return this.t+this.o},_:2,o:3};console.log(x.calc());
> - 
> - 













