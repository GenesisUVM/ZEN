import React from 'react';
import './Usuarios.css'
import FooterUsuario from '../componentes/FooterUsuarios';
import NavBar from '../componentes/NavBar';
import FormDatos from '../componentes/FormDatos';
import BotonCrear from '../componentes/BotonCrear';
import DiaEjercicio from '../componentes/DiaEjercicio';



function IngresoDatos(){

    
    return(
        <div className='contDatos'>
        <NavBar />
        <DiaEjercicio />
        <FormDatos  />
        <BotonCrear />
        <FooterUsuario />
        </div>
    )
};


export default IngresoDatos