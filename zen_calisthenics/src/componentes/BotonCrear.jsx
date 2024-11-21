import React, { useState } from 'react';
import FormDatos from './FormDatos';
import './Botones.css'
import mas from '../img/mas.png'


function BotonCrear ()  {
    const [mostrarComponente, setMostrarComponente] = useState(false);

    const manejarClick = () => {
        setMostrarComponente(!mostrarComponente);
    };

    return (
        <div className='boton'>
            <button onClick={manejarClick} className='bCrear'>
                <img src={mas} className='icon' />
            </button>
            {mostrarComponente && <FormDatos />}
        </div>
    );
};

export default BotonCrear
