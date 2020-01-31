import React from 'react';

function sadCat() {
  alert('oi');
}

function meAmar() {
  alert('Tem que me amar!');
}

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
      <p>
        <input type="checkbox" onChange={sadCat} checked={props.funy} />
        <label>Achei Engraçado {props.name}</label>
      </p>
    </div>
  );
}

export default Joke;
