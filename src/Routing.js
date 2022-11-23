import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './components/Index';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import LogIn from './components/LogIn';
import Registarse from './components/Registrarse';
import QuienesSomos from './components/QuienesSomos';
import AcercaDe from './components/AcercaDe';
import Simulador from './components/Simulador';
import ReglasNegocio from './components/ReglasNegocio';
import CookieAuthProvider from './contexts/cookieAuth';
import NavBar from './components/NavBar';
import TokenAuthProvider from './contexts/tokenAuth';


function Routing(){
    return(
        <BrowserRouter>
            <CookieAuthProvider>
                <TokenAuthProvider>
                    <NavBar/>
                    <Routes>
                        <Route path={'/'} element={ <Index/>}/>
                        <Route path={'api/preguntas-frecuentes'} element={<PreguntasFrecuentes />} />
                        <Route path={'api/login'} element={<LogIn />} />
                        <Route path={'api/registrarse'} element={<Registarse />} />
                        <Route path={'api/reglas-negocio'} element={<ReglasNegocio/>}/>
                        <Route path={'api/quienes-somos'} element={<QuienesSomos/>}/>
                        <Route path={'api/acerca-de'} element={<AcercaDe/>}/>
                        <Route path={'api/simulador'} element={<Simulador/>}/>
                    </Routes>
                </TokenAuthProvider>
            </CookieAuthProvider>
        </BrowserRouter>
    )
}

export default Routing;