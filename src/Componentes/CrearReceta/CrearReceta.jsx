import React, { useState } from 'react';
import "./CrearReceta.css";

import CargaReceta from './CargarReceta/CargaReceta';
//import HeaderSup from '../HeaderSup/HeaderSup';
import NavLateral from '../NavLateral/NavLateral';
import Footer from '../Footer/Footer';
import LogoP from '../Logo/Logo';

function CrearReceta() {

  const [datosRecetas, setDatosRecetas] = useState(false);

  function agregarDatos() {
    setDatosRecetas(true)

  }

  return (
    <>
      <LogoP/>
      {/*                      REUTILIZAR CODIGO PARA CADA PAG CON TITULO DIF     */}
      <div className='div-p-titulo'>
        <p className='p-titulo'>
            DATOS DE RECETA
        </p>
      </div>
      {/*                      REUTILIZAR CODIGO PARA CADA PAG CON TITULO DIF     */}
      <NavLateral/>

      <div className='cont-crearr-flex'>

        <div className='menu-secundario'>
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
      </div>

      <Footer/>
    </>
  )
}

export default CrearReceta;