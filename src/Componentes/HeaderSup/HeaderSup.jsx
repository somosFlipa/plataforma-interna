import React from 'react'

import Logo from "../../Media/PlanerEAT.svg"
import "./HeaderSup.css"

function HeaderSup() {
    

  return (
    <>
        <div>
            <div>
                <img src={Logo} alt='Logo PlannerEat'/>
            </div>

            <div>
                <input type="text" name="buscador" id="buscador" placeholder="🔍 Buscar"/>
            </div>
        </div>

        {/* USAR UN CLASS QUE SE LLAME INGREDIENTES*/}
    </>
  )
}

export default HeaderSup