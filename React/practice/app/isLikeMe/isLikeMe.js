import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// 真实容器工厂
function realObjectFactory(tag, id) {
	const obj = document.createElement(tag);
	document.body.appendChild(obj);
	obj.setAttribute('id', id);
	obj.style.fontSize = '15px';
}

// isLikeMe
realObjectFactory('div', 'test8');
class Like extends React.Component {
	construtor(props) {
		super(props);

		// 定义状态
		this.states = {
			isLikeMe: false,
		};

		// 绑定当前环境
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('handleClick', this);

		// 获取状态
		const isLikeMe = !this.states.isLikeMe;

		// 更新状态
		this.setState({
			isLikeMe
		});
	}

	render() {
		return (<h2 onClick={this.handleClick}>{this.states.isLikeMe ? '我喜欢你' : '你喜欢我'}</h2>);
	}
}

ReactDOM.render(<Like />, document.getElementById('test8'));