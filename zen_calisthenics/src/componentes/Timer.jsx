import React from 'react';
import { useState } from 'react';
import './Timer.css'


function Timer ({ tipo }) {
 
    const [valor, setValor] = useState(0);
    const maxValor = tipo === 'minutos' ? 59 : 59; // Ambos tienen un rango de 0 a 59

    const manejarCambio = (nuevoValor) => {
        setValor(nuevoValor);
    };

    const rangoVisible = (valor) => {
        const inicio = Math.max(0, valor - 1);
        const fin = Math.min(maxValor, valor + 1);
        return Array.from({ length: fin - inicio + 1 }, (_, i) => inicio + i);
    };

    return (
        <div className="contTimer">
            <div className="numerosVerticales">
                {rangoVisible(valor).map((num) => (
                    <div key={num} className={`numero ${num === valor ? 'activo' : ''}`} onClick={() => manejarCambio(num)}>
                        {num}
                    </div>
                ))}
            </div>
            <div className="tipo-selector">{tipo}</div> {/* Muestra el tipo (minutos o segundos) */}
        </div>
    );
};


export default Timer