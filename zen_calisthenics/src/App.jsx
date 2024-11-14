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



function App() {

  return (
    
  
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<UsuariosRecientes />} /> 
        <Route path='/busqueda' element={<VistaBusqueda />} /> 
        <Route path='/alfabetico' element={<UsuariosAlfabetico />} />
        <Route path='/guardados' element={<UsuariosGuardados />} />
        <Route path="/sesiones" element={<InicioAdmin />} />
        <Route path="/configuracion" element={<ConfAdm />} />
        <Route path='/administrador' element={<InicioAdmin />} />
        <Route path='/usuarios' element={<InicioUsuarios />} />
        <Route path='/creaUsuario' element={<CreacionUsuario />} /> 

        
          
      </Routes> 
    </BrowserRouter>   
  )
  
}

export default App
