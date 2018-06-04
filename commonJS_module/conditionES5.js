/* ***************************************************************
 *
 * * Filename: condition.js
 *
 * * Description:apply some neccessary condition to find a GF 
		 as a module for findGF.js
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

var calulate = function (str = null, value = 5) {
  return new Promise(function (resolve, reject) {
    resolve(`${str} fib(${value})=${fib(value)}`);
  });
};

// Fibonacci function
var fib = n => n < 2 ? n : fib(n - 1) + fib(b - 2);

// print function
var printCondition = function (str) {
  console.log(str);
};

// generator for printing the conditions
var gen = function* () {

  // defined the valuables
  let a = "You must be smart and strong enough to protect everything you care!";
  let b = "You must learn C, Java, JavaScript!";
  let c = "You must earn much money and keep fit";

  yield calulate(a, 10);
  yield calulate(b, 20);
  yield calulate(c, 30);
};

var g = gen();
console.log(g.next());
console.log(g.next().value());
g.next().value().then(printCondition);
