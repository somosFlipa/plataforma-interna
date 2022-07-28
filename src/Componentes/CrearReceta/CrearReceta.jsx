import React, { useState } from 'react';
import "./CrearReceta.css";

import CargaReceta from './CargarReceta/CargaReceta';
//import HeaderSup from '../HeaderSup/HeaderSup';
import NavLateral from '../NavLateral/NavLateral';
import Footer from '../Footer/Footer';
import LogoP from '../Logo/Logo';

/*      IMAGENES BOTONES        */
import datosrecetas from "../../Media/btnDatosRecetas/Tab 4.svg"
import ingredientes from "../../Media/btnDatosRecetas/Tab 2.svg"
import procedimiento from "../../Media/btnDatosRecetas/Tab 3.svg"
import imgreceta from "../../Media/btnDatosRecetas/Tab 6.svg"
import prevvisualizar from "../../Media/btnDatosRecetas/Tab 7.svg"

import svgpen from "../../Media/bxs_pencil.svg"

function CrearReceta() {

  const [datosRecetas, setDatosRecetas] = useState(false);

  function agregarDatos() {
    setDatosRecetas(true)
    
    /*if(document.getElementById('#datos').Checked){
      //document.getElementById('#datos').background="#000";
      datos.style.background="#000";
    }*/

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
      <img className='pen-fondo' src={svgpen} alt="penazul" />
      <NavLateral/>
      

      <div className='cont-crearr-flex'>

        <div className='menu-secundario'>
          {/*<input type="image" src={datosrecetas} id="datos"></input>*/}
          <button id="datos"><img src={datosrecetas} alt=''/></button>
          <button id="ingredientes"><img src={ingredientes} alt=''/></button>
          <button id="procedimento"><img src={procedimiento} alt=''/></button>
          <button id="imagen"><img src={imgreceta} alt=''/></button>
          <button id="previsualizar"><img src={prevvisualizar} alt=''/></button>
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