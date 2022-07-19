import React, {useState} from 'react';
import './CargaReceta.css'
import CargarIngredientes from './CargarIngredientes';

function CargaReceta() {

    const [counter, setCounter] = useState(1);
    const [datosIngredientes, setDatosIngredientes] = useState(false);
    const [verIngredientes,setVerIngredientes] = useState(false)

    function cargarIngrediente() {
        setDatosIngredientes(true)
    }

    function agregarIngredientes() {
        setVerIngredientes(true)
    }


  return (
    <>
        {
            datosIngredientes === false ? 
                <form className='datos' onSubmit={e =>{e.preventDefault()}}>
                <label>Nombre de la receta</label>
                <input type="text" placeholder='Escribir nombre de la receta'/> <br></br>
                <label>Cantidad de comensales</label>
                <div>
                    <button onClick={() => {
                        if (counter > 1) {
                        setCounter(counter - 1)}
                    }}>-</button>

                    <p>{counter}</p>

                    <button onClick={() => { 
                            if (counter < 4) {
                            setCounter(counter + 1)}
                    }}>+</button>
                </div>
                <label>Tiempo de preparación</label>
                <input type="text" placeholder='Ingresar tiempo'/>
                <select id="tiempo" name="tiempo">
                    <option value="min">minutos</option>
                    <option value="horas">horas</option>
                </select><br></br>
                <label>Dificultad</label>
                <select id="dificultad" name="dificultad">
                    <option value="bajo">bajo</option>
                    <option value="medio">medio</option>
                    <option value="alto">alto</option>
                </select>
                <button className='btn-agregar' onClick={()=>{cargarIngrediente()}}>GUARDAR</button>
            </form> 
        :
            <div className='datos'>
                <p>No hay elementos</p>
                    <button className='btn-agregar' onClick={() =>{agregarIngredientes()}}>
                        + Agregar datos
                    </button>
            </div>
            
            
        }
       

           
        {verIngredientes === true ?
            <CargarIngredientes/> :
        <p>No carges</p>
        }
    </>
  )
}

export default CargaReceta