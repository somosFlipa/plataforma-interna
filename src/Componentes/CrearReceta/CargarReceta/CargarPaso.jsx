import React, { useState } from 'react';
import CargarImagen from './CargarImagen';

function CargarPaso() {
    const [verImagen, setVerImagen] = useState(false)

    function agregarImgen (){
        setVerImagen(true)
    }

  return (
    <>
    
        <form className='datos' onSubmit={e =>{e.preventDefault()}}>
            <p>Agregar procedimiento</p>
            <label>Paso 1:</label>
            <textarea placeholder='Escriba aqui'></textarea>
            <label>Paso 2:</label>
            <textarea placeholder='Escriba aqui'></textarea>
            <button>+Agregar pasos</button>
                    
            <button className='btn-agregar' onClick={()=>{agregarImgen()}} >GUARDAR</button>
        </form> 

        {
            verImagen === true ?
            <CargarImagen/> :
            <p></p>
        }
    
    </>
  )
}

export default CargarPaso