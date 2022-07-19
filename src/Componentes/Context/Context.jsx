import React, { createContext, useEffect, useState } from "react";

import { collection, getDocs} from "firebase/firestore";
import db from '../../firebase/firebase';

export const Context = createContext({});

export const ContextProvider = ({children}) => {

    const [recetas, setResetas] = useState([])

// Llamar a todas las recetas
    useEffect(() => {
        const listRecipe = [];
        if(recetas.length === 0){
          const obtenerDatos = async () => {
            const data = await getDocs(collection(db, "recetas"));
            data.docs.map((i) => {
              listRecipe.push(i.data());
            });
            setResetas(listRecipe);
          };
          obtenerDatos();

      }
      }, [recetas]);

    



    return (
        <Context.Provider value={{recetas}}>
            {children}
        </Context.Provider>
    )
}

