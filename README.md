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
> - 
> - 
