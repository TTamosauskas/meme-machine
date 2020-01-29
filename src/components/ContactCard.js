import React from 'react';

function ContactCard(props) {
  return (
    <div className="contact-card">
      <img src={props.imgUrl} />
      <h3>{props.name}</h3>
      <p>Telefone: {props.phone}</p>
      <p>E-mail: {props.email}</p>
    </div>
  );
}

export default ContactCard;
