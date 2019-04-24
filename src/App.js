import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';


const tasks = [
  {
    task: "Walk the dog",
    id: 1,
    completed: false
  },
  {
    task: "Feed the dog",
    id: 2,
    completed: false
  },
  {
    task: "Drink Coffee",
    id: 3,
    completed: false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      tasksOnState: tasks,
      task: {
        task: "",
        id: 0,
        completed: false
      }
    };
  }
  // design `App` to be the parent component of your application.


  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your My App!</h2>
        <div>
          {this.state.tasksOnState.map(task => {
            return <Todo todoProps={task} key={tasks.id} />;
          })}
        </div>
        {/* <TodoList /> */}
        <TodoForm />
      </div>
    );
  }
}

export default App;
