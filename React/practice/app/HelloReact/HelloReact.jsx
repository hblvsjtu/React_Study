import React from 'react';
import ReactDOM from 'react-dom';
import '../titlestyle.scss';

// 定义变量
const msg1 = 'The first method to create a tag';
const msg2 = 'The second method to create a tag';
const id2 = 'vDom2';


// 真实容器工厂
function realObjectFactory(tag, id) {
  const obj = document.createElement(tag);
  document.body.appendChild(obj);
  obj.setAttribute('id', id);
  obj.style.fontSize = '15px';
}


// 1,创建虚拟DOM元素对象
const vDom1 = <span className="fontcolor"> { msg1 } </span>; // 不是字符串
const vDom2 = React.createElement('h2', { id: id2.toLowerCase() }, msg2);

// 2，将virtual DOM渲染到页面真实DOM容器中
realObjectFactory('span', 'test1');
realObjectFactory('span', 'test2');
ReactDOM.render(vDom1, document.getElementById('test1'));
ReactDOM.render(vDom2, document.getElementById('test2'));


/*
 * 展示动态数据
 * 将一个数组转化成一个li标签
 */
const names = ['jQuery', 'zepto', 'angular', 'react', 'vue'];
const ul = (
	<ul>
		{ names.map((name, index) => <li id={`li${index}`} key={name.toString()} > { name } </li>) }
	</ul>
);

realObjectFactory('div', 'test3');
ReactDOM.render(ul, document.getElementById('test3'));

// 工厂函数组件
realObjectFactory('span', 'test4');
function MyComponent() {
  return <h2>工厂函数组件(简单组件)</h2>;
}
ReactDOM.render(<MyComponent />, document.getElementById('test4'));


// 只更新局部的变化
realObjectFactory('div', 'test6');
function tick() {
  const element = (
		<h2 id="test6style">Update time with React：It is {new Date().toLocaleTimeString()}.</h2>
  );
  ReactDOM.render(element, document.getElementById('test6'));
}
setInterval(tick, 1000);

// 与JS更新时间的方法进行比较
realObjectFactory('h2', 'test7');
setInterval(() => { document.getElementById('test7').innerHTML = `Update time with JS：It is ${new Date().toLocaleTimeString()}`; }, 1000);

// 获取‘test6’的样式，并赋给‘test7’
const style1 = document.getElementById('test6').style.cssText;
console.log(`样式表${style1}`);
document.getElementById('test7').style.cssText = 'color: red;';
