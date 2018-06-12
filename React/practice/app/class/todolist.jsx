import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import realObjectFactory from './isLikeMe.jsx';


// 建立一个div容器
realObjectFactory('div', 'test10');

// 建立共同的父类
class Todo extends React.Component {
	constructor(prop) {
		super(prop);

		this.state = {
			list: ['lvhongbin', 'lvhongchao'],
			count: 2,
		};

		this.updateState = this.updateState.bind(this);
	}

	updateState(content) {
		this.setState((preState) => {
			let array = preState.list;
			array.push(content);
			let num = preState.count + 1;
			let state = { list: array, count: num };
			return state;
		});
		return this.state.count;
	}

	render() {
		return (
			<div>
				<h2>My todolist</h2>
				<Add updateState={this.updateState} count={this.state.count} ></Add>
				<List list={this.state.list}></List>
			</div>
		);
	}
}


// 建立按钮
class Add extends React.Component {
	constructor(prop) {
		super(prop);
		this.prop = prop;
		this.contentRef = React.createRef();
		this.handleClick = this.handleClick.bind(this);
		this.num = this.prop.count - 1;
	}

	handleClick() {
		let str = this.contentRef.current.value.trim();
		if (str !== '') {
			this.num = this.prop.updateState(str);
		}
	}

	render() {
		return (
			<div>
				<input id="TodoList" type="text" ref={this.contentRef} placeholder="请输入你的TodoList" />&nbsp;&nbsp;&nbsp;
				<button onClick={this.handleClick}>
					添加#{this.num + 1}
				</button>
			</div>
		);
	}
}

Add.propTypes = {
	count: PropTypes.number.isRequired,
	updateState: PropTypes.func.isRequired,
};

// 建立列表标签
function List(prop) {
	return (
			<ul>
				{prop.list.map((content) => <li key={content.toString()}>{content}</li>)}
			</ul>
	);
}

List.propTypes = {
	list: PropTypes.array.isRequired,
};

ReactDOM.render(<Todo />, document.getElementById('test10'));
