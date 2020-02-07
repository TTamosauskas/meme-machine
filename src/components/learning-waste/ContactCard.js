import React from 'react';

function ContactCard(props) {
  return (
    <div className="contact-card">
      <img src={props.contact.imgURL} />
      <h3>{props.contact.name}</h3>
      <p>Telefone: {props.contact.phone}</p>
      <p>E-mail: {props.contact.email}</p>
    </div>
  );
}

export default ContactCard;
