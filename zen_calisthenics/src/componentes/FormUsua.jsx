import React from 'react';
import { Link} from 'react-router-dom';
import './Forms.css'


function FormUsuario(){
    return(
        <form method='post' className='formUsu'>
            <label className='label'>Ingrese Ususario<input type="text" name="usuario" className="input" /></label>
            <label className='label'>Ingrese Contraseña<input type="text" name="contrasena" className="input"/></label>
            <Link to={'/calendario'} className="botonIngresar">Ingresar</Link>
            
        </form>
    )
};

export default FormUsuario