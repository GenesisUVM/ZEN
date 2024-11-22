import React from 'react';
import 'vite/modulepreload-polyfill'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import InicioAdmin from './InicioSesiones/InicioAdmin'
import InicioUsuarios from "./InicioSesiones/InicioUsuarios";
import CreacionUsuario from "./InicioSesiones/CreacionUsuario";
import UsuariosAlfabetico from "./SeccionesAdmin/UsuaiosAlfabetico";
import UsuariosGuardados from "./SeccionesAdmin/UsuariosGuardados";
import UsuariosRecientes from "./SeccionesAdmin/UsuariosRecientes";
import VistaBusqueda from "./SeccionesAdmin/VistaBusqueda";
import ConfAdm from './SeccionesAdmin/VistasPerfiles/ConfAdm'
import IngresoDatos from './SeccionesUsuarios/IngresoDatos';
import EstadisticasU from './SeccionesUsuarios/EstadisticasU';
import Calendario from './SeccionesUsuarios/Calendario';



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
        <Route path='/calendario' element={<Calendario />} />
        <Route path='/ingresarDatos' element={<IngresoDatos />} />
        <Route path='/estadisticas' element={<EstadisticasU />} />
          
      </Routes> 
    </BrowserRouter>   
  )
  
}

export default App
