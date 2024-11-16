import { Link} from 'react-router-dom';
import React from 'react';
import './Forms.css'

function FormAdm(){

    return(
        <form method='post' className="formAdm" >
            <label className='label'>Ingrese Ususario<input type="text" name="usuario" className="input" /></label>
            <label className='label'>Ingrese Contraseña<input type="text" name="contrasena" className="input"/></label>
            <Link to={'/recientes'} className="botonIngresar">Ingresar</Link>
        </form>
    )
};

export default FormAdm