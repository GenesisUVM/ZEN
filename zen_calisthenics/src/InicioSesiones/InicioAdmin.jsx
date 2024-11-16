import React from 'react';
import NavBar from "../componentes/NavBar"
import FormAdm from "../componentes/FormAdm"
import Footer from "../componentes/Footer"
import './InicioSesiones.css'

function InicioAdmin(){

    return(
        <div className="inicioSesiones">
          <NavBar />
          <FormAdm />
          <div className="contLink">
              <a href="#" className="linkContraseña">Recuperar contraseña</a>
          </div>
          <Footer />
        </div>
    )
};

export default InicioAdmin