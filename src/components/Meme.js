import React, { Component } from 'react';
import MemeData from './MemeData';

class Meme extends Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/ibij.jpg',
      allMemeImages: MemeData,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch(MemeData)
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        console.log(memes[0]);
        this.setState({ allMemeImages: memes });
      });
  }

  render() {
    return (
      <>
        <main>
          <h3>Hello world</h3>
        </main>
      </>
    );
  }
}

export default Meme;
