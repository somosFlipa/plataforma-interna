import React, { useState } from 'react';

import Card from '../Card/Card';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../../firebase/firebase';


function Home() {
  
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
    <div>
        <h1>Home</h1>
        <div>
          <button  onClick={() => {filtrarHora("DESAYUNO")}} >Desayuno</button>
          <button onClick={() => {filtrarHora("ALMUERZO")}} >Alamuerzo</button>
          <button onClick={() => {filtrarHora("MERIENDA")}} >Merienda</button>
          <button onClick={() => {filtrarHora("CENA")}} >Cena</button>
        </div>

        {
            categoria.length !== 0 ?  
                  <>
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
  )
}

export default Home

