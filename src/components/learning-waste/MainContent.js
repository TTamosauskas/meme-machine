import React, { Component } from 'react';
import Joke from './Joke';
import jokesData from './jokesData';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      jokes: jokesData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedJokes = prevState.jokes.map(joke => {
        if (joke.name === id) {
          joke.funy = !joke.funy;
          joke.likes += 1;
        }
        return joke;
      });
      return {
        jokes: updatedJokes,
      };
    });
  }

  render() {
    const jokesComponent = this.state.jokes.map(joke => (
      <Joke
        key={joke.id}
        name={joke.name}
        handleChange={this.handleChange}
        imgURL={joke.imgURL}
        question={joke.question}
        punchline={joke.punchline}
        funy={joke.funy}
        likes={joke.likes}
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
