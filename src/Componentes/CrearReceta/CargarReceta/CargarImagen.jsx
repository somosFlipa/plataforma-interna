import React, {useState, useEffect,  useContext} from 'react';
import { storage} from '../../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL, listAll, list } from "firebase/storage";
import { v4 } from "uuid";
import { Context } from '../../Context/Context';

import "./CargarImagen.css"
import Previsualizacion from './Previsualizacion';


function CargarImagen() {
  const [datosImagen, setDatosImagen] = useState (false)
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [previsualizar, setpPevisualizar] = useState(false)
  

  const {addToImagen}= useContext(Context)

  //Subir foto en firebase y se vea
  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        
      });
    });
    
    setDatosImagen(true)
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  
  
  const timeoutId = imageUrls[imageUrls.length - 1];


  // guarda la informacion en usecontext y va a la pagina de previsualizacion
  function handlerOnclick (){
     addToImagen(timeoutId)

    setpPevisualizar(true)
  }

  return (
    <>
        <div className='div-p-titulo-img'>
          <p className='p-titulo-img'>
            DATOS DE IMAGEN
          </p>
        </div>

      {/* se carga la imagen */}
      <div className='datos'>
        
      {datosImagen !== true ?
          <>
              <p>No hay elementos imagen</p>
              <input type="file" name="nombre" onChange={(e) => {
                  setImageUpload(e.target.files[0]);
                }}  />
              <button className='btn-agregar-img' onClick={uploadFile} >
                + Agregar Imagen
              
              </button>
          </>
              :
              // <button className='btn-agregar-img' onClick={handlerOnclick} >
              //       GUARDAR
              //     </button>
             
              imageUrls.map((url) => (<>
                  <img src={url} key={url.id} height="100px" width="100px"/>
                  <button className='btn-agregar-img' onClick={handlerOnclick} >
                    GUARDAR
                  </button>
                </>)
              )
      }   
      {
        previsualizar === true ?
        <Previsualizacion/>
        :
        <></>
      }
      </div>
    
    
  </>
  )
}

export default CargarImagen