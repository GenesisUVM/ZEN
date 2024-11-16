import React from 'react';
import 'vite/modulepreload-polyfill'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import InicioAdmin from './InicioSesiones/InicioAdmin'
import InicioUsuarios from "./InicioSesiones/InicioUsuarios";
import CreacionUsuario from "./InicioSesiones/CreacionUsuario";
import UsuariosAlfabetico from "./SeccionesAdmin/VistasPerfiles/UsuaiosAlfabetico";
import UsuariosGuardados from "./SeccionesAdmin/VistasPerfiles/UsuariosGuardados";
import UsuariosRecientes from "./SeccionesAdmin/VistasPerfiles/UsuariosRecientes";
import VistaBusqueda from "./SeccionesAdmin/VistasPerfiles/VistaBusqueda";
import ConfAdm from './SeccionesAdmin/VistasPerfiles/ConfAdm'
import Inicio from './SeccionesUsuarios/Inicio';



function App() {

  return (
    
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InicioAdmin />} />
        <Route path='/usuarios' element={<InicioUsuarios />} />
        <Route path='/creaUsuario' element={<CreacionUsuario />} /> 
        <Route path="/configuracion" element={<ConfAdm />} />
        <Route path='/recientes' element={<UsuariosRecientes />} /> 
        <Route path='/busqueda' element={<VistaBusqueda />} /> 
        <Route path='/alfabetico' element={<UsuariosAlfabetico />} />
        <Route path='/guardados' element={<UsuariosGuardados />} />
        <Route path='/inicioU' element={<Inicio />} />
          
      </Routes> 
    </BrowserRouter>   
  )
  
}

export default App
