import React from 'react';

function Joke(props) {
  return (
    <div className="joke">
      <img alt={props.joke.name} src={props.joke.imgURL} />
      <h3>Piada do {props.joke.name}</h3>
      <p>Question: {props.joke.question}</p>
      <p>Punchline: {props.joke.punchline}</p>
    </div>
  );
}

export default Joke;
