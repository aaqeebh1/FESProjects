import "./../App.css";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "green",
    textDecoration: "line-through",
  };

  return (
    <div className="todo__item">
      <input
        type="checkbox"
        id="todoItem"
        name="todoItem"
        checked= {props.item.completed}
        onChange={() => {
          props.handleChange(props.item.id);
        }}
      ></input>
      <p style={props.item.completed ? completedStyle : null}>
        {props.item.text}
      </p>
      <br></br>
    </div>
  );
}

export default TodoItem;
