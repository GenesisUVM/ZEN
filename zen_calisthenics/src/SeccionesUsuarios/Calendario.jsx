import React from 'react';
import './Usuarios.css'
import FooterUsuario from '../componentes/FooterUsuarios';
import NavBar from '../componentes/NavBar';
import CalendarioComp from '../componentes/CalendarioComp';


function Calendario(){
    return(
        <>
        <NavBar />
        <CalendarioComp />
        <FooterUsuario />
        </>
    )
};

export default Calendario