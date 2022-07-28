import React, {useState, useEffect} from 'react';
import { storage} from '../../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL, listAll, list } from "firebase/storage";
import { v4 } from "uuid";

import "./CargarImagen.css"


function CargarImagen() {
  const [datosImagen, setDatosImagen] = useState (false)
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

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

  // function agregarImagen (){
  //   setDatosImagen(true)
  // }

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  
  console.log("imagesListRef",imagesListRef )
  console.log("imageUrls",imageUrls[0] )
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

          imageUrls.map((url) => (<>
                <img src={url} key={url.id} height="100px" width="100px"/>
                <button className='btn-agregar-img' >
                  GUARDAR
                </button>
              </>)
            )
    }   
    </div>
    
    
  </>
  )
}

export default CargarImagen