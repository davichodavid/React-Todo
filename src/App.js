import React from 'react';
import "./App.css";

import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';


const tasks = [
  {
    task: "Walk the dog",
    id: Date.now(),
    completed: false
  },
  {
    task: "Feed the dog",
    id: Date.now(),
    completed: false
  },
  {
    task: "Drink Coffee",
    id: Date.now(),
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

  handleChanges = event => {
    this.setState({
      task: {
        ...this.state.task,
        [event.target.name]: event.target.value
      }
    })
  }

  addTask = event => {
    event.preventDefault();
    this.setState({
      tasksOnState: [...this.state.tasksOnState, this.state.task],
      task: {
        ...this.state.task, task: '',
        id: Date.now(),
        completed: false
      }
    });
  }

  lineThrough = id => {
    this.setState({
      tasksOnState: this.state.tasksOnState.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    })
  }

  clearTask = event => {
    event.preventDefault();
    this.setState({
      tasksOnState: this.state.tasksOnState.filter(task => {
        return !task.completed;
      })
    })
  }

  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="to-do-container">
        <h2>Welcome to your My App!</h2>
        <div>
          {this.state.tasksOnState.map(task => {
            return <Todo key={tasks.id} {...task} lineThrough={this.lineThrough} />;
          })}
        </div>
        {/* <TodoList /> */}
        <TodoForm handleChanges={this.handleChanges} addTask={this.addTask} clearTask={this.clearTask} {...this.state} />
      </div>
    );
  }
}

export default App;
