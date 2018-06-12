import React from 'react';
import ReactDOM from 'react-dom';

// 真实容器工厂
export default function realObjectFactory(tag, id) {
	const obj = document.createElement(tag);
	document.body.appendChild(obj);
	obj.setAttribute('id', id);
	obj.style.fontSize = '15px';
}

// isLikeMe
realObjectFactory('div', 'test8');
class Like extends React.Component {
	constructor(props) {
		super(props);

		// 定义状态
		this.state = {
			isLikeMe: false,
		};

		// 绑定当前环境
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log(`handleClick():${this}`);
		// 获取状态
		const isLikeMe = !this.state.isLikeMe;

		// 更新状态
		this.setState({ isLikeMe });
	}

	render() {
		return (<button onClick={this.handleClick} onKeyDown={this.handleKeyDown}>{this.state.isLikeMe ? '我喜欢你' : '你喜欢我'}</button>);
	}
}

ReactDOM.render(<Like />, document.getElementById('test8'));

