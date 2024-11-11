import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import InicioAdmin from './InicioSesiones/InicioAdmin'
import InicioUsuarios from "./InicioSesiones/InicioUsuarios";
import CreacionUsuario from "./InicioSesiones/CreacionUsuario";



function App() {

  return (
    <BrowserRouter>
    <Routes>
          <Route path='/' element={<InicioAdmin />} />
          <Route path='/usuarios' element={<InicioUsuarios />} />
          <Route path='/creaUsuario' element={<CreacionUsuario />} />
      </Routes> 
      </BrowserRouter>   
  )
}

export default App
