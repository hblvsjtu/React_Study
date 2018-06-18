import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	createlist,
	deletelist,
} from '../actioncenter/action.js';


function mapStateToProps(state) {
	return {
		list: state.list,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		createlist(str) {
			dispatch(createlist(str));
		},
		deletelist(index) {
			dispatch(deletelist(index));
		},
	};
}

class List extends React.Component {
	constructor(props) {
		super(props);
		this.content = React.createRef();
	}

	render() {
		return (
			<div>
				<ul>
					{this.props.list.map((content, index) =>
						(<li key={`li-${index}`}>
							<button onClick={() => this.props.deletelist(index)}>删除</button>{content}
       </li>))}
				</ul>
				<button onClick={() => this.props.createlist(this.content.current.value)}>添加list</button>
				<input type="text" ref={this.content} placeholder="请输入内容" />
			</div>
		);
	}
}

List.protoTypes = {
	list: PropTypes.array.isRequired,
	createlist: PropTypes.func.isRequired,
	deletelist: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
