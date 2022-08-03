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
  }
  render() {
    const todosItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} />
    ));
    return <div className="todo__item--wrapper">{todosItems}</div>;
  }
}

export default Main;
