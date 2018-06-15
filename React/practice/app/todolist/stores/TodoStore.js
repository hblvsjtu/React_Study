import EventEmitter from 'events';
import uuid from 'uuid';
import AppDispatcher from '../dispatcher/AppDispatcher';

const myEE = new EventEmitter();

const TodoStore = {

	todos: [{
		id: uuid.v4(),
		content: 'first one',
	}, {
		id: uuid.v4(),
		content: 'second one',
	}],
	getAll() {
		return this.todos;
	},
	addTodo(todo) {
		this.todos.push(todo);
	},
	deleteTodo(id) {
		this.todos = this.todos.filter((item) => item.id !== id);
	},

	emitChange() {
		myEE.emit('change');
	},

	addChangeListener(callback) {
		myEE.on('change', callback);
	},

	removeChangeListener(callback) {
		myEE.removeListener('change', callback);
	},
};


// 第一个register
let token1 = AppDispatcher.register((action) => {
	switch (action.actionType) {
		case 'CREATE_TODO':
			console.log('execute token1 CREATE_TODO');
			break;
		case 'DELETE_TODO':
			console.log('execute token1 DELETE_TODO');
			break;
		default:

			// 默认操作
	}
});

// 第二个register
AppDispatcher.register((action) => {
	AppDispatcher.waitFor([token1]);
	switch (action.actionType) {
		case 'CREATE_TODO':
			TodoStore.addTodo(action.todo);
			TodoStore.emitChange();
			break;
		case 'DELETE_TODO':
			TodoStore.deleteTodo(action.id);
			TodoStore.emitChange();
			break;
		default:

			// 默认操作
	}
});

export default TodoStore;