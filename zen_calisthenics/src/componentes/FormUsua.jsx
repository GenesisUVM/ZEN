import './Forms.css'


function FormUsuario(){
    return(
        <form method='post' className='formUsu'>
            <label className='label'>Ingrese Ususario<input type="text" name="usuario" className="input" /></label>
            <label className='label'>Ingrese Contraseña<input type="text" name="contrasena" className="input"/></label>
            <button className="botonIngresar">Ingresar</button>
            
        </form>
    )
};

export default FormUsuario