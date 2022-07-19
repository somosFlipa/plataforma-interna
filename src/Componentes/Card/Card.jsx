import React from 'react';
import "./Card.css"

import Clock from "../../Media/clock.svg"

function Card(props) {
    
  return (
  <>
    <div className='flex-grupo-1'>
      
      <div className='Ingrediente'>

        <h3>{props.nombre} </h3>

        <p className='cont-dificultad'> 
          <p className='punto-dificultad'> . </p>
          {props.dificultad}
        </p>

        <p className='cont-clock-tiempo'> <img src={Clock} alt='reloj'/> {props.tiempo} {"’"}</p>

        <div className="box"></div>
      </div>
      
      
    </div>
    
    <div>
        <button className='btn-modificar'>Modificar</button>
    </div>
  </>
  )
}

export default Card