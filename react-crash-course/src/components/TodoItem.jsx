import "./../App.css";




function TodoItem(props) {
    
  return (
      <div className="todo__item">
      <input 
       type="checkbox"
       id="learn"
       name="learn"
       onChange={() => props.handleChange(props.item.id)}></input>
      <label for="learn">{props.item.text}</label>
      <br></br>
      </div>
  );
}


export default TodoItem