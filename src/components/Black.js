import React, { Component } from 'react';
import CardsData from './CardsData';

class Black extends Component {
  constructor() {
    super();
    this.state = {
      cards: CardsData,
    };
  }

  render() {
    const cardComponent = this.state.cards.map(card => card);

    const randNum = Math.floor(Math.random() * cardComponent.length);
    const randCard = cardComponent[randNum].text;

    return <h1>{randCard}</h1>;
  }
}
export default Black;
