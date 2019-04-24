import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        placeholder="Task"
        name="task"
      // value={props.state.taskDetails.task}
      />
      <button>Add Task</button>
    </form>
  );
}

export default TodoForm;