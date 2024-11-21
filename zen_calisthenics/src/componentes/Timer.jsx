import React from 'react';
import { useState } from 'react';
import './Timer.css'


function Timer () {
 
    

    return (
        <div className='contTimer'>
            <input type="range" min={0} max={59} value={30} step={1} className='inputMin' required />
            <input type="range" min={0} max={59} value={30} step={1} className='inputSeg' required />
        </div>
    );
};


export default Timer