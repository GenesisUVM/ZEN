import link1 from '../img/modo-nocturno.png'
import link2 from '../img/cursor.png'
import link3 from '../img/lapiz.png'
import link4 from '../img/basura.png'
import './ContConfig.css'


function ContConfig(){
    return(
        <div className="contConfiguracion">
            <a className='enlaceC'><img src={link1} alt="logo Modo nocturno" className='imgIcon'/></a><p>Modo Nocturno</p>
            <a className='enlaceC'><img src={link2} alt="logo Modo nocturno" className='imgIcon'/></a><p>Cambio Contraseña</p>
            <a className='enlaceC'><img src={link3} alt="logo Modo nocturno" className='imgIcon'/></a><p>Editar Usuarios</p>
            <a className='enlaceC'><img src={link4} alt="logo Modo nocturno" className='imgIcon'/></a><p>Eliminar Usuarios</p>
            <a href="" className='enlaceC'>Cerrar Sesion</a>
        </div>
    )
};

export default ContConfig