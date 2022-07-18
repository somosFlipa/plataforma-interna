import React, {useContext } from 'react';
import { Context } from '../Context/Context';


import HeaderSup from '../HeaderSup/HeaderSup';
import Botonesx2 from '../Botonesx2/Botonesx2';
import NavLateral from '../NavLateral/NavLateral';
import Footer from "../Footer/Footer";

function Home() {
    const {recetas} = useContext(Context)

    console.log(recetas)
  return (
    <div>Home
      <HeaderSup/>
      <NavLateral/>
      <Botonesx2/>

      <Footer/>
    </div>
  )
}

export default Home