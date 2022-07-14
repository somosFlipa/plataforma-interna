import React from 'react';

function Card(props) {
    
  return (
    <div>
        <h3>Titulo: {props.nombre} </h3>
        <p>dificultad: {props.dificultad}</p>
        <p>tiempo: {props.tiempo}</p>
    </div>
  )
}

export default Card