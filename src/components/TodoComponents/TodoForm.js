import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <form onSubmit={props.addTask}>
      <input
        onChange={props.handleChanges}
        placeholder="Task"
        name="task"
        value={props.task.task}
      />
      <button>Add Task</button>
      <button className="clear" onClick={props.clearTask}>Clear</button>

    </form>
  );
}

export default TodoForm;