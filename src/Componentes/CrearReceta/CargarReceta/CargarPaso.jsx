import React, { useState, useContext } from 'react';
import CargarImagen from './CargarImagen';
import { Context } from '../../Context/Context';

import "./CargarPaso.css"

function CargarPaso() {
    const {addToPasos}= useContext(Context)

    const [verImagen, setVerImagen] = useState(false)
    const [visualzarPasos, setVisualzarPasos] = useState(false)
    const [visualzarPasos4, setVisualzarPasos4] = useState(false)
    const [visualzarPasos5, setVisualzarPasos5] = useState(false)

    const [state, setState] = useState({
        paso1: "",
        paso2: "",
        paso3: "",
        paso4: "",
        paso5: "",
    });

    function agregarImgen (){
        addToPasos(state)
        setVerImagen(true)
    }

    function agregarPasos() {
        setVisualzarPasos(!visualzarPasos)
    }
    function agregarPasos4() {
        setVisualzarPasos4(!visualzarPasos4)
        const btnPasos = document.querySelector("#paso")
        btnPasos.classList.add("btn-sacar")
    }

    function agregarPasos5() {
        setVisualzarPasos5(!visualzarPasos5)
        const btnPasos = document.querySelector("#paso5")
        btnPasos.classList.add("btn-sacar")
    }

    function handleSelecChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

  return (
    <>
        <div className='div-p-titulo-proce'>
            <p className='p-titulo-proce'>
            DATOS DE PROCEDIMIENTOS
            </p>
        </div>
    
        <form className='datos-cargarpasos' onSubmit={e =>{e.preventDefault()}}>
            <p className='p-cargarpasos'>Agregar procedimiento</p>
            <label className='label-cargarpasos'>Paso 1:</label>
            <textarea className='txt-cargarpasos' placeholder='Escriba aqui' name="paso1" onChange={(e)=>{handleSelecChange(e)}}></textarea>
            <label className='label-cargarpasos'>Paso 2:</label>
            <textarea className='txt-cargarpasos' placeholder='Escriba aqui' name="paso2" onChange={(e)=>{handleSelecChange(e)}}></textarea>

            {
                visualzarPasos === true ? 
                <>
                    <label className='label-cargarpasos'>Paso 3:</label>
                    <textarea className='txt-cargarpasos' placeholder='Escriba aqui' name="paso3" onChange={(e)=>{handleSelecChange(e)}}></textarea>

                    <button className='btn-agregarpasos' id="paso" onClick={agregarPasos4}>+Agregar pasos</button>
                </> :
                <button className='btn-agregarpasos' onClick={agregarPasos}>+Agregar pasos</button>
            }
            {
                visualzarPasos4 === true ?
                <>
                    <label className='label-cargarpasos'>Paso 4:</label>
                    <textarea className='txt-cargarpasos' placeholder='Escriba aqui' name="paso4" onChange={(e)=>{handleSelecChange(e)}}></textarea>
                    <button className='btn-agregarpasos' id="paso5" onClick={agregarPasos5} >+Agregar pasos</button>
                </> :
                <></>
            }
            {
                visualzarPasos5 === true ?
                <>
                    <label className='label-cargarpasos'>Paso 5:</label>
                    <textarea className='txt-cargarpasos' placeholder='Escriba aqui' name="paso5" onChange={(e)=>{handleSelecChange(e)}}></textarea>
                </> :
                <></>
            }
           
           
                    
            <button className='btn-agregar-sin-fondo' onClick={()=>{agregarImgen()}} >GUARDAR</button>
        </form> 

        {
            verImagen === true ?
            <CargarImagen/> :
            <p></p>
        }
    
    </>
  )
}

export default CargarPaso