import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import realObjectFactory from './isLikeMe.jsx';

// ES6类组件（复杂组件）
realObjectFactory('span', 'test5');
class MyComponent2 extends React.Component {
	constructor() {
		super();
		this.state = {
			index: 0,
		};
		this.color = ['blue', 'red', 'green', 'yellow'];
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.getColor = this.getColor.bind(this);
	}
	getColor() {
		return this.color[this.state.index];
	}

	handleMouseOver() {
		let num = this.state.index;
		console.log(`Now this state.index is ${num}`);
		console.log(`Now this color is ${this.color[this.state.index]}`);
		this.setState((prevState) => ({
			index: (prevState.index + 1) % 4,
		}));
	}

  render() {
    return <button onMouseOver={this.handleMouseOver} style={{ color: this.getColor() }} onFocus={() => 0}>Hello, {this.props.name}</button>;
  }
}

// 指定 props 的默认值：
MyComponent2.defaultProps = {
  name: 'Stranger',
};

// 验证数据类型
MyComponent2.propTypes = {
  name: PropTypes.string,
};

ReactDOM.render(<MyComponent2 name="lvhongbin" />, document.getElementById('test5'));
