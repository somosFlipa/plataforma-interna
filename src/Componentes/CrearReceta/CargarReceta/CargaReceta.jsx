import React, {useState} from 'react';
import './CargaReceta.css';
import CargarIngredientes from './CargarIngredientes';
import {useLocalStorage} from '../../../LocalStorage/LocalStorage';

// firebase
import { collection, addDoc } from 'firebase/firestore';
import db from '../../../firebase/firebase';

function CargaReceta() {

    const [counter, setCounter] = useState(1);
    const [datosIngredientes, setDatosIngredientes] = useState(false);
    const [verIngredientes,setVerIngredientes] = useState(false)

    // conexion firebase
    const productsCollection = collection(db, "recetas")
    const store = async (e) => {
        await addDoc( productsCollection, { nombre:nombre, candidadComendales:counter, tiempo:tiempo, dificultad:dificultad } )
    }

    // se guarda en el localStorage (formulario)
    const [nombre, setNombre] = useLocalStorage('text','')
    // const [comendales, setComendales] = useLocalStorage('counter',{counter})
    const [tiempo, setTiempo] = useLocalStorage ('number','')
    const [dificultad,setDificultad] = useLocalStorage()

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
                <input type="text" placeholder='Escribir nombre de la receta' name="nombre" value={nombre} onChange={e=>{setNombre(e.target.value)}}/> 
                <br></br>
                <label>Cantidad de comensales</label>
                <div>
                    <button onClick={() => {
                        if (counter > 1) {
                        setCounter(counter - 1)
                        // setComendales(comendales - 1)
                    }}}>-</button>

                    <p type="counter" name="comendales" value={counter}
                    // value={comendales} onChange={e=>{setComendales(e.target.value)}}
                    >{counter}</p>
                    <button onClick={() => { 
                            if (counter < 4) {
                            setCounter(counter + 1)
                            // setComendales(comendales + 1)
                        }}}>+</button>
                </div>
                <label>Tiempo de preparación</label>
                <input type="number" placeholder='Ingresar tiempo' name="tiempo" value={tiempo} onChange={e=>{setTiempo(e.target.value)}}/>
                <select id="tiempo" name="tiempo">
                    <option value="min">minutos</option>
                </select><br></br>
                <label>Dificultad</label>
                <select id="dificultad" name="dificultad" value={dificultad} onChange={e=>{setDificultad(e.target.value)}}>
                    <option value="bajo">bajo</option>
                    <option value="medio">medio</option>
                    <option value="alto">alto</option>
                </select>
                <button className='btn-agregar' onClick={()=>{
                    cargarIngrediente()
                    store()}}>
                    GUARDAR
                </button>
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