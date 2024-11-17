import React from 'react';
import { Link} from 'react-router-dom';
import enlace1 from '../img/hogar.png'
import enlace2 from '../img/lapiz.png'
import enlace3 from '../img/tendencia.png'
import './Footer.css'


function FooterUsuario(){
    return(
        <footer className="footerAdmi">
            <Link to={'/calendario'} ><img src={enlace1} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
            <Link to={'/ingresarDatos'} ><img src={enlace2} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
            <Link to={'/estadisticas'} ><img src={enlace3} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
            
        </footer>
    )
};

export default FooterUsuario