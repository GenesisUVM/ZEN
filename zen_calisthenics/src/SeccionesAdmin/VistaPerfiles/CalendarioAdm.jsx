import React from 'react';
import Usuario from '../../componentes/Usuario';
import NavBar from '../../componentes/NavBar';
import FooterAdmPerfiles from '../../componentes/FooterAdmPerfiles';
import CalendarioCompAd from '../../componentes/CalendarioCompAd';


function CalendarioAdm(){
    return(
        <>
        <NavBar />
        <Usuario />
        <CalendarioCompAd />
        <FooterAdmPerfiles />
        </>
    )
};

export default CalendarioAdm