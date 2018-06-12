import React from 'react';
import ReactDOM from 'react-dom';

// 真实容器工厂
function realObjectFactory(tag, id) {
	const obj = document.createElement(tag);
	document.body.appendChild(obj);
	obj.setAttribute('id', id);
	obj.style.fontSize = '15px';
}

class Loginmodule extends React.Component {
	constructor(props) {
		super(props);
		this.content = React.createRef();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let content = this.content.current.value;
		let strRegex = '^((https|http|ftp|rtsp|mms)?://)'
                          + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" // ftp的user@
                          + '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184
                          + '|' // 允许IP和DOMAIN（域名）
                          + "([0-9a-z_!~*'()-]+.)*" // 域名- www.
                          + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名
                          + '[a-z]{2,6})' // first level domain- .com or .museum
                          + '(:[0-9]{1,4})?' // 端口- :80
                          + '((/?)|' // a slash isn't required if there is no file name
                          + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
		if (content.match(strRegex) !== null) {
			alert('网址格式正确！');
			document.getElementById('focus').value = content;
		} else {
			alert('网址格式错误！请重新输入');
		}
	}

	render() {
		return (
			<div>
				<input type="text" ref={this.content} />&nbsp;&nbsp;&nbsp;&nbsp;
				<button onClick={this.handleClick} >提示输入</button>&nbsp;&nbsp;&nbsp;&nbsp;
			</div>
			);
	}
}

class Resultmodule extends React.Component {
	constructor(props) {
		super(props);
		this.rightContent = React.createRef();
	}

	render() {
		return (
			<div>
				<Loginmodule />
				<input id="focus" type="text" placeholder="失去焦点提示内容" />
			</div>
			);
	}
}

realObjectFactory('div', 'test9');
ReactDOM.render(<Resultmodule />, document.getElementById('test9'));
