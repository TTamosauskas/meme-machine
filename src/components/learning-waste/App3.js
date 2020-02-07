import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Tamosauskas',
      age: '38',
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <>
        <div>
          <h1>{this.state.name}</h1>
          <p>{this.state.age} de idade</p>
          <p>Você está {this.state.isLoggedIn ? 'logado' : 'deslogado'}</p>
        </div>
      </>
    );
  }
}

export default App;
