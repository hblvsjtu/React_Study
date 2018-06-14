import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import realObjectFactory from './isLikeMe.jsx';

// 建立一个div容器
realObjectFactory('div', 'test11');

class Modal extends React.Component {
	constructor(prop) {
		super(prop);
		this.contentObj = document.createElement('div');
		this.contentObj.id = 'this.contentObj';
		this.contentObj.style.color = this.props.color;
		this.mountObject = document.getElementById('test10');
	}

	/*
	 * 装载组件的行为
	 * 只要被父组件render装载之后就会执行
	 */
	componentDidMount(state, prop) {
		console.log('componentDidMount...');
		this.mountObject.appendChild(this.contentObj);
	}

	/*
	 * 移除组件前的行为
	 * 只要被render装载之后
	 */
	componentWillUnmount() {
		console.log('componentWillUnmount...');
		// 删除虚拟Portal的装载
		this.mountObject.removeChild(this.contentObj);
	}

	render() {
		// this.props.children表示内容节点的子节点，类型是array
		return (ReactDOM.createPortal(this.props.children, this.contentObj));
	}
}

Modal.propTypes = {
	children: PropTypes.array.isRequired,
	color: PropTypes.string.isRequired,
};

class CheakPwd extends React.Component {
	constructor(prop) {
		super(prop);
		this.state = {
			isHidden: true,
			content: '',
		};

		this.content = React.createRef();

		this.handleClick = this.handleClick.bind(this);
		this.handleClickHidden = this.handleClickHidden.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('CheakPwd getSnapshotBeforeUpdate...');
		console.log(prevProps);
		console.log(prevState);
		return 'getSnapshotBeforeUpdate finish';
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('CheakPwd componentDidUpdate...');
		console.log(prevProps);
		console.log(prevState);
		console.log(snapshot);
	}

	handleClick() {
		if (this.state.content === '12345687') {
			this.setState({ isHidden: false });
		} else {
			console.log('Your passward is wrong, please input again!');
		}
	}

	handleClickHidden() {
		this.setState({ isHidden: true });
	}

	handleChange(event) {
		let content = event.target.value;

		if (content !== null) {
			this.setState({ content: content });
		} else {
			console.log('your content is empty!');
		}
	}

	render() {
		console.log('CheakPwd render...');
		const modal = this.state.isHidden ? null : (<Modal color="lightpink">你好，这里是Modal<br /> <button onClick={this.handleClickHidden}>Ok</button> </Modal>);
		return (
			<div>
				<h2>Please input the passward</h2>
				<input type="text" value={this.state.content} onChange={this.handleChange} />
				<button onClick={this.handleClick}>check now</button>
				{modal}
			</div>
		);
	}
}

ReactDOM.render(<CheakPwd />, document.getElementById('test11'));
