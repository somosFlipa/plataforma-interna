import React, { createContext, useEffect, useState } from "react";

// import { collection, getDocs} from "firebase/firestore";
// import db from '../../firebase/firebase';

export const Context = createContext({});

export const ContextProvider = ({children}) => {

    const [recetas, setResetas] = useState([])
    const [datosIngredientes, setDatosIngredientes] = useState([])
    const [datoReceta, setDatosReceta] = useState([])
    const [comensales, setComensales] = useState([])
    const [pasos, setPasos] = useState([])
    const [imgen, setImgen] = useState([])

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
const addToReceta =({nombre,tiempo,dificultad})=> {
    setDatosReceta([
        ...datoReceta,
        {
            nombre,
            tiempo,
            dificultad
            
        }]);
}

// ---- Agregar comensales-----------------------------------------------------
const addToComensales =(comensal)=> {
    setComensales(
        
        comensal
        );
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

// ----Agrega los datos de los pasos
const addToPasos =({paso1, paso2, paso3, paso4, paso5})=> {
    setPasos([
        ...pasos,
        {
            paso1, 
            paso2, 
            paso3, 
            paso4,
            paso5
            
        }]);
}
// ----Agrega la imagen
const addToImagen =(ima)=> {
    setImgen(
        ima
        );
}
    //  console.log("conext",datoReceta)
    //  console.log("comendal",comensales)
    //  console.log("ingresientes",datosIngredientes)
    // console.log("pasos",pasos)
    console.log("imagen",imgen)
    return (
        <Context.Provider value={{recetas, addToIngrediente ,datosIngredientes, addToReceta, datoReceta, 
                            addToComensales, comensales, addToPasos, pasos, addToImagen, imgen }}>
            {children}
        </Context.Provider>
    )
}

