import React, { useState } from 'react';
import "./CrearReceta.css";
import CargaReceta from './CargarReceta/CargaReceta';

function CrearReceta() {

  const [datosRecetas, setDatosRecetas] = useState(false);

  function agregarDatos() {
    setDatosRecetas(true)

  }

  return (
    <>
      <div>
        <button id="datos">DATOS DE RECETAS</button>
        <button id="ingredientes">INGREDIENTES</button>
        <button id="procedimento">PROCEDIMENTO</button>
        <button id="imagen">IMAGEN DE RECETA</button>
        <button id="previsualizar">PREVISUALIZAR</button>
      </div>

      {
        datosRecetas === true ?
          <CargaReceta/> 
          :
          <div className='datos'>
          <p>No hay elementos</p>
            <button className='btn-agregar' onClick={() =>agregarDatos()}>
              + Agregar datos
            </button>
        </div>
      }


    </>
  )
}

export default CrearReceta;