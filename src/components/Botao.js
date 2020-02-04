import React, { Component } from 'react';

class Botao extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }

  render() {
    const buttonText = this.state.isLoggedIn ? 'LOG OUT' : 'LOG IN';
    const displayText = this.state.isLoggedIn ? 'Logged in' : 'Logged out';

    const areaButton = {
      position: 'absolute',
      top: 5,
      right: 5,
    };

    const paragrafo = { color: '#fff' };

    return (
      <div style={areaButton}>
        <button variant="dark" onClick={this.handleClick}>
          {buttonText}
        </button>
        <p style={paragrafo}>{displayText}</p>
      </div>
    );
  }
}

export default Botao;
