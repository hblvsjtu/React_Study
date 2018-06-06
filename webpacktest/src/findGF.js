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

//由于gulp-babel并不支持generator ，promise等异步编程，所以这里采用conditionES5.js
//var condition = require("./condition.js");

//es6规范的输入
import {execute, gen} from "./condition.js"

console.log("开始执行execute!");

//执行execute
//condition.execute(condition.gen);

//s6规范执行execute
execute(gen);

console.log("结束执行execute!");

