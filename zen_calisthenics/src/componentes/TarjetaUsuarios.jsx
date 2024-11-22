import React from 'react';
import foto from '../img/usuario.png'
import'./TarjetaUsuarios.css'
import { useNavigate } from 'react-router-dom';



function TarjetaUsuarios(){

    const history = useNavigate();

    const manejarClick = () => {
        
        history('/perfiles');
    };
    

    return(
        <div className="contUsuario" onClick={manejarClick}>
            <img src={foto} alt="Foto Perfil Usuario" className='fotoPerfil'/>
            <p className='nameUsuario'>Nombre Usuario</p>
        </div>
    )
};

export default TarjetaUsuarios