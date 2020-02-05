import React, { Component } from 'react';

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.com
// https://medium.com/javascrip-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class Fetch extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://swapi.co/api/people/1/')
      .then(response => response.json())
      .then(data => {
        this.setState({ character: data });
        this.setState({ loading: false });
      });
  }

  render() {
    const text = this.state.loading ? 'loading...' : this.state.character.name;
    return <div>Bring to you by {text}</div>;
  }
}

export default Fetch;
