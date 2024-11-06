import './Forms.css'

function FormAdm(){

    return(
        <form method='post' className="formAdm" >
            <label className='label'>Ingrese Ususario<input type="text" name="usuario" className="input" /></label>
            <label className='label'>Ingrese Contraseña<input type="text" name="contrasena" className="input"/></label>
            <button className="botonIngresar">Ingresar</button>
        </form>
    )
};

export default FormAdm