import "./../App.css";

function TodoItem(props) {

  return (
      <div className="todo__item">
      <input type="checkbox" id="learn" name="learn" value="HTML"></input>
      <label for="learn"> Learn {props.name}</label>
      <br></br>
      </div>
  );
}


export default TodoItem