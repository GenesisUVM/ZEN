import './NavBar.css'
import logo from '../img/usuario.png'
import conf from '../img/configuracion.png'

function NavBar(){

    return(
        <nav className="navBar">
            <img src={logo} className='logo' alt='logo'></img>
            <h2 className='nombre'>ZEN Calisthenics</h2>
            <img src={conf} className='icon' alt='icono configuracion'></img>
        </nav>
    )
};

export default NavBar