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
