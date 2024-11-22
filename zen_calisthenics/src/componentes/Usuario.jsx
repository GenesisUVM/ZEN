import React from 'react';
import perfil from '../img/usuario.png'
import './Usuario.css'

function Usuario(){
    let nombre = 'Genesis Castillo' 
    return(
        <div className='contPerfil'>
        <img src={perfil} className='imgPerfil'alt='Foto de Perfil'/>
        <h2 className='namePerfil'>{nombre}</h2>
        </div>
    )
};

export default Usuario