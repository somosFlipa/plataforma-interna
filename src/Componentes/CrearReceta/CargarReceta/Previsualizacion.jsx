import React,{useContext} from 'react';
import { Context } from '../../Context/Context';


function Previsualizacion() {
  const {datosIngredientes, datoReceta, comensales, pasos, imgen }= useContext(Context)

  return (
    <>
        <div className='div-p-titulo-img'>
          <p className='p-titulo-img'>
            DATOS DE IMAGEN
          </p>
        </div>

      {/* se carga la informacion de la receta */}
        <div className='datos'>
          <p>Nombre de la receta</p>
          <p>{datoReceta[0].nombre}</p>
          <p>Procedimiento</p>
          <p>{pasos[0].paso1}</p>
          <p>{pasos[0].paso2}</p>
          <p>{pasos[0].paso3}</p>
          <p>{pasos[0].paso4}</p>
          <p>{pasos[0].paso5}</p>
          <p>Proveedor</p>
          {
            datosIngredientes.map(i =>(<p>{i.proveedor}</p>))
          }
          <p>Ingredientes</p>
          {
            datosIngredientes.map(i =>(<p>{i.nombre}</p>))
          }
          <p></p>
          <p>Cantidad de comensales: {comensales}</p>
          <p>Dificultad: {datoReceta[0].dificultad}</p>
          <p>Tiempo de receta: {datoReceta[0].tiempo} minutos</p>

          <img src={imgen}  height="100px" width="100px"/>
        <button className='btn-agregar-img'  >
            CARGAR RECETA
        </button>
        </div>
    </>
  )
}

export default Previsualizacion