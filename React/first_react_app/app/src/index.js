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
import './style.css';
import Picture from './picture.png';
import Data from './data.xml';
import {cube} from './math.js';

// 如果不是export default，这里需要用输出全局对象，所以必须要有大括号把变量括起来
import {printMe} from './print.js';
//import {printfunc} from './print.js';

 function component() {
   var element = document.createElement('div');

   /* 
    * Lodash, currently included via a script, is required for this line to work
    * Our index.js file depends on lodash being included in the page before it runs. 
    * This is because index.js never explicitly declared a need for lodash; 
    * it just assumes that the global variable _ exists.
    */
    // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello webpack! ', '5^3 = ' + cube(5)], ' ');
   element.classList.add('hello');
   // Add the image to our existing div.
   var myPicture = new Image();
   myPicture.src = Picture;

   var imageDiv = document.createElement("div");
   imageDiv.appendChild(myPicture);
   element.appendChild(imageDiv);

   console.log(Data);
   return element;
 }


var createBtn = function() {
   
   // 增加一个按钮
   var btn = document.createElement("button"); 
   btn.innerHTML = "Click me and check the console!";
   // Note that because a network request is involved, some indication
   // of loading would need to be shown in a production-level site/app.
   btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
     //var print = module.default;
     var print = module.printfunc;
     print();
   });
   //btn.addEventListener("click", printfunc, false);
   return btn;
}
 document.body.appendChild(component());
 document.body.appendChild(createBtn());

  //检验热替换模块
  if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
 }

  //检验模式
  if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }
