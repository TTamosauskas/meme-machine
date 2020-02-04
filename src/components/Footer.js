import React, { Component } from 'react';
import jokesData from './jokesData';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      jokes: jokesData,
    };
  }

  render() {
    return (
      <>
        {this.state.jokes.length > 0 && (
          <footer>
            <h3>Hoje foram {this.state.jokes.length} piadinhas</h3>
          </footer>
        )}
      </>
    );
  }
}

export default Footer;
