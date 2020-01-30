import React from 'react';
import Joke from './Joke';

function MainContent() {
  return (
    <main>
      <div className="kitten-list">
        <Joke
          joke={{
            name: 'Senhor Fofura',
            imgURL: 'http://placekitten.com/400/200',
            question: 'Porque a galinha atravessou a rua?',
            punchline: 'Para chegar do outro lado!',
          }}
        />
        <Joke
          joke={{
            name: 'Bolinha de Pelo',
            imgURL: 'http://placekitten.com/405/204',
            punchline: '10% de dez conto é 5 reais!',
          }}
        />
        <Joke
          joke={{
            name: 'Bolinha de Pelo',
            imgURL: 'http://placekitten.com/401/201',
            question: 'Porque o bombeiro usa suspensóorio vermelho?',
            punchline: 'Para as calças não cairem!',
          }}
        />
        <Joke
          joke={{
            name: 'Lucy Liins',
            imgURL: 'http://placekitten.com/399/199',
            question: 'O que cai de pé e corre deitado?',
            punchline: 'A chuva!',
          }}
        />
        <Joke
          joke={{
            name: 'Maestro',
            imgURL: 'http://placekitten.com/402/202',
            question: 'Como um elefante se suicida?',
            punchline: 'Enfia a tromba no bumbum e assopra!',
          }}
        />
      </div>
    </main>
  );
}

export default MainContent;
