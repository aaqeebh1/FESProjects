import React, {Component} from 'react';
import './App.css';





class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
     }
     this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
    
  }
  

  render() {
    let btnText = this.state.isLoggedIn ? "LOG OUT" : "LOGIN";
    let displayText = this.state.isLoggedIn ? "LOGGED OUT" : "LOGGED IN";
    return (
      <div>
      <h1>You are {displayText}!!</h1>
      <button id='click' onClick={this.handleClick}>{btnText}</button>
      </div>
      )
  }
}



export default App
