import React, { Component } from 'react';
import html2canvas from 'html2canvas';

class Meme extends Component {
  state = {
    topText: '',
    bottomText: '',
    randomImg: 'https://i.imgflip.com/1ur9b0.jpg',
    allMemeImages: [],
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

    // const c = document.getElementById('myCanvas');
    // const ctx = c.getContext('2d');
    //  const img = document.getElementById('memeIMG');
    //  ctx.drawImage(img, 10, 10);
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
  };

  // handleCanvas = event => {
  //   event.preventDefault();
  //  html2canvas(document.querySelector('.meme')).then(canvas => {
  //     document.body.appendChild(canvas);
  //   });
  // };

  render() {
    return (
      <>
        <main>
          <form className="meme-form" onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                name="topText"
                value={this.state.topText}
                placeholder="Texto do topo"
                onChange={this.handleChange}
              />
            </label>
            <label>
              <input
                type="text"
                name="bottomText"
                value={this.state.bottomText}
                placeholder="Texto do fundo"
                onChange={this.handleChange}
              />
            </label>
            <button>Sortear Meme</button>
          </form>

          <div className="meme">
            <img src={this.state.randomImg} />
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
          </div>
        </main>
      </>
    );
  }
}

export default Meme;
