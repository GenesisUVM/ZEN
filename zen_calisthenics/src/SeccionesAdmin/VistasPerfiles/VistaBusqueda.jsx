import NavBar from "../../componentes/NavBar"
import FooterAdm from "../../componentes/FooterAdm"
import Busqueda from "../../componentes/Busqueda"
import TarjetaUsuarios from "../../componentes/TarjetaUsuarios"
import './UsuarioAdm.css'


function VistaBusqueda(){
    return(
        <>
        <NavBar />
        <Busqueda />
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

export default VistaBusqueda