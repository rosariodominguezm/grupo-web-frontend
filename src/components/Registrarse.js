import React from 'react';
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import useCookieAuth from '../hooks/useCookieAuth';
import { useRegisterFormValidator } from "../hooks/useRegisterFormValidator";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;


function Registrarse() {

    // const nombre = useRef();
    // const nombreusuario = useRef();
    // const mail = useRef();
    // const contrasena= useRef();
    // const contrasena2 = useRef();
    // const origen = useRef();


    const navigate = useNavigate();
    const {handleUserLogin} = useCookieAuth();

    const [form, setForm] = useState({
        mail: "",
        password1: "",
        password2: "",
        nombre: "",
        username: "",
        origen: "",
    });

   const { errors, validateForm, onBlurField } = useRegisterFormValidator(form);

    const onUpdateField = e => {
          const field = e.target.name;
          const nextFormState = {
          ...form,
          [field]: e.target.value,
          };
          setForm(nextFormState);
          if (errors[field].dirty)
          validateForm({
              form: nextFormState,
              errors,
              field,
          });
      };

    const registrarse = async (e) => {
      e.preventDefault();

      const url = `${SERVER_URL}/registro`;
      const body = {
          mail: form.mail,
          password1: form.password1,
          password2: form.password2,
          nombre: form.nombre,
          username: form.username,
          origen: form.origen,

          };
 
        await axios.post(url, body)
          .then((response) => {

            // setCurrentId(response.data);
            alert(`Registro correcto!`);
            //handleUserLogin();
            navigate("/login");

          })
          .catch((error) =>
            alert(`[${error.response.status}] ${error.response.data}`)
          );
    };

    return (
        <>
        <div className="row">
        <div className = "column" id="registro_columna">
                    <img id="registro_foto" src={require("../imgs/registro.png")} alt="Imagen Registrarse"/>
        </div>

        <div className="column" id="contenedor_registro">
            <h1 id="registro">Regístrate Aquí</h1>
            <br></br>
            
            <form className="registro" id="registro">
                <label className="label_registro" id="registro">Nombre: </label>
                <input type="text" id="nombre" name= "nombre" className="input" placeholder="Carlos Huerta" value={form.nombre} onChange={onUpdateField} onBlur={onBlurField}/>
                {errors.nombre.dirty && errors.nombre.error ? (
                        <p id="error1" >{errors.nombre.message}</p>
                        ) : <p id="error1" >{errors.nombre.message}</p>}
                <label className="label_registro">Username: </label>
                <input type="text" id="nombre_usuario" name= "username"  className="input" placeholder="CHuerta123" value={form.username}  onChange={onUpdateField} onBlur={onBlurField}/>
                {errors.username.dirty && errors.username.error ? (
                        <p id="error1" >{errors.username.message}</p>
                        ) : <p id="error1" >{errors.username.message}</p>}
                <label className="label_registro">Email:   </label>
                <input type="text" id="mail" name= "mail"  className="input" placeholder="chuerta@uc.cl" value={form.mail} onChange={onUpdateField} onBlur={onBlurField} />
                {errors.mail.dirty && errors.mail.error ? (
                        <p id="error1" >{errors.mail.message}</p>
                        ) : <p id="error1" >{errors.mail.message}</p>}
              
              <label className="label_registro">Origen:</label>
              <select id="origen"  name= "origen" className='input' value={form.origen} onChange={onUpdateField} onBlur={onBlurField} >
                    <option value="0" disabled selected>Seleccione una opción</option>
                    <option value="Chile" selected>Chile</option>
                    <option value="Perú">Perú</option>
                    <option value="Argentina">Argentina</option>
                    {errors.origen.dirty && errors.origen.error ? (
                        <p id="error1" >{errors.origen.message}</p>
                        ) : <p id="error1" >{errors.origen.message}</p>}
                </select>
              
              <br></br>

                <label className="label_registro">Contraseña: </label>
                <input type="password" id="contrasena" name='password1' className="input" value={form.password1} onChange={onUpdateField} onBlur={onBlurField} required/>
                {errors.password1.dirty && errors.password1.error ? (
                        <p id="error1" >{errors.password1.message}</p>
                        ) : <p id="error1" >{errors.password1.message}</p>}
                <label className="label_registro">Repita su Contraseña: </label>
                <input type="password" id="contrasena2" name='password2' className="input" value={form.password2} onChange={onUpdateField} onBlur={onBlurField} required/>
                {errors.password2.dirty && errors.password2.error ? (
                        <p id="error1" >{errors.password2.message}</p>
                        ) : <p id="error1" >{errors.password2.message}</p>}
            </form>
            <br></br>

            <button className="btn btn-primary btn-lg" id="boton_registro" onClick={registrarse}>Registrarse</button> 

        </div>

        <div className="column">

        </div>

    </div>   
        </>
    )
}


export default Registrarse;