import React, { createContext, useEffect, useState } from "react";

// import { collection, getDocs} from "firebase/firestore";
// import db from '../../firebase/firebase';

export const Context = createContext({});

export const ContextProvider = ({children}) => {

    const [recetas, setResetas] = useState([])
    const [datosIngredientes, setDatosIngredientes] = useState([])
    const [datoReceta, setDatosReceta] = useState([])

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

// ----Agrega los datos de recetas nueva
const addToReceta =({nombre,comentario,number,peso,proveedor})=> {
    setDatosReceta([
        ...datoReceta,
        {
            nombre,
            comentario,
            number,
            peso,
            proveedor
        }]);
}

// ----Agrega los datos info de ingredientes
    const addToIngrediente =({nombre,comentario,number,peso,proveedor})=> {
        setDatosIngredientes([
            ...datosIngredientes,
            {
                nombre,
                comentario,
                number,
                peso,
                proveedor
            }]);
    }
    
    // console.log("conext",datoReceta)


    return (
        <Context.Provider value={{recetas,addToIngrediente ,datosIngredientes, addToReceta,datoReceta }}>
            {children}
        </Context.Provider>
    )
}

