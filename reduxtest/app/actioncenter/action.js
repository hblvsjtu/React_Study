import {
	GET_LOGIN_INFO,
	LOGOUT,
	CREATE_LIST,
	DELETE_LIST,
} from '../constant/constant.js';

export const getLoginInfo = (login) => ({
		type: GET_LOGIN_INFO,
		login,
	});
export const logout = () => ({
		type: LOGOUT,
	});
export const createlist = (str) => ({
		type: CREATE_LIST,
		str,
	});
export const deletelist = (id) => ({
		type: DELETE_LIST,
		id,
	});
