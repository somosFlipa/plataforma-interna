import React from 'react'

import Lupa from "../../Media/Lupa.svg"

import Logo from "../../Media/PlannerEAT.svg"
import "./HeaderSup.css"

function HeaderSup() {
    document.addEventListener("keyup", e=>{
        
        if (e.target.matches("#buscador")){  //True o false si identifica el keyup
      
            if (e.key ==="Escape")e.target.value = ""
      
            document.querySelectorAll(".ingredientes").forEach(ingre =>{
      
                ingre.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                  ?ingre.classList.remove("filtro") :ingre.classList.add("filtro")
            });
            //console.log(e.target.value)
        }
    });

  return (
    <>
        <div className='cont-header-sup'>
            <div className='logo'>
                <img src={Logo} alt='Logo PlannerEat'/>
            </div>

            <div className='nav-buscador'>
                <img className='lupa-buscador' src={Lupa} alt="lupa" />
                <input type="text" name="buscador" id="buscador" placeholder="Buscar"/>
            </div>
        </div>

        {/* USAR UN CLASS QUE SE LLAME INGREDIENTES*/}
    </>
  )
}

export default HeaderSup