import React from 'react';

const Todo = props => {
  return (
    <div>
      <h1>{props.todoProps.task}</h1>
      <p>{props.todoProps.id}</p>
      <p>{props.todoProps.completed}</p>
    </div>
  );
}

export default Todo;