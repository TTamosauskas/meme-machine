import React from 'react';
import Joke from './Joke';
import jokesData from './jokesData';

function MainContent() {
  const jokesComponent = jokesData.map(joke => (
    <Joke
      key={joke.id}
      name={joke.name}
      imgURL={joke.imgURL}
      question={joke.question}
      punchline={joke.punchline}
      funy={joke.funy}
    />
  ));

  return (
    <main>
      <div className="kitten-list">{jokesComponent}</div>
    </main>
  );
}

export default MainContent;
