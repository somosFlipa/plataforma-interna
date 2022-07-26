import React, { useState } from 'react';
import CargarImagen from './CargarImagen';

import "./CargarPaso.css"

function CargarPaso() {
    const [verImagen, setVerImagen] = useState(false)

    function agregarImgen (){
        setVerImagen(true)
    }

  return (
    <>
        <div className='div-p-titulo-proce'>
            <p className='p-titulo-proce'>
            DATOS DE PROCEDIMIENTOS
            </p>
        </div>
    
        <form className='datos-cargarpasos' onSubmit={e =>{e.preventDefault()}}>
            <p className='p-cargarpasos'>Agregar procedimiento</p>
            <label className='label-cargarpasos'>Paso 1:</label>
            <textarea className='txt-cargarpasos' placeholder='Escriba aqui'></textarea>
            <label className='label-cargarpasos'>Paso 2:</label>
            <textarea className='txt-cargarpasos' placeholder='Escriba aqui'></textarea>
            <button className='btn-agregarpasos'>+Agregar pasos</button>
                    
            <button className='btn-agregar-sin-fondo' onClick={()=>{agregarImgen()}} >GUARDAR</button>
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