import {
	GET_LOGIN_INFO,
	LOGOUT,
	CREATE_LIST,
	DELETE_LIST,
} from '../constant/constant.js';

const initialState = {
	login: {
		name: '',
		passward: '',
	},
	isLogin: false,
	list: ['study', 'run', 'hike'],
};

function reducer(preState = initialState, action) {
	let newState;
	switch (action.type) {
		case GET_LOGIN_INFO:
			newState = Object.assign({}, {
				login: action.login,
				isLogin: action.login.passward === '12345687' ? true : false,
				list: preState.list,
			});
			return newState;
		case LOGOUT:
			newState = Object.assign({}, {
				login: '',
				isLogin: false,
				list: preState.list,
			});
			return newState;
		case CREATE_LIST:
			// 直接使用push方法返回的是新数组的长度
			// 改变的是原来的引用
			// preState.list.push(action.str);
			newState = Object.assign({}, {
				login: preState.login,
				isLogin: preState.isLogin,
				list: [...preState.list, action.str],
			});
			return newState;
		case DELETE_LIST:
			newState = Object.assign({}, {
				login: preState.login,
				isLogin: preState.isLogin,
				list: preState.list.filter((item, index) => index !== action.id),
			});
			return newState;
		default:
			return preState;
	}
}

export default reducer;