import NavBar from "../../componentes/NavBar"
import FooterAdm from "../../componentes/FooterAdm"
import Busqueda from "../../componentes/Busqueda"
import TarjetaUsuarios from "../../componentes/TarjetaUsuarios"


function VistaBusqueda(){
    return(
        <>
        <NavBar />
        <Busqueda />
        <TarjetaUsuarios />
        <FooterAdm />
        </>
    )
};

export default VistaBusqueda