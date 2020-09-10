import React from 'react';
import TodoItem from './TodoItem';
import './App.css';

function App() {
	return (
		<div className='app'>
			<TodoItem todo='Code' />
			<TodoItem todo='Say Hello' />
			<TodoItem todo='Test the TODO LIST APP 🚀!' />
		</div>
	);
}

export default App;
