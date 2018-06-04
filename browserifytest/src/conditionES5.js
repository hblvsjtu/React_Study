"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var calulate = function calulate() {
	var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

	return new Promise(function (resolve, reject) {
		resolve(str + " fib(" + value + ")=" + fib(value));
	});
};

// Fibonacci function
var fib = function fib(n) {
	return n < 2 ? n : fib(n - 1) + fib(n - 2);
};

// print function
var printCondition = function printCondition(str) {
	console.log("开始执行printCondition!");
	console.log(str);
	console.log("结束执行printCondition!");
};

// generator for printing the conditions
var gen = /*#__PURE__*/_regenerator2.default.mark(function gen() {
	var a, b, c;
	return _regenerator2.default.wrap(function gen$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:

					// defined the valuables
					a = "You must be smart and strong enough to protect everything you care!";
					b = "You must learn C, Java, JavaScript!";
					c = "You must earn much money and keep fit!";
					_context.next = 5;
					return calulate(a, 10);

				case 5:
					_context.next = 7;
					return calulate(b, 20);

				case 7:
					_context.next = 9;
					return calulate(c, 30);

				case 9:
				case "end":
					return _context.stop();
			}
		}
	}, gen, this);
});

/* 
 * trump function
 * 关键是把generator，next()的结果和回调函数callback三个分离开来
 */
var trump = function trump(fn) {
	return function (arg) {
		return function (callback) {
			arg.value.then(callback);
			return fn;
		};
	};
};

//execute function
var execute = function execute(gen) {

	// 新建一个generator
	var g = gen();

	// 指针指向generator的第一个yield
	var result = g.next();

	// 新建一个trump转换器
	var t = trump(g);

	/* 
  * 迭代循环，循环的关键是把generation和next()的结果分开
  * 这是因为next()的结果用来循环判断的指标，
  * 而generation用来作为返回值使用
  */
	while (!result.done) {

		// 返回迭代器generator，并执行一个yield的值函数
		var _gen = t(result)(printCondition);

		// 指针指向下一个yield
		result = _gen.next();
	}
};

// 输出execute模块并挂在exports中
exports.execute = execute;
exports.gen = gen;
