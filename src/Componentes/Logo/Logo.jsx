import React from 'react'

import Logo from "../../Media/PlannerEAT.svg"
import "./Logo.css"

function LogoP() {
  return (
    <div className='log-cont-flex'>
        <div className='logo'>
            <img src={Logo} alt='Logo PlannerEat'/>
        </div>
    </div>
  )
}

export default LogoP