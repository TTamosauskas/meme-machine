import React from 'react';

function Joke(props) {
  return (
    <div className="joke">
      <img alt={props.joke.name} src={props.joke.imgURL} />
      <h3>Piada do {props.joke.name}</h3>
      <p style={{ display: props.joke.question ? 'block' : 'none' }}>
        {props.joke.question}
      </p>
      <p style={{ color: !props.joke.question ? '#FF6600' : '#000' }}>
        {props.joke.punchline}
      </p>
    </div>
  );
}

export default Joke;
