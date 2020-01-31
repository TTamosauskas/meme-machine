import React, { Component } from 'react';
import Joke from './Joke';
import jokesData from './jokesData';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      jokes: jokesData,
    };
  }

  render() {
    const jokesComponent = this.state.jokes.map(joke => (
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
}
export default MainContent;
