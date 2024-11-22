import React from 'react';
import foto from '../img/usuario.png'
import'./TarjetaUsuarios.css'
import Usuario from './Usuario';



function TarjetaUsuarios(){
    const mostrarUsuario =()=>{
    <Usuario />
    }

    return(
        <div className="contUsuario" onClick={mostrarUsuario}>
            <img src={foto} alt="Foto Perfil Usuario" className='fotoPerfil'/>
            <p className='nameUsuario'>Nombre Usuario</p>
        </div>
    )
};

export default TarjetaUsuarios