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


// 如果不是export default，这里需要用输出全局对象，所以必须要有大括号把变量括起来
import {printfunc} from './print.js';

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
   btn.addEventListener("click", printfunc, false);
   return btn;
}
 document.body.appendChild(component());
 document.body.appendChild(createBtn());
