import React from 'react';
import TodoForm from './TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      task: "",
      id: 0,
      completed: false
    };
  }
  // design `App` to be the parent component of your application.


  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your My App!</h2>
        {/* <TodoList /> */}
        {/* <Todo /> */}
        <TodoForm />
      </div>
    );
  }
}

export default App;
