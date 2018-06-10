# React_Study
        
        
        
## 五，sass的基本使用
        
        
### 作者：冰红茶  

### 参考源：[Reactjs官网文档https://reactjs.org ](https://reactjs.org)  
### 参考源：[sass教学视频](https://www.bilibili.com/video/av17492787/?p=1)
### 源码地址：[https://github.com/hblvsjtu/React_Study/tree/master/React/sasstest](https://github.com/hblvsjtu/React_Study/tree/master/React/sasstest)
  
        
------    
        
        
        
   sass跟css有很大的不一样，css是一种层叠样式表，并不是一种编程语言，至少没有变量，循环，流程控制等语法。而sass前置解释器，拥有以上的功能，使得编辑和更新css就更加的方便。对于未来日益复杂和工程化的项目，掌握类似sass或者less等是非常有利的。因为之前在webpack打包的时候发现sass加载不进去，我就想看看到底是怎么回事^_ ^
        
        
## 目录
        
## [5.1 简介](#5.1)
### [5.1.1 背景和特点](#5.1.1)
### [5.1.2 Compass](#5.1.2)
### [5.1.3 比较差异sass和less和styus](#5.1.3)
## [5.2 基本语法](#5.2)
### [5.2.1 设置变量](#5.2.1) 
### [5.2.2 文件的导入](#5.2.2) 
### [5.2.3 嵌套](#5.2.3)
### [5.2.4 继承@extend](#5.2.4)  
### [5.2.5 数据类型与数据操作](#5.2.5)
### [5.2.6 @mixin@include](#5.2.6)
### [5.2.7 自定义函数@function@return](#5.2.7)
### [5.2.8 流程控制](#5.2.8)
## [5.3 自动化构建](#5.3)
### [5.3.1 cli命令](#5.3.1) 
### [5.3.2 基础项目结构](#5.3.2) 
### [5.3.3 gulp自动化构建](#5.3.3)
### [5.3.4 webpack自动化构建](#5.3.4)

        
------
        

        
<h3 id='5.1'>5.1 简介</h3>  
        
<h4 id='5.1.1'>5.1.1 背景和特点</h4>

> - css预处理器，目前比较流行的是sass(诞生于2007)和less和styus，
> - 特点：
>> - 使用变量
>> - 自动转换RGBA颜色值
>> - 忘记浏览器前缀
>> - 嵌套规则
>> - media query 更简单
>> - 自动压缩css 
> - sass和scss的区别：scss是sass为了兼容css而做的中间格式，scss需要写大括号作为嵌套，而sass只需要用【tab】作为嵌套，这种写法一开始为了配合haml而设计的，后来为了拥抱css才做了scss的中间格式
> - window下的安装需要用ruby
        
<h4 id='5.1.2'>5.1.2 Compass</h4>
        
> - compass是sass的开源工具库，主要特点
>> - 清除一些无用的标签
>> - 提供很多可重用的模式
>> - compass mixins 使得创建css3更加简单
>> - 提供一个漂亮的版面
>> - 下载和创建插件简单
> - compress create 创建一个sass工程 
> - compress compile --force 自动翻译对文件夹中多个sass文件
        
<h4 id='5.1.3'>5.1.3 比较差异sass和less和styus</h4>
        
> - 都支持//注释和/**/注释
> - less scss 和 css类似
> - 目前倾向于使用scss

        
<h3 id='5.2'>5.2 基本语法</h3>  
                      
<h4 id='5.2.1'>5.2.1 设置变量</h4>

> - 变量前面需要有$
                
                $font-stack: Helvetica, sans-serif;
                $primary-color: #333;

                body {
                    font: 100% $font-stack
                    color: $primary-color  
                }
> - 局部变量
> - 全局变量 后面加上 !global
> - 默认变量 后面加上 !default 默认变量会被提前声明
> - 多值变量，
>> - 数组 用空格隔开，然后使用nth(变量名, n)进行取值；
>> - map结构 用括号作为边界，然后用逗号进行分组，每一组由键值对组成。取值的时候使用map-get(变量名, 键名)方法
> - 变量的特殊用法
> - 类名变量 使用#{ $变量名 } 
> - 中划线和下划线是一样的
> - test.scss                
                //test.scss
                $fontSize: 14px;
                $fontSize: 12px !default;
                $paddings: 5px 10px 5px 10px;
                $maps: (color: red, borderColor: blue);
                $className: main;
                $test-info: lightgreen;
                $test_info: red;

                body{
                    $color: green !global;
                    color: $color;
                    font-size: $fontSize;
                    padding: $paddings;
                    padding-left: nth($paddings,1);
                }

                footer{
                    color: $color;
                    background-color: map-get($maps, color);
                    border-color: map-get($maps, borderColor);
                }

                .#{$className} {
                    width: 50px;
                    height: 50px;
                    color: $test-info;
                }
> - test.css
                
                //test.css
                body {
                  color: green;
                  font-size: 14px;
                  padding: 5px 10px 5px 10px;
                  padding-left: 5px;
                }

                footer {
                  color: green;
                  background-color: red;
                  border-color: blue;
                }

                .main {
                  width: 50px;
                  height: 50px;
                  color: red;
                }

        
<h4 id='5.2.2'>5.2.2 文件的导入</h4> 
        
> - 对于一些用来导入的文件（不需要立即编译成css文件），文件名以下划线开头
> - 导入的时候sass会自动识别是否是文件类型还是地址，还有后缀，只有scss和sass文件才能被倒进来
> - 被导进的文件名称可以不写下划线，也可以不写后缀，两者都可以不写
                
                @import "css.css";
                @import "http://sss/xx";
                @import url(css.css);
                @import "part1";

        
<h4 id='5.2.3'>5.2.3 嵌套</h4>
        
> - 树状嵌套（ 选择器嵌套 + 属性嵌套）
>> - 转换前
                
                body {
                    header {
                        .logo {
                            display: inline-block;
                            img {
                                height: 50px;
                            }
                        }
                        nav {
                            width: 100px;
                        }
                    }
                }
>> - 转换后
                
                body header .logo {
                  display: inline-block;
                }

                body header .logo img {
                  height: 50px;
                }

                body header nav {
                  width: 100px;
                }
> - 父选择器的嵌套 用于伪选择器 用&,而且冒号：跟&之间不能有空格，否则会报错
                
                a {
                    color: red;
                    &:hover {
                        color: green;
                    }
                    .content {
                        color: blue;
                    }
                    
                }
> - 跳出嵌套 @at-root 如果在media或者在一些规则rule之下的话呢，需要添加(without: media rule)，关键字还有all 和support，一般比较常用的就是all rule和media
>> - 转换前
                
                // 转换前
                a {
                    color: red;
                    &:hover {
                        color: green;
                    }
                    .content {
                        color: blue;
                    }
                    @at-root .container {
                        width: 1104px;
                    }
                    
                }

                @media screen and (max-width: 600px) { 
                    @at-root div {
                        width: 100px;
                    }

                    @at-root(without: media rule) {
                        div {
                            height: 100px;
                        }
                    }
                } 
>> - 转换后
                
                a {
                  color: red;
                }

                a:hover {
                  color: green;
                }

                a .content {
                  color: blue;
                }

                .container {
                  width: 1104px;
                }

                @media screen and (max-width: 600px) {
                  div {
                    width: 100px;
                  }
                }

                div {
                  height: 100px;
                }

        
<h4 id='5.2.4'>5.2.4 继承@extend </h4>
            
> - 单继承和多继承(用逗号隔开) 子类的样式也会被继承
> - 链式继承
> - 末尾需要添加冒号
> - 交叉继承：目标对象是没有在同一个父级对象下，此时不经继承了样式，而且还继承别人的父类，但是没办法继承占位选择器的父类
> - 占位选择器：% 用到的时候才会被解释，没有被使用的时候就不被解释
> - 局限性：
>> - 包含选择器（A B）和兄弟选择器（A + B）是不被继承的
>> - 伪元素的行为也会被顺带继承（这并不是一件好事）
>> - 在media内外不能后继承
>> - 子类的样式也会被继承
> - 转换前
                
                // 继承
                %one {
                    width: 10px;
                }

                .two {
                    height: 20px;
                }

                .three {
                    @extend %one, .two;
                    color: red;
                }

                .four {
                    @extend .three;
                    background-color: blue;
                }

                %one h1 {
                    font-weight: blod;
                }

                .five {
                    @extend h1;
                    color: yellow;
                }

                %six {
                    height: 10px;
                }
> - 转换后
                
                .three, .four {
                  width: 10px;
                }

                .two, .three, .four {
                  height: 20px;
                }

                .three, .four {
                  color: red;
                }

                .four {
                  background-color: blue;
                }

                .three h1, .four h1, .three .five, .four .five {
                  font-weight: blod;
                }

                .five {
                  color: yellow;
                }

        
<h4 id='5.2.5'>5.2.5 数据类型与数据操作</h4>
        
> - Number 类似js
> - String
> - List
> - Map
> - boolean
> - 加减乘除+ - * /
> - 最好加一个空格隔开操作数和操作符，因为减号容易被认为是连字符
> - 两个非变量的数不能直接相除，需要加上括号();
> - 转换前
                
               /*! Number */
               $n1: 1.2;
               $n2: 12;
               $n3: 14px;

               /*! String字符串类型 */
               $s1: container;
               $s2: 'container';
               $s3: "container";

               .#{$s3} {
                font-size: (14px/2);
                font-size: $n3 - $n3;
               }

               /*! Boolean类型 */
               $bool1: true;
               $bool2: false;

               /*! Null类型 */
               $n: null;

               /*! Color类型 */
               $c1: blue;
               $c2: #fff;
               $c3: rgba(255, 255, 0, 0.5); 

               h2 {
                @if $n == null {
                    color: $c3;
                }
               }
> - 转换后
                
                /*! Number */
                /*! String字符串类型 */
                .container {
                  font-size: 7px;
                  font-size: 0px;
                }

                /*! Boolean类型 */
                /*! Null类型 */
                /*! Color类型 */
                h2 {
                  color: rgba(255, 255, 0, 0.5);
                }

        
<h4 id='5.2.6'>5.2.6 @mixin@include</h4>
> - 模版                
                
                @mixin 函数名(参数: 默认值) {
                    // style
                }

                @include 函数名();
> - @mixin 
> - @include 
> - 一对多值的时候需要在参数后面加上...
> - @mixin @media @content @include 进行响应式布局
> - 转换前
                
                /*! Function */
                @mixin getColor($c: red, $num: 1px) {
                    color: $c;
                    font-size: $num; 
                }

                h3 {
                    @include getColor(yellow, 12px);
                    @include getColor($num: 10px);
                }

                @mixin box-shadow($shadow...) {
                    -moz-box-shadow: $shadow;
                    -webkit-box-shadow: $shadow;
                    box-shadow: $shadow;
                }

                h3 {
                    @include box-shadow(0px 4px 4px #555, 2px 6px 10px #6dd3ee);
                }

                @mixin style-for-iphone {
                    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
                        @content
                    }
                }

                @include style-for-iphone {
                    font-size: 12px;
                }
> - 转换后
                
                /*! Function */
                h3 {
                  color: yellow;
                  font-size: 12px;
                  color: red;
                  font-size: 10px;
                }

                h3 {
                  -moz-box-shadow: 0px 4px 4px #555, 2px 6px 10px #6dd3ee;
                  -webkit-box-shadow: 0px 4px 4px #555, 2px 6px 10px #6dd3ee;
                  box-shadow: 0px 4px 4px #555, 2px 6px 10px #6dd3ee;
                }

                @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
                  font-size: 12px;
                }

        
<h4 id='5.2.7'>5.2.7 自定义函数@function@return</h4>
        
> - 跟mixin一个最大区别是mixin侧重于返回一条完整的语句，包括键名：键值
> - 而函数返回的是一个键值或者说就是一个数字或者是一个字符串
> - 其实有类似于变量的作用，变量只是一种特殊的微型函数
> - @debug @warn @error其实就是用来打印控制台的
> - @error的话是会报错并停止编译
> - 内置函数
>> - rgb() 返回rgb颜色 
>> - rgba($color, $toumingdu) 返回rgb颜色并进行透明度转换
>> - lighten($color, $倍数) 变浅颜色
>> - darken($color, $倍数) 加深颜色
>> - str-length(str) 返回字符串的长度
>> - str-index(str, 某一个特定的字母) 返回索引位置，该位置从1开始，跟数组从0开始不一样 
> - 转换前
                
                /*! Function */
                @function getColor($num) {
                    @return rgba($num, $num + 50, $num + 100, 0.5);
                } 

                h3 {
                    color: getColor(100);
                }

                @debug "This is a debug test!";
                @warn "warn";
                @error "error";  
> - 转换后
                
                /*! Function */
                h3 {
                  color: rgba(100, 150, 200, 0.5);
                }
> - 控制台的输出
                
                [14:38:13] Starting 'sass'...
                /Users/lvhongbin/Desktop/React_Study/React/sasstest/sass/test.scss:186 DEBUG: This is a debug test!
                WARNING: warn
                         on line 187 of sass/test.scss

                Error in plugin "sass"
                Message:
                    sass/test.scss
                Error: error
                        on line 188 of sass/test.scss
                >> @error "error";
                   ^

                [14:38:13] Finished 'sass' after 21 ms         

        
<h4 id='5.2.8'>5.2.8 流程控制</h4>
        
> - 三目运算符
> - @if @elseif @else
> - @for $i from to 不包含最后一个值
> - @for $i from through 包含最后一个值 
> - @while
> - @each
> - 转换前
                
                /*！ 流程控制 */
                $screenWidth: 200;
                body {
                    color: if($screenWidth > 100, blue, red);
                }

                @if $screenWidth > 100 {
                    body {
                        color: blue;
                    }
                }@else if $screenWidth > 50 {
                    body {
                        color: red;
                    }
                }@else {
                    body {
                        color: lighten(red, 0.5);
                    }
                }

                @for $i from 1 through 2 {
                    .span#{$i} {
                        width: 20% * $i;
                    }
                }

                @for $i from 3 to 4 {
                    .span#{$i} {
                        width: 20% * $i;
                    }
                }

                $j : 6;
                @while $j > 3 {
                    .span#{$j} {
                        width: 20% * $j;
                    }
                    $j: $j - 1;
                } 

                $k: 1;
                @each $c in green, black, red, white {
                    .div#{$k} {
                        color: $c;
                    }
                    $k: $k + 1;
                } 

                @each $key, $color in (default, blue), (info, green), (danger, red) {
                    .text-#{$key} {
                        color: $color;
                    }
                }

                @each $key, $color in (default: blue, info: green, danger: red) {
                    .label-#{$key} {
                        color: $color;
                    }
                }
> - 转换后
                
                /*！ 流程控制 */
                body {
                  color: blue;
                }

                body {
                  color: blue;
                }

                .span1 {
                  width: 20%;
                }

                .span2 {
                  width: 40%;
                }

                .span3 {
                  width: 60%;
                }

                .span6 {
                  width: 120%;
                }

                .span5 {
                  width: 100%;
                }

                .span4 {
                  width: 80%;
                }

                .div1 {
                  color: green;
                }

                .div2 {
                  color: black;
                }

                .div3 {
                  color: red;
                }

                .div4 {
                  color: white;
                }

                .text-default {
                  color: blue;
                }

                .text-info {
                  color: green;
                }

                .text-danger {
                  color: red;
                }

                .label-default {
                  color: blue;
                }

                .label-info {
                  color: green;
                }

                .label-danger {
                  color: red;
                }
        
<h3 id='5.3'>5.3 自动化构建</h3>  
                      

        
<h4 id='5.3.1'>5.3.1 cli命令</h4> 
        
> - --bare
> - --sass-dir 
> - --css-dir
> - --image-dir
> - --javastripts-dir
> - --watch filename.sass:filename.css 监视文件变化
> - --watch sassfiledir:cssfiledir 监视文件夹变化
> - --style \[nested|expanded|compact|compressed\]
>> - nested最后一个大括号在最后一行行末
>> - expanded最后一个大括号另起一行，风格类似Java和JS
>> - compact中等的压缩
>> - compressed极大程度压缩
        
<h4 id='5.3.2'>5.3.2 基础项目结构</h4> 
        
> - base 初始化
> - components 组件
> - helps
>> - variables
>> - functions
>> - mixins 
> - layout 
>> - header
>> - footer
> - pages 各类型的页面
>> - home
>> - about
> - themes
        
<h4 id='5.3.3'>5.3.3 gulp自动化构建</h4>9) 
        
> - gulp构建工具  
> - gulp-compress 需要安装npm install --save-dev gulp gulp-compress
> - browser-sync 需要安装 npm install --save-dev browser-sync
                
                // --files 路径是相对于运行该命令的项目（目录） 
                browser-sync start --server --files "css/*.css, *.html"
                // 如果你的文件层级比较深，您可以考虑使用 **（表示任意目录）匹配，任意目录下任意.css 或 .html文件。 
                browser-sync start --server --files "**/*.css, **/*.html"

                // 主机名可以是ip或域名
                browser-sync start --proxy "主机名" "css/*.css"
> - 实例
>> - test.html
                
                <!DOCTYPE html>
                <html>
                <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
                <title>test sass</title>
                <meta name="description" content="">
                <meta name="keywords" content="test sass">
                <link href="./stylesheets/test.css" rel="stylesheet">
                </head>
                <body>
                    <div>hello sass</div>
                    <div class="div1">hello</div>
                    <div class="div2">hello</div>
                    <div class="div3">hello</div>
                    <div class="div4">hello</div>
                    <span class="span1">world</span>
                    <span class="span2">world</span>
                    <span class="span3">world</span>
                    <span class="span4">world</span>
                    <span class="span5">world</span>
                    <span class="span6">world</span></br>
                    <span class="text-default">text-default</span>
                    <span class="text-info">text-info</span>
                    <span class="text-danger">text-danger</span>

                </body>
                </html>
>> - gulpfile.js 
    
                'use strict';
                 
                var gulp = require('gulp');
                var sass = require('gulp-sass'); 
                var sourcemaps = require('gulp-sourcemaps');
                var browserSync = require('browser-sync');
                var reload      = browserSync.reload;

                // 翻译sass文件
                  gulp.task('sass', function () {
                   return gulp.src('./sass/*.scss')
                    .pipe(sourcemaps.init())
                    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))  
                    .pipe(sourcemaps.write())
                    .pipe(gulp.dest('./stylesheets'));
                  });

                // 设置任务---架设静态服务器
                gulp.task('browser-sync', function () {
                  browserSync.init({
                      files:['**'],
                      server:{
                          baseDir:'./',  // 设置服务器的根目录
                          index:'./test.html' // 指定默认打开的文件
                      },
                      port:3000  // 指定访问服务器的端口号
                  });
                });

                gulp.watch('./sass/*.scss', ['sass']);
                gulp.watch('./stylesheets/*.css', [reload]);
>> - 结果
                
                LvHongbins-Mac-2:sasstest lvhongbin$ npx gulp browser-sync
                [17:08:57] Using gulpfile ~/Desktop/React_Study/React/sasstest/gulpfile.js
                [17:08:57] Starting 'browser-sync'...
                [17:08:57] Finished 'browser-sync' after 38 ms
                [Browsersync] Access URLs:
                 ----------------------------------------
                       Local: http://localhost:3000
                    External: http://192.168.222.128:3000
                 ----------------------------------------
                          UI: http://localhost:3001
                 UI External: http://192.168.222.128:3001
                 ----------------------------------------
                [Browsersync] Serving files from: ./
                [Browsersync] Watching files...
                [17:11:22] Starting 'sass'...
                /Users/lvhongbin/Desktop/React_Study/React/sasstest/sass/test.scss:186 DEBUG: This is a debug test!
                WARNING: warn
                         on line 187 of sass/test.scss

                [17:11:22] Finished 'sass' after 54 ms
                [17:11:22] Starting 'sass'...
                [17:11:22] Starting 'browser-sync'...
                [error] You tried to start Browsersync twice! To create multiple instances, use browserSync.create().init()
                [17:11:22] Finished 'browser-sync' after 432 μs
                /Users/lvhongbin/Desktop/React_Study/React/sasstest/sass/test.scss:186 DEBUG: This is a debug test!
                WARNING: warn
                         on line 187 of sass/test.scss

                [17:11:22] Finished 'sass' after 12 ms
                [Browsersync] Reloading Browsers...
                [Browsersync] Reloading Browsers... (buffered 2 events)
                [Browsersync] Reloading Browsers...
                [Browsersync] Reloading Browsers...
                [Browsersync] Reloading Browsers...
                [Browsersync] Reloading Browsers...
        
<h4 id='5.3.4'>5.3.4 webpack自动化构建</h4>9) 
        
> - package.json
                
                {
                  "name": "sasstest",
                  "version": "1.0.0",
                  "description": "",
                  "main": "index.js",
                  "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1"
                  },
                  "keywords": [],
                  "author": "",
                  "license": "ISC",
                  "devDependencies": {
                    "browser-sync": "^2.24.4",
                    "clean-webpack-plugin": "^0.1.19",
                    "css-loader": "^0.28.11",
                    "gulp": "^3.9.1",
                    "gulp-sass": "^4.0.1",
                    "gulp-sourcemaps": "^2.6.4",
                    "html-webpack-plugin": "^3.2.0",
                    "lodash": "^4.17.10",
                    "node-sass": "^4.9.0",
                    "sass-loader": "^7.0.3",
                    "style-loader": "^0.21.0",
                    "webpack": "^4.12.0",
                    "webpack-cli": "^3.0.3"
                  }
                }
> - webpack.config.js
                
                var path = require('path');
                var webpack = require('webpack');
                var HtmlWebpackPlugin = require('html-webpack-plugin');
                const CleanWebpackPlugin = require('clean-webpack-plugin');

                //定义一些常用路径
                var ROOT_PATH = path.resolve(__dirname);
                var SASS_PATH = path.resolve(ROOT_PATH, 'sass');
                var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
                var DIST_PATH = path.resolve(__dirname, 'dist');

                // webpack.config.js
                module.exports = {
                    entry: [
                        './src/test.js'
                    ],  
                    output: {
                        path: DIST_PATH,
                        filename: 'bunld.js'
                    },
                    module: {
                        rules: [{
                            test: /\.scss$/,
                            use: [
                                "style-loader", // creates style nodes from JS strings
                                "css-loader", // translates CSS into CommonJS
                                "sass-loader" // compiles Sass to CSS
                            ]
                        }]
                    },

                    //插件的配置
                    plugins: [
                      new HtmlWebpackPlugin({
                          title: 'My First react app'
                      }),
                      new CleanWebpackPlugin(['dist']),
                    ],
                };
> - test.js
                
                /* ***************************************************************
                 *
                 * * Filename: test.js
                 *
                 * * Description:test for webpack and sass-loader
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

                import '../sass/test.scss';


                 function component() {
                   var element = document.createElement('div');
                   element.innerHTML = 'Hello webpack!';
                   element.classList.add('two');
                   
                   return element;
                 }

                 document.body.appendChild(component());
> - 结果
                
                LvHongbins-Mac-2:sasstest lvhongbin$ npx webpack
                clean-webpack-plugin: /Users/lvhongbin/Desktop/React_Study/React/sasstest/dist has been removed.
                stdin:186 DEBUG: This is a debug test!
                WARNING: warn
                         on line 187 of stdin

                Hash: be030e218f0a4d8a8ce1
                Version: webpack 4.12.0
                Time: 1521ms
                Built at: 06/10/2018 6:07:36 PM
                     Asset       Size  Chunks             Chunk Names
                  bunld.js   8.98 KiB       0  [emitted]  main
                index.html  188 bytes          [emitted]  
                [3] ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./sass/test.scss 2.41 KiB {0} [built]
                [4] ./sass/test.scss 1.17 KiB {0} [built]
                [5] ./src/test.js 975 bytes {0} [built]
                [6] multi ./src/test.js 28 bytes {0} [built]
                    + 3 hidden modules

                WARNING in configuration
                The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
                You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
                Child html-webpack-plugin for "index.html":
                     1 asset
                    [0] (webpack)/buildin/module.js 497 bytes {0} [built]
                    [1] (webpack)/buildin/global.js 489 bytes {0} [built]
                        + 2 hidden modules
