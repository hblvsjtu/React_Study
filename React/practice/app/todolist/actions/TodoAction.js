import AppDispatcher from '../dispatcher/AppDispatcher';

const TodoAction = {

	// 创建todo的action
	create(todo) {
		AppDispatcher.dispatch({
			actionType: 'CREATE_TODO',
			todo,
		});
	},

	// 删除todo的action
	delete(id) {
		AppDispatcher.dispatch({
			actionType: 'DELETE_TODO',
			id,
		});
	},
};

export default TodoAction;