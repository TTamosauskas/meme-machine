import React from 'react';

function MyInfo(){

const firstName ="Bob"
const lastName = "Dobbs"
const date = new Date()
const hours = date.getHours()
let timeOfDay

if (hours < 12) {
  timeOfDay = "um bom dia"
}else if (hours >= 12 && hours < 17) {
  timeOfDay = "uma boa tarde"
} else {
  timeOfDay = "uma boa noite"
}

  return (
    <div>
      <h1>Bem vindo {`${firstName} ${lastName}`}!</h1>
  <p>Tenha {timeOfDay}</p>
    <p>Agora são {date.getHours() % 12} horas</p>
  <ul>
    <li>parque</li>
    <li>shopping</li>
    <li>circo</li>
    <li>praia</li>
    </ul>
    </div> 
  )}
  
  export default MyInfo;