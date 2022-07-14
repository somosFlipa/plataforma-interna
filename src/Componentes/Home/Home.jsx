import React, {useContext } from 'react';
import { Context } from '../Context/Context';

import Card from '../Card/Card'

function Home() {
    const recetas = useContext(Context)

    // if(recetas.length !== 0){
    //     const nombreReceta = recetas.map(n=>(
    //         n.nombre
    //     ))
    //     // console.log( recetas.map(i=>(i.horaComer)))
    //     console.log( nombreReceta)
    // }

    
  return (
    <div>
        <h1>Home</h1>
        {
            recetas.map((detalles, key) => {
                return (
                  <>
                    <Card
                      key={key}
                      nombre={detalles.nombre}
                      dificultad={detalles.dificultad}
                      tiempo={detalles.tiempo}
                    />
                  </>
                );
              })
        }
    </div>
  )
}

export default Home