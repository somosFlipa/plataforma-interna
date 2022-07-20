import React from 'react'

import { Link } from 'react-router-dom'

import IconCasa from "../../Media/IconCasa.svg"
import Icon3lineas from "../../Media/Icon3lineas.svg"
import IconLapiz from "../../Media/IconLapiz.svg"
import IconAvatar from "../../Media/Avatar.svg"

import "./NavLateral.css"

function NavLateral() {
  return (
    <>
      <div className='cont-nav-lat'>
          <div className='identificador-inicio'>
            <img src={IconAvatar} alt="" />
          </div>

          <div className='btns-iconos'>
            <Link to={"/"}><img src={IconCasa} alt="IconCasa"/></Link> 

            <Link to={"/crearreceta"}><img src={Icon3lineas} alt="IconCasa"/></Link> 

            <Link to={"/editarreceta"}><img src={IconLapiz} alt="IconCasa"/></Link> 
          </div>
      </div>
    </>
  )
}

export default NavLateral