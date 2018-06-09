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

import './titlestyle.scss';


 function component() {
   var element = document.createElement('div');

   /* 
    * Lodash, currently included via a script, is required for this line to work
    * Our index.js file depends on lodash being included in the page before it runs. 
    * This is because index.js never explicitly declared a need for lodash; 
    * it just assumes that the global variable _ exists.
    */
    // Lodash, now imported by this script
   element.innerHTML = 'Hello webpack!';
   element.classList.add('titlestyle');

   return element;
 }



 document.body.appendChild(component());


  //检验模式
  if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }
