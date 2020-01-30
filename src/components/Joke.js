import React from 'react';

function Joke(props) {
  return (
    <div className="joke">
      <img alt={props.name} src={props.imgURL} />
      <h3>Piada do {props.name}</h3>
      <p style={{ display: props.question ? 'block' : 'none' }}>
        {props.question}
      </p>
      <p style={{ color: !props.question ? '#FF6600' : '#000' }}>
        {props.punchline}
      </p>
    </div>
  );
}

export default Joke;
