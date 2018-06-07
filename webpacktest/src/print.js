/* ***************************************************************
 *
 * * Filename: print.js
 *
 * * Description:test for webpack
 *
 * * Version: 1.0.0
 *
 * * Created: 2018/06/06
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

console.log('The print.js module has loaded! See the network tab in dev tools...');

export var printfunc = function() {
	console.log("I am called by index.js");
}

export var printMe = function() {
	console.log('Updating print.js...');
}

