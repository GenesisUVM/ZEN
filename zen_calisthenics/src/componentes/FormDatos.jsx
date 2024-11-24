import React from 'react';
import './Forms.css'
import Timer from './Timer';
import BotonEnviar from './BotonEnviar';
import  { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DiaEjercicio from './DiaEjercicio';


function FormDatos(){

    const location = useLocation();
    const { selectedDate } = location.state || { selectedDate: new Date() };
    const [data, setData] = useState({}); // Para almacenar datos por fecha
  
    const handleSaveData = (event) => {
      event.preventDefault();
      const inputData = event.target.elements.data.value;
      setData((prevData) => ({
        ...prevData,
        [selectedDate.toDateString()]: inputData, // Guarda los datos con la fecha como clave
      }));
      event.target.reset(); // Limpia el formulario
    };

    //Funcionalidad del Select dinamico
    // OBjeto con los options de ambos select

    const options = [
        { value: 'Patada baja de glueo'},{ value: 'EmpujPeso Muertoe' },{ value: 'Bulgaras' },
        { value: 'Sentadillas 3s' },{ value: 'Paralelas' },{ value: 'Flexiones Diamante' },{ value: 'Extensiones Triceps'},
        { value: 'Flexiones Picas'},{ value: 'Paradas de mano'},{ value: 'Dominadas'},{ value: 'Curl Bicep'},
        { value: 'Remo'},{ value: 'Burpees'},{ value: 'Escaladoras'},{ value: 'Sentadillas con salto'},
        { value: 'Cuerda'},{ value: 'Saltos'},{ value: 'MAriposa'},
        { value: 'FLexiones ventrales'},{ value: 'Balistica'},{ value: 'Aperturas'},
      ];

      const [selectedOption, setSelectedOption] = useState('');

        const handleChange = (event) => {
            setSelectedOption(event.target.value);
        };

      
    
    return(
        <>
        <form method='post' onSubmit={handleSaveData} className='formCrear'>
            <h2>{handleSaveData}</h2>
            <label htmlFor='ejercicio' className='labelT'>Selecciona el ejercicio</label>
            <select className='diasEjercicios' value={selectedOption} onChange={handleChange} name='ejercicio'>
            <option value="">--Selecciona una opción--</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                ))}
                
            </select>
            {selectedOption}

            <label htmlFor="reps" className='labelT'>Ingresa numero de repeticiones</label>
            <input type='number' name='reps' placeholder='Ingresa numero de repeticiones' required className='inputT' />
            <label htmlFor="tiempo" className='labelT'>Ingresa tiempo de desacanso</label>
            <div className='reloj'>
                <Timer tipo="minutos"/>
                <Timer tipo="segundos"/>
            </div>
            <label htmlFor="peso" className='labelT'>Ingresa el peso usado</label>
            <input type='text' name='peso' placeholder='Ingresa el peso o banda que usaste' className='inputT' required />
            <label htmlFor="coment" className='labelT'>Ingresa un comentario sobre el ejercicio</label>
            <input type='text' name='coment' placeholder='Ingresa comentario' className='inputT' required />
        </form>
        <BotonEnviar />

        </>
    )
};

export default FormDatos