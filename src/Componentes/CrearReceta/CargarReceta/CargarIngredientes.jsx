import React, { useEffect, useState } from 'react';
import CargarPaso from './CargarPaso';

// firebase
import {collection, getDocs} from 'firebase/firestore';
import db from '../../../firebase/firebase';
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
        const productsCollection = collection(db, "ingredientes")
        const getProducts = async ()   => {
        const data = await getDocs(productsCollection)
        // console.log(data.docs)
        setIngredients(
            data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
        )
       }
        getProducts()

    },[])
    
    
    function handleSelecChange(e) {
        const valor = e.target.value
        selec.push(valor)
        setSelec([...selec, selec])
        // useEffect(()=>{
        //     setSelec([...selec, selec])
        // },[])
    
        
    }

    

    return (
        <>
        
        <form className='datos' onSubmit={e =>{e.preventDefault()}}>
        <label>Ingresar ingredientes y proveedor</label>
        <select id="ingredientes" name="ingredientes"  onChange={(e)=>{handleSelecChange(e)}}>
            {
                ingredients.map((nombreIngredient) =>(
                    
                    <option key={nombreIngredient.id} value={nombreIngredient.nombre} 
                    >{nombreIngredient.nombre} {nombreIngredient.cantidad} </option>
                    
                ))
                
            }
        </select>

        {
            selec ?
                selec.map((select)=>{

                return (
                    <VerIngredients key={select} select={select}/>
                // <div>
                //     <p key={select}>{select}</p>
                //     <input type="number" />
                //     <select name="" id="">
                //         <option value="gr">gr</option>
                //         <option value="ml">ml</option>
                //     </select>
                // </div>
                
                )
                })
            :
            <p>nada</p>
        }
        
        <button className='btn-agregar' onClick={() =>{agregarPasos()}}>GUARDAR</button>
    </form>
    
        
        {verPaso === true ?
            <CargarPaso/>:
        <p>No carges</p>
        }


    </>
  )
}

export default CargarIngredientes