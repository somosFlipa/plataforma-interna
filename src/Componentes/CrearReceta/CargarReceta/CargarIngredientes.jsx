import React, { useState } from 'react';
import CargarPaso from './CargarPaso';

import "./CargarIngredientes.css"

function CargarIngredientes() {
    
    const [verPaso, setVerPaso] = useState (false)

    function agregarPasos (){
        setVerPaso(true)
        
    }

    return (
        <>
        <div className='div-p-titulo-ingre'>
            <p className='p-titulo-ingre'>
            DATOS DE INGREDIENTES
            </p>
        </div>
        
        <form className='datos-ingresar-ingredientes' onSubmit={e =>{e.preventDefault()}}>
            <label className='ingresar-ingredientes-receta'>Ingresar ingredientes y proveedor</label>
            <select className='select-ingresar-ingrediente' id="ingredientes" name="ingredientes">
                <option value="Banano">Banano</option>
                <option value="Arándanos">Arándanos</option>
                <option value="Agua">Agua</option>
                <option value="Hielo">Hielo</option>
                <option value="AñadirNuevo">Añadir nuevo</option>
            </select>
            <button className='btn-agregar-sin-fondo' onClick={() =>{agregarPasos()}}>GUARDAR</button>
        </form>
    
        
        {verPaso === true ?
            <CargarPaso/>:
        <p>No carges</p>
        }


    </>
  )
}

export default CargarIngredientes