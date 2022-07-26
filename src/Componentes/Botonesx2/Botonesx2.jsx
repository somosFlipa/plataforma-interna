import React from 'react'

import { Link } from 'react-router-dom'

import "./Botonesx2.css"

import Btncrearlista from "../../Media/BtnCrearLista.svg"
import Btncrearreceta from "../../Media/BtnCrearReceta.svg"

function Botonesx2() {
  return (
     <>
        <div className='cont-btns-x2'>
            <div className='btnsx2'>
                <Link to={"/crearlista"} ><img src={Btncrearlista} alt="btncrearlista" /></Link>
                <Link to={"/crearreceta"} ><img src={Btncrearreceta} alt="btncrearlista" /></Link>
            </div>
        </div>
    </>
  )
}

export default Botonesx2