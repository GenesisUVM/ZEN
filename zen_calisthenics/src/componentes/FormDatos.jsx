import React from 'react';
import './Forms.css'


function FormDatos(){
    return(
        <form method='post' className='formCrear'>
            <select>
                <option value={option1} className='select'>{option1}</option>
                <option value={option2} className='select'>{option2}</option>
                <option value={option3} className='select'>{option3}</option>
                <option value={option4} className='select'>{option4}</option>
                <option value={option5} className='select'>{option5}</option>
                <option value={option6} className='select'>{option6}</option>
            </select>
        </form>
    )
};

export default FormDatos