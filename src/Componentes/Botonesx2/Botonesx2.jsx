import React from 'react'

import "./Botonesx2.css"

import Btncrearlista from "../../Media/BtnCrearLista.svg"
import Btncrearreceta from "../../Media/BtnCrearReceta.svg"

function Botonesx2() {
  return (
     <>
        <div className='cont-btns-x2'>
            <div className='btnsx2'>
                <img src={Btncrearlista} alt="btncrearlista" />
                <img src={Btncrearreceta} alt="btncrearlista" />
            </div>
        </div>
    </>
  )
}

export default Botonesx2