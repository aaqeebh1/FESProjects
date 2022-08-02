function Joke(props) { 
    
    return (
      <div>
        <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
        <h3 style={{color: !props.question && "blue", fontWeight: !props.question && "900", fontSize: !props.question && "45px"}}>Answer: {props.punchline}</h3>
      </div>
    );
  
}

export default Joke;
