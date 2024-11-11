import foto from '../img/usuario.png'
import'./TarjetaUsuarios.css'


function TarjetaUsuarios(){
    return(
        <div className="contUsuario">
            <img src={foto} alt="Foto Perfil Usuario" className='fotoPerfil'/>
            <p className='nameUsuario'>Nombre Usuario</p>
        </div>
    )
};

export default TarjetaUsuarios