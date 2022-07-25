import React, { createContext, useEffect, useState } from "react";

// import { collection, getDocs} from "firebase/firestore";
// import db from '../../firebase/firebase';

export const Context = createContext({});

export const ContextProvider = ({children}) => {

    const [recetas, setResetas] = useState([])
    const [datos, setDatos] = useState([])

// Llamar a todas las recetas
    // useEffect(() => {
    //     const listRecipe = [];
    //     if(recetas.length === 0){
    //       const obtenerDatos = async () => {
    //         const data = await getDocs(collection(db, "recetas"));
    //         data.docs.map((i) => {
    //           listRecipe.push(i.data());
    //         });
    //         setResetas(listRecipe);
    //       };
    //       obtenerDatos();

    //   }
    //   }, [recetas]);



// ----Agrega los datos info de ingredientes
    const addToInfo =({nombre,comentario,number,peso,proveedor})=> {
        setDatos([
            ...datos,
            {
                nombre,
                comentario,
                number,
                peso,
                proveedor
            }]);
    }
    



    return (
        <Context.Provider value={{recetas,addToInfo,datos}}>
            {children}
        </Context.Provider>
    )
}

