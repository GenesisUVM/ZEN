import NavBar from "../componentes/NavBar"
import FormCreaUsuario from "../componentes/FormCreaUsuario"
import Footer from "../componentes/Footer"

function CreacionUsuario(){

    return(
    <div className="inicioSesiones">
        <NavBar />
        <FormCreaUsuario />
        <Footer />
    </div>
    )
};

export default CreacionUsuario