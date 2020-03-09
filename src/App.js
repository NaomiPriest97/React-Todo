import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import styles from './styles.css'

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false
  }
];




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo,
      task: ''
    };
  }

  toggleCompleted = clickedToDoId => {
    this.setState({
      todo: this.state.todo.map(todo => {
        if (todo.id === clickedToDoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  }

  addTodo = todoTask => {
    //add a new item to the groceries state
    const newTodo = {
      task: todoTask,
      id: new Date(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  };

  render() {
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        
        <TodoForm addTodo={this.addTodo}/>
      </div>  
      <div>
        <TodoList 
          todo={this.state.todo}
          toggleCompleted={this.toggleCompleted}
          />
      </div>


      </div>
    );
  }
}

export default App;
