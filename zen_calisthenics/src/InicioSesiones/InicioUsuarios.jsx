import { Link} from 'react-router-dom';
import NavBar from "../componentes/NavBar"
import Footer from "../componentes/Footer"
import FormUsuario from "../componentes/FormUsua"
import './InicioSesiones.css'

function InicioUsuarios(){

    return(
        <div className="inicioSesiones">
          <NavBar />
          <FormUsuario />
          <div className='contLink'>
            <a href="#" className="linkContraseña">Recuperar Contraseña</a>
            <Link to={'/creaUsuario'} className="linkContraseña">Crear Usuario Nuevo</Link>
          </div>
          <Footer />
        </div>
    )
};

export default InicioUsuarios