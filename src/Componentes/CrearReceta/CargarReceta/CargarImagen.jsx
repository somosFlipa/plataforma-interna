import React, {useState} from 'react';


function CargarImagen() {
  const [datosImagen, setDatosImagen] = useState (false)

  function agregarImagen (){
    setDatosImagen(true)
  }

  return (
    <>
    {/* se carga la imagen */}
          <div className='datos'>
        <p>No hay elementos imagen</p>
          <button className='btn-agregar' onClick={() =>agregarImagen()}>
            + Agregar datos
          </button>
      </div>
    
    
  </>
  )
}

export default CargarImagen