import React, { createContext, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import db from '../../firebase/firebase';

export const Context = createContext({});

export const ContextProvider = ({children}) => {

    // const [recetas] = useState([])
    let recetas = "hola"

    useEffect(()=> {
    const obtenerDatos = async() => {
      const datos = await getDocs(collection(db, 'recetas'));
      datos.forEach((document) => {
         console.log(document.data());        
      });
    }
    obtenerDatos();
  },[]);


    return (
        <Context.Provider value={recetas}>
            {children}
        </Context.Provider>
    )
}

