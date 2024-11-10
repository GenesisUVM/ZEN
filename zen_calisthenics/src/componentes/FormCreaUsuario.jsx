import './Forms.css'


function FormCreaUsuario(){

    return(
        <form method='post' className='formCrear'>
            <label className='label'>Ingrese Ususario<input type="text" name="usuario" className="input" /></label>
            <label className='label'>Ingrese Correo<input type="email" name="correo" className="input"/></label>
            <label className='label'>Ingrese Contraseña<input type="text" name="contrasena" className="input"/></label>
            <label className='label'>Ingrese Telefono<input type="number" name="telefono" className="input"/></label>
            <button className="botonIngresar">Registrar</button>
        </form>
    )
};

export default FormCreaUsuario