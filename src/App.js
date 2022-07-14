import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import {ContextProvider} from './Componentes/Context/Context'
import Home from './Componentes/Home/Home';

function App() {
  
  return (
    <ContextProvider>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
