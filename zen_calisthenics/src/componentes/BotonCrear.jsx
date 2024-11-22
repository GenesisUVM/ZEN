import React, { useState } from 'react';
import FormDatos from './FormDatos';
import './Botones.css'
import mas from '../img/mas.png'


function BotonCrear ()  {

    const [componentes, setComponentes] = useState([]);
    const [contador, setContador] = useState(0);

    const manejarClick = () => {
        // Incrementa el contador y agrega un nuevo componente a la lista
        setContador(prevContador => prevContador + 1);
        setComponentes(prevComponentes => [...prevComponentes, contador + 1]);
    };
  
    return (
        <>
    
        {componentes.map((id) => (<FormDatos key={id} id={id} />))}
        <div className='boton'>
            <button onClick={manejarClick} className='bCrear'>
                <img src={mas} className='iconC' />
            </button>
        </div>
        
            
        </>
    );
};

export default BotonCrear
