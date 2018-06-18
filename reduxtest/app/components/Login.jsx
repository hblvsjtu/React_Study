import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	getLoginInfo,
	logout,
} from '../actioncenter/action.js';

function mapStateToProps(state) {
	return {
		isLogin: state.isLogin,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getLoginInfo(isLogin) {
			dispatch(getLoginInfo(isLogin));
		},
		logout() {
			dispatch(logout());
		},
	};
}

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.username = React.createRef();
		this.passward = React.createRef();
		this.handleClick = this.handleClick.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}


	handleClick() {
		const login = {
			username: this.username.current.value,
			passward: this.passward.current.value,
		};
		this.props.getLoginInfo(login);
	}

	handleLogout() {
		this.props.logout();
	}

	render() {
		const fail = (
				<div>
					<span>用户名：</span><input type="text" ref={this.username} />
					<span>密码：</span><input type="text" ref={this.passward} />
					<button onClick={this.handleClick}>登录</button>
				</div>
			);

		const success = (
			<div>
				<h2>登陆成功</h2>
				<button onClick={this.handleLogout}>退出登录</button>
			</div>);

		return (
			<form>
				{this.props.isLogin ? success : fail}
			</form>
		);
	}
}

Login.protoTypes = {
	getLoginInfo: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
	isLogin: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
