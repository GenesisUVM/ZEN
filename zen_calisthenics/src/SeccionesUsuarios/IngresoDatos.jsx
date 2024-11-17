import React from 'react';
import './Usuarios.css'
import FooterUsuario from '../componentes/FooterUsuarios';
import NavBar from '../componentes/NavBar';


function IngresoDatos(){
    return(
        <div className='contDatos'>
        <NavBar />

        <FooterUsuario />
        </div>
    )
};


export default IngresoDatos