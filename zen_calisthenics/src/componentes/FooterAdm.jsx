import { Link} from 'react-router-dom';
import enlace1 from '../img/busqueda.png'
import enlace2 from '../img/alfabetico.png'
import enlace3 from '../img/marcador.png'
import enlace4 from '../img/recientes.png'
import './Footer.css'


function FooterAdm(){
    return(
        <footer className="footerAdmi">
            <Link to={'/'} ><img src={enlace4} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
            <Link to={'/busqueda'} ><img src={enlace1} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
            <Link to={'/alfabetico'} ><img src={enlace2} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
            <Link to={'/guardados'} ><img src={enlace3} alt='Enlaces Vistas Perfiles Usuarios' className='linkIcons' /></Link>
            
        </footer>
    )
};

export default FooterAdm