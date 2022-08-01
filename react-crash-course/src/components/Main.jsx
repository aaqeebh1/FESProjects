import "./../App.css";
import TodoItem from "./TodoItem";

function Main() {
  return (
    <div className="todo__item--wrapper">
          <TodoItem 
          name="HTML"
          />
          <TodoItem 
          name="CSS"
          />
          <TodoItem 
          name="JavaScript"
          />
          <TodoItem 
          name="React"
          />
    </div>
  );
}

export default Main;
