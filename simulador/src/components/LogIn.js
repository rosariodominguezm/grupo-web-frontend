import axios from "axios";
import React from  "react";
import { useRef } from "react";
import { useState , useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import useCookieAuth from '../hooks/useCookieAuth';
import { useLoginFormValidator } from "../hooks/useLoginFormValidator";
// import clsx from "clsx";
import useTokenAuth from '../hooks/useTokenAuth';
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function LogIn() {

    // // const mail = useRef();
    // // const psw = useRef();
    // // const [current_id, setCurrentId] = useState(100);
    // // const {handleUserLogin} = useCookieAuth();

    // // useEffect(() => {
    // //     const data = window.localStorage.getItem("current_id");
    // //     if  ( data !==null) setCurrentId(JSON.parse(data));
    // // }, []);

    // // useEffect(() => {
    // //     window.localStorage.setItem("current_id", JSON.stringify(current_id));
    // // }, [current_id]);


    // // const logIn = async () => {


    // //     const url = `${SERVER_URL}/auth/login`;
    // //     const body = {
    // //         mail: mail.current.value,
    // //         password: psw.current.value,
    // //       };
    // //     await axios
    // //       .post(url, body)
    // //         .then((response) => {
    // //             setCurrentId(response.data);
    // //         alert(`Login correcto!`);
    // //         handleUserLogin();
    // //         window.location.href = "/simulador"

    // //         if (!response.data.error) {
    // //             alert(`Login correcto!`)
    // //             handleUserLogin();
    // //             window.location.href = "/simulador"

    // //         } else {
    // //             alert(`Login incorrecto!`)
    // //             console.log(response.data.error);  
    // //         }

    // //       })
    // //         .catch((error) =>
    // //             alert(`[${error.response.status}] ${error.response.data}`)
    // //         );
    // // };

    const navigate = useNavigate();
    const { handleUserLogin } = useCookieAuth();
    const { handleTokenChange } = useTokenAuth();
    //const { handleTokenChange } = useTokenAuth();

    const [form, setForm] = useState({
        mail: "",
        password: "",
      });

    const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

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

    const login = async (e) => {
        e.preventDefault();

        if (!validateForm({ form, errors })) {return}

        try 
            {const response = await axios.post(`${SERVER_URL}/login`, {
                    mail: form.mail,
                    password: form.password,
                });
                //handleTokenChange(response.data.access_token);
                handleTokenChange(response.data['token'], 'login');
                handleUserLogin();
                navigate(-1); // A la ultima pagina que estuvimos
                alert("Usuario ingresado correctamente");
            } catch (error) {
                alert(`[${error.response.status}] ${error.response.data}`)
            }
    };
   
    return (
        <>
    <div className="row" id="login1">
        <div className = "column" id="contenedor">

            <div className="log_in">
                    <img id="log_foto" src={require("../imgs/user.png")} className="0" alt="Imagen"></img>
                <br></br>
                <form className="registro" id="login">
                    <label className="label_login"> Email: </label>   
                    <input type="text" id="mail_l" name ="mail" className="input" placeholder="chuerta@uc.cl" value={form.mail} onChange={onUpdateField} onBlur={onBlurField}/>
                    <div> 
                    {errors.mail.dirty && errors.mail.error ? (
                        <p id="error" >{errors.mail.message}</p>
                        ) : <p id="error" >{errors.mail.message}</p>}</div>
                  
                    <label className="label_login">Contraseña: </label>
                    <input type="password" id="contrasena_l" name="password" className= "input" placeholder="******" value={form.password} onChange={onUpdateField} onBlur={onBlurField}/>
                    {errors.password.dirty && errors.password.error ? (
                    <p id="error">
                        {errors.password.message}
                    </p>
                        ) : null}
         
                </form>
                        <br></br>
                        <label id="check">
                            <input type="checkbox" id="check" name="remember"/> Remember me
                        </label>
            <br></br>
            <button id="boton_login" type="submit" onClick={login}> Iniciar Sesión</button>
            </div>
        </div>

        {/* <div className="column">
        </div> */}


                </div>
            </>
    )
}


export default LogIn;