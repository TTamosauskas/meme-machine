import React from 'react';
import Joke from './Joke';
import jokesData from './jokesData';

function MainContent() {
  return (
    <main>
      <div className="kitten-list">
        {jokesData.map(joke => (
          <Joke
            key={joke.id}
            name={joke.name}
            imgURL={joke.imgURL}
            question={joke.question}
            punchline={joke.punchline}
          />
        ))}
      </div>
    </main>
  );
}

export default MainContent;
