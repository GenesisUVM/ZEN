import React from 'react';
import './Forms.css'
import Timer from './Timer';
import BotonEnviar from './BotonEnviar';



function FormDatos(array){

    const selectElement = document.getElementById('diasEjercicios');

    for (let i = 0; i < array.length; i++) {
        let option = document.createElement('option'); // Crear un nuevo elemento <option>
        option.value = `valor${i}`; // Asignar un valor a la opción
        option.textContent = array[i]; // Asignar el texto visible de la opción
        selectElement.appendChild(option); // Agregar la opción al <select>
        selectElement.addClassName('inputT')
    }
    

    
    return(
        <>
        <form method='post' className='formCrear'>
            <label for='ejercicio' className='labelT'>Selecciona el ejercicio</label>
            <select className='diasEjercicios' name='ejercicio'>
                
            </select>
            <label htmlFor="reps" className='labelT'>Ingresa numero de repeticiones</label>
            <input type='number' name='reps' placeholder='Ingresa numero de repeticiones' required className='inputT' />
            <label htmlFor="tiempo" className='labelT'>Ingresa numero de repeticiones</label>
            <Timer />
            <label htmlFor="peso" className='labelT'>Ingresa numero de repeticiones</label>
            <input type='text' name='peso' placeholder='Ingresa el peso o banda que usaste' className='inputT' required />
            <label htmlFor="coment" className='labelT'>Ingresa un comentario sobre el ejercicio</label>
            <input type='text' name='coment' placeholder='Ingresa comentario' className='inputT' required />
        </form>
        <BotonEnviar />
        </>
    )
};

export default FormDatos