import React, { Component } from 'react';

class Joke extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {};
    });
  }

  render() {
    return (
      <div className="joke">
        <img alt={this.props.name} src={this.props.imgURL} />
        <h3>Piada do {this.props.name}</h3>
        <p style={{ display: this.props.question ? 'block' : 'none' }}>
          {this.props.question}
        </p>
        <p style={{ color: !this.props.question ? '#FF6600' : '#000' }}>
          {this.props.punchline}
        </p>
        <p>{this.props.likes} likes</p>
        <p>
          <input
            type="checkbox"
            onChange={() => this.props.handleChange(this.props.name)}
            checked={this.props.funy}
          />
          <label>Achei Engraçado {this.props.name}</label>
        </p>
      </div>
    );
  }
}
export default Joke;
