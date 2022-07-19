import React, { useState } from 'react';
import CargarPaso from './CargarPaso';



function CargarIngredientes() {

    
    const [verPaso, setVerPaso] = useState (false)

    function agregarPasos (){
        setVerPaso(true)
        
    }

    return (
        <>
        
        <form className='datos' onSubmit={e =>{e.preventDefault()}}>
        <label>Ingresar ingredientes y proveedor</label>
        <select id="ingredientes" name="ingredientes">
                <option value="Banano">Banano</option>
                <option value="Arándanos">Arándanos</option>
                <option value="Agua">Agua</option>
                <option value="Hielo">Hielo</option>
                <option value="AñadirNuevo">Añadir nuevo</option>
        </select>
        <button className='btn-agregar' onClick={() =>{agregarPasos()}}>GUARDAR</button>
    </form>
    
        
        {verPaso === true ?
            <CargarPaso/>:
        <p>No carges</p>
        }


    </>
  )
}

export default CargarIngredientes