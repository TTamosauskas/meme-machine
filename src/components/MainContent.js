import React from 'react';
import ContactCard from './ContactCard';

function MainContent() {
  return (
    <main>
      <div className="todo-list">
        <ContactCard
          name="Gatinho Fofo"
          imgUrl="http://placekitten.com/400/200"
          phone="(11) 9999-9999"
          email="fofo@gatinho.com"
        />

        <ContactCard
          name="Lucy"
          imgUrl="http://placekitten.com/450/200"
          phone="(11) 8888-9999"
          email="lucy@gatinho.com"
        />

        <ContactCard
          name="Garfield"
          imgUrl="http://placekitten.com/600/200"
          phone="(11) 777777-9999"
          email="lasanha@gatinho.com"
        />

        <ContactCard
          name="Max hedron"
          imgUrl="http://placekitten.com/210/200"
          phone="(11) 5555-9999"
          email="max@gatinho.com"
        />
      </div>
    </main>
  );
}

export default MainContent;
