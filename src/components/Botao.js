import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

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
        <Button variant="dark" onClick={this.handleClick}>
          {buttonText}
        </Button>
        <p style={paragrafo}>{displayText}</p>
      </div>
    );
  }
}

export default Botao;
