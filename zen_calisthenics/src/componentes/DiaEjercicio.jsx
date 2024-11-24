import React, { useState } from 'react';
import './Forms.css'



function DiaEjercicio(){
    
    const options = [
        { value: 'Piernas', label: 'Piernas' },
        { value: 'Empuje', label: 'Empuje' },
        { value: 'Jalon', label: 'Jalon' },
        { value: 'Aerobicos', label: 'Aerobicos' },
        { value: 'Potencia', label: 'Potencia' },
        { value: 'Estiramiento', label: 'Estiramiento' },
      ];

      const [selectedOption, setSelectedOption] = useState('');

        const handleChange = (event) => {
            setSelectedOption(event.target.value);
        };
  
   
    return(
        <form className='qEjercicio'>
            <label htmlFor="ejercicio">Selecciona que entrenamiento te corresponde hoy</label>
            <select name='ejercicio'  className='inputT' value={selectedOption} onChange={handleChange} >
            
            <option value="">--Selecciona una opción--</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option>
            ))}
                        
            </select>
            {selectedOption}
            
        </form>
    )
};


export default DiaEjercicio;
