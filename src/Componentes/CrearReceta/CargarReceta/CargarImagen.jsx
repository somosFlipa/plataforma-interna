import React, {useState} from 'react';

import "./CargarImagen.css"


function CargarImagen() {
  const [datosImagen, setDatosImagen] = useState (false)

  function agregarImagen (){
    setDatosImagen(true)
  }

  return (
    <>
      <div className='div-p-titulo-img'>
        <p className='p-titulo-img'>
          DATOS DE IMAGEN
        </p>
      </div>

    {/* se carga la imagen */}
          <div className='datos'>
        <p>No hay elementos imagen</p>
          <button className='btn-agregar-img' onClick={() =>agregarImagen()}>
            + Agregar Imagen
          </button>
      </div>
    
    
  </>
  )
}

export default CargarImagen