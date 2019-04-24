import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <div className="task">
      <h1>Task: {props.todoProps.task}</h1>
      <p>Id: {props.todoProps.id}</p>
      <p>{props.todoProps.completed}</p>
    </div>
  );
}

export default Todo;