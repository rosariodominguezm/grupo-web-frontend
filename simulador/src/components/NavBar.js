import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import useCookieAuth from '../hooks/useCookieAuth';
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function NavBar() {
  // let [current_name, setCurrentId] = useState();
  //   useEffect(() => {
  //       const data = window.localStorage.getItem("current_name");
  //       if  ( data !==null) setCurrentId(JSON.parse(data));
  //   }, []);

  // function cerrar() {
  //   current_name = "Vacio";
  //   window.localStorage.setItem("current_name", JSON.stringify(current_name));
  // }

  const {currentUser, handleUserLogout} = useCookieAuth();

  const logout = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${SERVER_URL}/logOut/logout`)
      .then(() => console.log('cerramos sesión'))
      .catch(err => console.log(err));
      handleUserLogout();
    //handleTokenChange('', 'logout');
  };

  return(
    <>
    {/* <div className="navbar">
        <div>
          <a href="/">
            <img src={require("../imgs/logo_casa.png")} alt="Imagen"></img></a>
          <a href="./quienes-somos">Quienes somos</a>
          <a href="acerca-de">Acerca de</a>
          <a href="/reglas-negocio">Reglas de Negocio</a>

          <div className="dropdown">
            <a href="/simulador">Simular</a>
            <div className="dropdown-content">
              <a href="/simulador">Chocolate</a>

              <br></br>
            </div>
          </div>
        </div>
        <div>

          <a id="l1" href="/login">
            <button className="btn btn-primary btn-lg">Log In</button>
          </a>

          <a id="l1" href="/registrarse">
            <button className="btn btn-primary btn-lg">Registrarse</button>
          </a>

        </div>

        <div>
          <a href="/" className='user1'>
            <img src={require("../imgs/user12.png")} alt="Imagen" className='user1'></img></a>
            <a href="/">
          <button className="btn btn-primary btn-lg" onClick={logout}>Cerrar Sesion</button>
            </a>
        </div>

      </div> */}
      {
        (currentUser)?(
        <> 
        <div className="navbar">
        <div>
          <a href="/"> 
            <img src={require("../imgs/logo_casa.png")} alt="Imagen" ></img></a>
          <a href="./quienes-somos">Quienes somos</a>
          <a href="acerca-de">Acerca de</a>
          <a href="/reglas-negocio">Reglas de Negocio</a>

          <div className="dropdown">
            <a href="/simulador">Simular</a>
            <div className="dropdown-content">
              <a href="/simulador">Chocolate</a>

              <br></br>
            </div>
          </div>
        </div>

        <div>
          <a href="/" className='user1'>
            <img src={require("../imgs/user12.png")} alt="Imagen" className='user1'></img></a>
            <a href="/">
          <button className="btn btn-primary btn-lg" onClick={logout} >Cerrar Sesion</button>
            </a>
        </div>
      </div>
        </>
        ):(
          <>
          <div className="navbar">
        <div>
          <a href="/">
            <img src={require("../imgs/logo_casa.png")} alt="Imagen"></img></a>
          <a href="./quienes-somos">Quienes somos</a>
          <a href="acerca-de">Acerca de</a>
          <a href="/reglas-negocio">Reglas de Negocio</a>

          <div className="dropdown">
            <a href="/simulador">Simular</a>
            <div className="dropdown-content">
              <a href="/simulador">Chocolate</a>

              <br></br>
            </div>
          </div>
        </div>
        <div>

          <a id="l1" href="/login">
            <button className="btn btn-primary btn-lg">Log In</button>
          </a>

          <a id="l1" href="/registrarse">
            <button className="btn btn-primary btn-lg">Registrarse</button>
          </a>
          
        </div>
      </div>
          </>
        )
      }
    </>

      )
  }
export default NavBar;