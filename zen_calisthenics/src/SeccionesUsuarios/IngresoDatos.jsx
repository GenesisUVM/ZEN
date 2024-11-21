import React from 'react';
import './Usuarios.css'
import FooterUsuario from '../componentes/FooterUsuarios';
import NavBar from '../componentes/NavBar';
import FormDatos from '../componentes/FormDatos';
import BotonCrear from '../componentes/BotonCrear';



function IngresoDatos(){

    let ejercicios = ['Piernas', 'Empuje', 'Jalon','Aerobicos', 'Potencia','Estiramiento'];

    return(
        <div className='contDatos'>
        <NavBar />
        <FormDatos array={ejercicios} />
        <BotonCrear />
        <FooterUsuario />
        </div>
    )
};


export default IngresoDatos