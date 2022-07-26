import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import {ContextProvider} from './Componentes/Context/Context'
import CrearLista from './Componentes/CrearLista/CrearLista';
import CrearReceta from './Componentes/CrearReceta/CrearReceta';
import Home from './Componentes/Home/Home';

function App() {
  
  return (
    <ContextProvider>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/CrearReceta" element={<CrearReceta/>} />
        <Route exact path="/CrearLista" element={<CrearLista/>} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
