import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import List from './List.jsx';
import CreateButton from './CreateButton.jsx';
import TodoAction from '../actions/TodoAction.js';
import TodoStore from '../stores/TodoStore.js';
import realObjectFactor from '../../class/isLikeMe.jsx';

realObjectFactor('div', 'test13');
class Todo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: TodoStore.getAll(),
		};
		this.createTodo = this.createTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		TodoStore.addChangeListener(this.onChange);
	}

	componentWillUnmount() {
		TodoStore.removeChangeListener(this.onChange);
	}

	onChange() {
		this.setState({
			todos: TodoStore.getAll(),
		});
	}

	// 添加Todo时间的回调函数
	createTodo() {
		TodoAction.create({ id: uuid.v4(), content: '3rd stuff' });
	}


	// 删除Todo事件的回调函数
	deleteTodo(id) {
		TodoAction.delete(id);
	}

	render() {
    return (
      <div>
        <List items={this.state.todos} onDelete={this.deleteTodo} />
        <CreateButton onClick={this.createTodo} />
      </div>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById('test13'));
