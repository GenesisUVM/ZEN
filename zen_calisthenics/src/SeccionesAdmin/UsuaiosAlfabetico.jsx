import React from 'react';
import NavBar from "../componentes/NavBar"
import TarjetaUsuarios from "../componentes/TarjetaUsuarios"
import FooterAdm from "../componentes/FooterAdm"
import './UsuarioAdm.css'


function UsuariosAlfabetico(){
    return(
        <>
        <NavBar />
        <div className="contPerfiles">
            <TarjetaUsuarios />
            <TarjetaUsuarios />
            <TarjetaUsuarios />
            <TarjetaUsuarios />
            <TarjetaUsuarios />
            <TarjetaUsuarios />
            <TarjetaUsuarios />
            <TarjetaUsuarios />
        </div>
        <FooterAdm />
        </>
    )
};

export default UsuariosAlfabetico