import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { SERVER_URL } from '../App';
import jwtDecode from 'jwt-decode';
import useTokenAuth from '../hooks/useTokenAuth';
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// Codigo basado en la capsula 11 de frontend del curso
function DeleteSimulations() {
  const navigate = useNavigate()
  const { handleTokenChange } = useTokenAuth();

  const deleteSimulations = (e) => {
    e.preventDefault();
    let simulations = jwtDecode(localStorage.getItem('simulations'))['simulations'];
    console.log(simulations);
    simulations.map((item) => {
      const response = axios.delete(`${SERVER_URL}/delete/${item.id}`,
                  { headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('simulations'))}`} });
      }
      
    )
    navigate('/')
  };
  
  return ( 
    <>
        <h2>Borrar partidas</h2>
        <p>Como este es un procedimiento importante (y sin vuelta atrás), 
              debes volver a iniciar sesión antes de borrar las partidas</p>
          <div class="button_enviar">
            <button className='result1' link={'/iniciar-sesion'}> Iniciar Sesion</button>
          </div>
           <div class="button_enviar">
            <button className='result1' onClick={deleteSimulations}> Borrar Historial de Simulaciones </button>
        </div>
        {/* <BlueButton title={'Iniciar sesión'} link={'/iniciar-sesion'}></BlueButton>
        <BlueButton title={'Eliminar'} onClick={deleteMatches}></BlueButton> */}
    </>
  );
}

export default DeleteMatches;