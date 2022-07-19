import React from 'react'

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
            <img src={IconCasa} alt="IconCasa"/>

            <img src={Icon3lineas} alt="Icon3lineas"/>

            <img src={IconLapiz} alt="IconLapiz"/>
          </div>
      </div>
    </>
  )
}

export default NavLateral