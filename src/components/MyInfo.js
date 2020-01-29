import React from 'react';

function MyInfo() {
  const firstName = 'Bob';
  const lastName = 'Dobbs';
  const date = new Date(2020, 12, 31, 19);
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 24,
  };

  if (hours < 12) {
    timeOfDay = 'um bom dia';
    styles.color = '#84756F';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'uma boa tarde';
    styles.color = '#2E0927';
  } else {
    timeOfDay = 'uma boa noite';
    styles.color = '#D90880';
  }

  return (
    <div>
      <h1>Bem vindo {`${firstName} ${lastName}`}!</h1>
      <p>Tenha {timeOfDay}</p>
      <p style={styles}>Agora são {date.getHours() % 12} horas</p>
      <ul>
        <li>parque</li>
        <li>shopping</li>
        <li>circo</li>
        <li>praia</li>
      </ul>
    </div>
  );
}

export default MyInfo;
