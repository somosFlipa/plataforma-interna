import React, { useState } from 'react';
import "./CrearLista.css"

import Card from '../Card/Card';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../../firebase/firebase';

import HeaderSup from '../HeaderSup/HeaderSup';
import LogoP from '../Logo/Logo';
import Botonesx2 from '../Botonesx2/Botonesx2';
import NavLateral from '../NavLateral/NavLateral';
import Footer from "../Footer/Footer";

import ImgDesayuno from "../../Media/Desayuno.svg"
import ImgAlmuerzo from "../../Media/Almuerzo.svg"
import ImgMerienda from "../../Media/Merienda.svg"
import ImgCena from "../../Media/Cena.svg"

//import changeColorBtn1 from '../../Utiles/BtnsColor';


function CrearLista() {
  

  const [ categoria, setCategoria ] = useState([])

  // Filtro por Horario de Comida (desayuno, almuerzo, merienda y cena)
  async function filtrarHora (categoria) {
    const q = query(collection(db, "recetas"), where("horaComer", "==", categoria));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setCategoria(doc.data());
    });

    
  }
 console.log(categoria)


  return (
    <>
    <div>
      <LogoP/>
      <HeaderSup/>
      <NavLateral/>
      <Botonesx2/>
      
      <div className='contenedor-ingre'>

        <h1> Navegá entre las categorías para descubrir recetas </h1>

        <div className='btns-cate-comidas'>

          <button onClick={() => {filtrarHora("DESAYUNO")}} >
            <img src={ImgDesayuno} alt='imgDesayuno'/>
          </button>

          <button onClick={() => {filtrarHora("ALMUERZO")}} >
            <img src={ImgAlmuerzo} alt='ImgAlmuerzo'/>
          </button>

          <button onClick={() => {filtrarHora("MERIENDA")}} >
            <img src={ImgMerienda} alt='ImgMerienda'/>
          </button>

          <button onClick={() => {filtrarHora("CENA")}} >
            <img src={ImgCena} alt='ImgCena'/>
          </button>

        </div>

        <div className="Ingredientes">
          { 
              categoria.length !== 0 ?  
                    <>
                        <input className='checkbox-card' type={"checkbox"}/>
                        <Card 
                            
                            nombre={categoria.nombre}
                            dificultad={categoria.dificultad}
                            tiempo={categoria.tiempo}
                        />
                    </>
                :
                <p>Nada</p>
          }
        </div>
      </div> 
        
    </div>
    <Footer/>
    </>
  )
}

export default CrearLista