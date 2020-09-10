import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo }) => {
	const [completed, setCompleted] = useState(false);

	const handleClick = () => {
		setCompleted(!completed);
	};

	return (
		<div className={`todoItem ${completed && 'todoItem__completed'}`}>
			<input type='checkbox' onClick={handleClick} />
			<p>{todo}</p>
		</div>
	);
};

export default TodoItem;
