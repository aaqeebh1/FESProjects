import "./../App.css";
import TodoItem from "./TodoItem";
import todosData from "./todoData";
import React from "react";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
  this.setState(prevState => {
    const updatedTodos =  prevState.todos.map(todos => {
      if (todos.id === id) {
        todos.completed = !todos.completed
      }
      return todos
    })
    return {
      todos: updatedTodos
    }
  })
  }
  render() {
    const todosItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>
    ));
    return <div className="todo__item--wrapper">{todosItems}</div>;
  }
}

export default Main;
 