import NavBar from "../../componentes/NavBar"
import FooterAdm from "../../componentes/FooterAdm"
import TarjetaUsuarios from "../../componentes/TarjetaUsuarios"
import './UsuarioAdm.css'


function UsuariosGuardados(){
    return(
        <>
        < NavBar />
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

export default UsuariosGuardados
