import React, { useEffect, useState } from 'react';
import CargarPaso from './CargarPaso';

import "./CargarIngredientes.css"

// firebase
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../../firebase/firebase';
import VerIngredients from './VerIngredients';


function CargarIngredientes() {
    
    const [verPaso, setVerPaso] = useState (false)
    const [ingredients, setIngredients] = useState([])
    const [selec,setSelec] = useState([]) 

    function agregarPasos (){
        
        setVerPaso(true)
        
    }

    //Firebase
    useEffect(()=>{
        const productsCollection = collection(db, "ingredientes2")
        const getProducts = async ()   => {
        const data = await getDocs(productsCollection)
        setIngredients(
            data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
        )
       }
        getProducts()

        

    },[])
    
    
    function handleSelecChange(e) {
        const valor = e.target.value;
        setSelec([...selec,valor]) 
    }

    return (
        <>
        <div className='div-p-titulo-ingre'>
            <p className='p-titulo-ingre'>
            DATOS DE INGREDIENTES
            </p>
        </div>
        
        <form className='datos-ingresar-ingredientes' onSubmit={e =>{e.preventDefault()}}>
        <label className='ingresar-ingredientes-receta'>Ingresar ingredientes y proveedor</label>
        <select className='select-ingresar-ingrediente' id="ingredientes" name="ingredientes"  onChange={(e)=>{handleSelecChange(e)}}>
            {
                ingredients.map((nombreIngredient) =>(
                    
                    <option key={nombreIngredient.id} value={nombreIngredient.nombre} 
                    >{nombreIngredient.nombre} {nombreIngredient.cantidad} </option>
                    
                ))
                
            }
        </select>

        {
            selec ?
                selec.map((select,key)=>{

                return (
                    <VerIngredients key={key} select={select}/>
                )
                })
            :
            <p>nada</p>
        }
        
        <button className='btn-agregar-sin-fondo' onClick={() =>{agregarPasos()}}>GUARDAR</button>
    </form>

            
        {verPaso === true ?
            <CargarPaso/>:
        <p>No carges</p>
        }


    </>
  )
}

export default CargarIngredientes