import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../Context/Context';

// firebase
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../../firebase/firebase';



function VerIngredients({select}) {

    const {addToIngrediente ,datosIngredientes}= useContext(Context)
    const [medida, setMedida] = useState([])

    const [state, setState] = useState({
        nombre: select,
        comentario:"",
        number: "",
        peso:"",
        proveedor:""
    });

     //Firebase
     useEffect(()=>{
        const productsCollection = collection(db, "medidas")
        const getProducts = async ()   => {
        const data = await getDocs(productsCollection)
        setMedida(
            data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
        )
       }
        getProducts()

        

    },[]) 

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function hasdelonClick(e){
         e.preventDefault()
         addToIngrediente (state);
    }



  return (
    <>
        <form onSubmit={e =>{e.preventDefault()}}>
            <p name="nombre" onChange={(e) => handleChange(e)}>{select}</p> 
            <textarea name="comentario" id="" cols="10" rows="5" placeholder='comentario de ingrediente'onChange={(e) => handleChange(e)} ></textarea>
            <input type="number" name="number" onChange={(e) => handleChange(e)} />
            <select name="peso"id=""  onChange={(e) => handleChange(e)}>
                <option  value="">Elegi la unidad</option>
                {
                    medida.map((m) =>(
                            <option key={m.id} value={m.medida} 
                            >{m.medida}  </option>
                    ))
                }
                    
            </select>
            <select name="proveedor" id="" placeholder='elegir proveedor' onChange={(e) => handleChange(e)} >
                    <option value="elegir">elegir proveedor</option>
                    <option value="walmart">walmart</option>
                    <option value="carrefoul">carrefoul</option>
                    <option value="vea">vea</option>
            </select>
            <button onClick={(e)=>{hasdelonClick(e)}}>Agregar</button>
        </form>

        {/* {
            datosIngredientes ?
            datosIngredientes.map(datos=> (
                <div>
                    <span> {datos.nombre} </span>
                    <span> {datos.comentario} </span>
                    <span> {datos.number} </span>
                    <span> {datos.peso} </span>
                    <span> {datos.proveedor}</span>
                    <button>X</button>
                </div>
                
            ))
             :
            <p>nada</p>
        } */}
    </>
  )
}

export default VerIngredients