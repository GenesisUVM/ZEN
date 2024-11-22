import React from 'react';
import { Link} from 'react-router-dom';
import enlace from '../img/calendario.png'
import enlace1 from '../img/deporte.png'
import './Footer.css'

function FooterAdmPerfiles(){
    return(
        <footer className='footerAdmPerf'>
            <Link to={'/perfiles'}><img src={enlace} alt='Enlaces Vistas Perfiles' className='linkIcons' /></Link>
            <Link to={'/estadisticasAdm'}><img src={enlace1} alt='Enlaces Vistas Perfiles' className='linkIcons' /></Link>
        </footer>
    )
};

export default FooterAdmPerfiles