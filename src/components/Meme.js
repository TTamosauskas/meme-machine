import React, { Component } from 'react';
import BlackCardsData from './BlackCardsData';
import WhiteCardsData from './WhiteCardsData';

class Meme extends Component {
  state = {
    topText: 'Memes',
    bottomText: 'Against Humanity',
    randomImg: 'https://i.imgflip.com/1ur9b0.jpg',
    allMemeImages: [],
    blackcards: BlackCardsData,
    whitecards: WhiteCardsData,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        console.log(memes[1]);
        this.setState({ allMemeImages: memes });
      });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImages.length);
    const randMemeImg = this.state.allMemeImages[randNum].url;
    this.setState({ randomImg: randMemeImg });

    const blackcardComponent = this.state.blackcards.map(card => card);
    const randNum2 = Math.floor(Math.random() * blackcardComponent.length);
    const randCard = blackcardComponent[randNum2].text;
    this.setState({ topText: randCard });

    const whitecardComponent = this.state.whitecards.map(card => card);
    const randNum3 = Math.floor(Math.random() * whitecardComponent.length);
    const randCard3 = whitecardComponent[randNum3];
    this.setState({ bottomText: randCard3 });
  };

  render() {
    return (
      <>
        <main>
          <h1>{this.state.randCard}</h1>
          <form className="meme-form" onSubmit={this.handleSubmit}>
            <button>TRY YOUR LUCK</button>
          </form>
          <div className="meme">
            <img src={this.state.randomImg} alt="" />
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
          </div>
        </main>
      </>
    );
  }
}

export default Meme;
