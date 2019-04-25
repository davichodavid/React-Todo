import React from 'react';
import './Todo.css';

const Todo = ({ id, completed, task, lineThrough }) => {
  return (
    <div onClick={() => lineThrough(id)} className={`task ${completed}`}>
      {/* <h1>Task: {props.todoProps.task}</h1>
      <p>Id: {props.todoProps.id}</p>
      <p>{props.todoProps.completed}</p> */}
      {task}
    </div>
  );
}

export default Todo;