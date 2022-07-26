import React, {useState, useContext} from 'react';
import './CargaReceta.css';
import CargarIngredientes from './CargarIngredientes';
// import {useLocalStorage} from '../../../LocalStorage/LocalStorage';
import { Context } from '../../Context/Context';

// firebase
import { collection, addDoc } from 'firebase/firestore';
import db from '../../../firebase/firebase';

function CargaReceta() {

    const [counter, setCounter] = useState(1);
    const [datosIngredientes, setDatosIngredientes] = useState(false);
    const [verIngredientes,setVerIngredientes] = useState(false)

    const {addToReceta, addToComensales}= useContext(Context)

    // conexion firebase
    // const productsCollection = collection(db, "recetas")
    // const store = async (e) => {
    //     await addDoc( productsCollection, { nombre:nombre, candidadComendales:counter, tiempo:tiempo, dificultad:dificultad } )
    // }

    // se guarda en el localStorage (formulario)
    // const [nombre, setNombre] = useLocalStorage('nombre','')
    // const [comendales, setComendales] = useLocalStorage('counter',{counter})
    // const [tiempo, setTiempo] = useLocalStorage ('tiempo',{tiempo})
    // const [dificultad,setDificultad] = useLocalStorage('dificultad',{dificultad})

    const [state, setState] = useState({
        nombre: "",
        tiempo: Number(""),
        dificultad:""
    });


    function cargarIngrediente() {
        addToReceta(state)
        addToComensales(counter)
        setDatosIngredientes(true)
        
    }

    function agregarIngredientes() {
        setVerIngredientes(true)
    }

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
 
  return (
    <>
        {
            datosIngredientes === false ? 
            <form className='datos-cargar-receta' onSubmit={e =>{e.preventDefault()}}>
                <label className='titulo-cargar-receta'>Nombre de la receta</label>
                <input className='input-nombre-receta' type="text" placeholder='Escribir nombre de la receta' name="nombre"  onChange={e=>{handleChange(e)}}/>  

                <br></br>
                <label className='titulo-cargar-receta'>Cantidad de comensales</label>
                <div className="contador">
                    <button className="btn-menos" onClick={() => {
                        if (counter > 1) {
                        setCounter(counter - 1)
                        // setComendales(comendales - 1)
                    }}}>-</button>
                    <p>{counter}</p>
                    <button className="btn-mas" onClick={() => { 
                            if (counter < 4) {
                            setCounter(counter + 1)
                            // setComendales(comendales + 1)
                        }}}>+</button>
                </div>

                <label className='titulo-cargar-receta'>Tiempo de preparación</label>
                <input className='input-tiempo-receta' type="number" placeholder='Ingresar tiempo' name="tiempo"  onChange={e=>{handleChange(e)}}/>
                <select className='select-tiempo-receta' id="tiempo" name="tiempo">
                    <option value="min">minutos</option>
                </select><br></br>
                <label className='titulo-cargar-receta'>Dificultad</label>
                <select className='input-nombre-receta' id="dificultad" name="dificultad" onChange={e=>{handleChange(e)}}>
                    <option value="">Eligue dificultad</option>
                    <option value="bajo">bajo</option>
                    <option value="medio">medio</option>
                    <option value="alto">alto</option>
                </select>
                <button className='btn-agregar-sin-fondo' onClick={()=>{
                    cargarIngrediente();
                    }}>GUARDAR
                </button>
            </form> 
        :
        <div className='datos'>
        <p>No hay elementos</p>
            <button className='btn-agregar-ingre' onClick={() =>{agregarIngredientes()}}>
                + Agregar Ingredientes
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