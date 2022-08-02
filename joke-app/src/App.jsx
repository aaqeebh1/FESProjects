import "./App.css";
import Joke from "./components/Joke";
import jokesData from "./components/jokesData";

function App() {
  const jokeComponent = jokesData.map((joke) => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)
  
  return (
    <div>
    {jokeComponent}
  </div>
)
}

export default App;
