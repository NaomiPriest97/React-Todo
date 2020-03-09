import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      todo: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          onChange={this.handleChanges}
          value={this.state.todo}
          type="text"
          name="todo"
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
