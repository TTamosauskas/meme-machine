import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Botao extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      buttonText: 'Log In',
      displayText: 'Logged out',
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
    return (
      <>
        <Button variant="dark" onClick={this.handleClick}>
          {buttonText}
        </Button>
        <h3>{displayText}</h3>
      </>
    );
  }
}

export default Botao;
