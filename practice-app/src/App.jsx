import React from 'react';
import './App.css';





class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <img src="https://i.pinimg.com/originals/e4/e1/d7/e4e1d760534bb6bc9cc269d6cbfd41fd.jpg" alt="" onMouseOver={() => console.log('Hoverd')}/>
        <br />
        <br />
        <button onClick={() => console.log('clicked')}>Click Me</button>
      </div>
    );
  }
}



export default App
