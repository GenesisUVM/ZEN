import React from 'react';
import './UsuarioAdm.css'
import ContConfig from '../componentes/ContConfig'
import FooterAdm from '../componentes/FooterAdm'
import NavBar from '../componentes/NavBar'


function ConfAdm(){
    return(
        <div className='configAdmin'>
            <NavBar />
            <ContConfig />
            <FooterAdm />
        </div>
    )
};

export default ConfAdm