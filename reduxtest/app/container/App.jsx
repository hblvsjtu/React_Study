import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login.jsx';
import List from '../components/List.jsx';

function App(props) {
	const border = {
		border: 'solid 2px red',
	};

	return (
		<div style={border}>
			<h2>这里是Redux的example</h2>
			<Login />
			<List />
		</div>
	);
}

export default connect()(App);

