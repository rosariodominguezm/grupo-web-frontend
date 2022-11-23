import Tile from './Tile';
import Tabla from './Tabla';
import React, {useRef, useEffect }  from "react";
import { useState }  from "react";
import axios from "axios";
import Popup from './Popup';
import { renderMatches } from 'react-router-dom';
import useCookieAuth from '../hooks/useCookieAuth';
import chocolate from "../imgs/chocolate-bar.png";
import cacao from "../imgs/cocoa.png";
import cacao_seco from "../imgs/cacao.png";
import cacao_tostado from "../imgs/seco.png";
import cacao_triturado from "../imgs/triturado.png";
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Simulador(){

    const secar = useRef();
    const tostar = useRef();
    const triturar = useRef();
    const prensar = useRef();
    const cantidad = useRef();
    const tile = useRef();
    const [id, setId] = useState(0);
    const urls = [chocolate, cacao, cacao_seco, cacao_tostado, cacao_triturado];
 
    // let current_id = 0;
    const [current_id, setCurrentId] = useState("Vacio");
    const {currentUser} = useCookieAuth();


    //Recupero Cual es el current_id
    // useEffect(() => {
    //     //const data = window.localStorage.getItem("current_id");
    //     const data = currentUser;
    //     if  ( data !==null) setCurrentId(JSON.parse(data));
    // }, []);

    //-------//
    // POST, guardar simulador en base de datos y obtener producto creado
    //-------//
    const simulador = async () => {
        const url = `${SERVER_URL}/simulador`;
        const tiles = document.getElementsByClassName("Tile");
        

        const body = {
            secar: secar.current.value,
            tostar: tostar.current.value,
            triturar: triturar.current.value,
            prensar: prensar.current.value,
            cantidad: cantidad.current.value,
            //id: 1,
        };
        await axios
        .post(url, body)
        .then((response) => {
            // alert(` correcto!`);
            tiles[0].innerHTML= response.data["product"]

            if (response.data["product"] === "chocolate"){
                setId(0);
            } else if (response.data["product"] === "cacao"){
                setId(1);} else if (response.data["product"] === "cacao seco"){
                    setId(2);} else if (response.data["product"] === "cacao tostado"){
                        setId(3);} else if (response.data["product"] === "cacao triturado"){
                            setId(4);}
            return 0
            
        })
        .catch((error) =>
            alert(`[${error.response.status}] ${error.response.data}`)
        );
    };

    //-------//
    // GET
    //-------//

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const url = `${SERVER_URL}/simulador/historial`;
            const data = await axios.get(url);
            setData(data.data);
            setIsLoading(false);
        };
        fetchData();
    }, [setData]);

    function recargar() {
        const fetchData = async () => {
            setIsLoading(true);
            const url = `${SERVER_URL}/simulador/historial`;
            const data = await axios.get(url);
            setData(data.data);
            setIsLoading(false);
        };
        fetchData();

    }

    // Para el tutorial
    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState(0);

    function togglePopup ()  {
        setIsOpen(!isOpen);
    }

    function nextPage ()  {
        if (page <= 4) {
            setPage(page + 1);
        }
    }

    function prevPage ()  {
        if (page > 0) setPage(page-1);
    }

    function showcontent(page){
        if (page==0){
            return (
                <div className='popup'>
                <h2>Cómo usar el simulador</h2>
                <br></br>
                <p> A continuación se muestra el paso a paso para usar el simulador. Si ya sabes usarlo puedes cerrar el tutorial. Si no presiona siguiente!</p>
            </div>
            )
        }
        if (page==1){
            return (
                <div className='popup'>
                <h2>Cómo usar el simulador</h2>
                <br></br>
                <p> 1. Ingresar la cantidad de cacao que se desea procesar. Cada unidad representa un fruto de cacao adicional. </p>
                <div id="contenedor_simulacion1">
                    <br></br>
                    <div className="label_login">
                        <label >Cantidad de cacao a utilizar <input type="number" id='cant_cacao'></input></label>
                    </div>
                </div>
               
            </div>
            
            )
        }
        if (page==2){
            return (
                <div className='popup'>
                <h2>Cómo usar el simulador</h2>
                <br></br>
                <p> 2. Leer atentamente la receta que está a la derecha. Con esta receta podrás generar los productos, para que la tengas en cuenta.</p>
                <div id="contenedor_receta1">
                        <h3> Cadena productiva del chocolate </h3>
                        <p>1. Se SECAN las habas de cacao para que se les vaya la humedad, disminuir amargor y aprovechar el aroma. </p>
                        <p>2. Se TUESTAN las habas de cacao para mejorar el aroma y poder triturarlas. </p>
                        <p>3. Se TRITURAN las habas de cacao en el proceso de molturación para formar licor de cacao. </p>
                        <p>4. Se PRENSAN las habas de cacao para obtener manteca de cacao y torta de cacao, las cuales logran formar el CHOCOLATE!. </p>
                    </div>    
            </div>
            )
        }
        if (page==3){
            return (
                <div className='popup'>
                <h2>Cómo usar el simulador</h2>
                <br></br>
                <p> 3. Seleccionar con los botones qué procesos aplicarle a la cantidad de cacao escogida. Si quedan oscuros están seleccionados. Puedes deseleccionar presionando nuevamente. Pruébalo! </p>
                <div className="grid_container1">
                    <button className='simular1' onClick={e => ChangeButtonClass(e.target)} value='false' > Secar </button>
                    <button className='simular1' onClick={e => ChangeButtonClass(e.target)} value='false' > Tostar </button>
                    <button className='simular1' onClick={e => ChangeButtonClass(e.target)} value='false' > Triturar</button>
                    <button className='simular1' onClick={e => ChangeButtonClass(e.target)} value='false' > Prensar </button>
                </div> 
            </div>
            )
        }

        if (page==4){
            return (
                <div className='popup'>
                <h2>Cómo usar el simulador</h2>
                <br></br>
                <p> 4. Presiona el botón "Realizar simulación" para llevarla a cabo. En el recuadro rosado de abajo verás qué se generó!</p>
                    <div className="button_enviar1">
                        <button data-tip data-for="global" className='result1' > Realizar simulación </button>
                    </div>
            </div>
            )
        }

        if (page==5){
            return (
                <div className='popup'>
                <h2>Cómo usar el simulador</h2>
                <br></br>
                <p> Podrás generar cacao seco, cacao tostado, cacao triturado y chocolate!! En la parte inferior de la página podrás ver las simulaciones que has generado.  </p>
               
                    <img src={require("../imgs/cocoa.png")} alt="Stickman" width="70" height="50"/>
                    <img src={require("../imgs/cacao.png")} alt="Stickman" width="70" height="50"/>
                    <img src={require("../imgs/chocolate-bar.png")} alt="Stickman" width="80" height="50"/>
                    <br></br>
                    <br></br>
                    <button className='result3' onClick={togglePopup} > Ir a mi primera simulación </button>

            </div>
            )
        }
    }
    
    return (
        <React.Fragment>
            {isLoading ? (
                <>
                    <div className="simulador">
                        <br></br>
                 
                        <h2>Bienvenido al simulador de chocolate!</h2>
                        <button onClick={togglePopup} className="button_instrucciones"> Ver instrucciones</button>
                        {isOpen && <Popup
                            handleClose={togglePopup}
                            content={showcontent(page)}
                            handleNext={nextPage}
                            handlePrev={prevPage}
                        />}
                        <div id="contenedor">
                            <br></br>
                            <p>A continuación encontrarás cómo hacer chocolate y una pequeña fábrica para realizarlo.
                                En la fábrica deberás ingresar una cantidad de frutos de cacao a usar y presionar lo que quieras hacer con ellos.
                                Cuando te hayas decidido, presiona "REALIZAR" y verás el resultado obtenido. No te olvides de seguir la receta! </p>
                            <br></br>
                        </div>

                        <div className="row">
                            <div id="contenedor_simulacion">
                                <h3>Fábrica de chocolate</h3>
                                <div className="label_login">
                                    <label data-tip data-for="global" >Cantidad de cacao a utilizar <input type="number" id='cant_cacao' ref={cantidad}></input></label>
                                </div>
                                <br></br>
                                <div id="contenedor">
                                    <p data-tip data-for="global"  >¿Qué procesos quieres aplicarle al cacao?</p>
                                </div>
                                <div className="grid_container">
                                    <button className='simular1' onClick={e => ChangeButtonClass(e.target)} value='false' ref={secar}> Secar </button>
                                    <button className='simular1' onClick={e => ChangeButtonClass(e.target)} value='false' ref={tostar}> Tostar </button>
                                    <button className='simular1' onClick={e => ChangeButtonClass(e.target)} value='false' ref={triturar}> Triturar</button>
                                    <button className='simular1' onClick={e => ChangeButtonClass(e.target)} value='false' ref={prensar}> Prensar </button>
                                </div>

                                <div className="button_enviar1">
                                    <button data-tip data-for="global" className='result1' onClick={simulador}> Realizar simulación </button>
                                </div>
                                <br></br>
                            </div>
                            <div id="contenedor_receta">
                                <h3> Cadena productiva del chocolate </h3>
                                <p>1. Se SECAN las habas de cacao para que se les vaya la humedad, disminuir amargor y aprovechar el aroma. </p>
                                <p>2. Se TUESTAN las habas de cacao para mejorar el aroma y poder triturarlas. </p>
                                <p>3. Se TRITURAN las habas de cacao en el proceso de molturación para formar licor de cacao. </p>
                                <p>4. Se PRENSAN las habas de cacao para obtener manteca de cacao y torta de cacao, las cuales logran formar el CHOCOLATE!. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div id="contenedor_resultado">
                                <h3>Resultado simulación </h3>
                                <Tile className="Tile" ref={tile} />
                                <img src={urls[id]} width = "100px"></img>
                            </div>
                        </div>
                        <br></br>
                        
                        <script></script>
                        <div className="row">
                            <div id="tabla_simulaciones">
                                <h2>Historial de Simulaciones</h2>
                                <div className="button_enviar">
                            <button className='result1' onClick={recargar}> Recargar Historial </button>
                        </div>

                            </div>
                        </div>
                    </div>
        
                </>) : (
                <>
                    <div className="simulador">
                        <br></br>
                        <h2>Bienvenido al simulador de chocolate!</h2>
                        <button onClick={togglePopup} className="button_instrucciones"> Ver instrucciones</button>
                        {isOpen && <Popup
                            handleClose={togglePopup}
                            content={showcontent(page)}
                            handleNext={nextPage}
                            handlePrev={prevPage}
                        />}
                        <div id="contenedor">
                            <br></br>
                            <p>A continuación encontrarás cómo hacer chocolate y una pequeña fábrica para realizarlo.
                                En la fábrica deberás ingresar una cantidad de frutos de cacao a usar y presionar lo que quieras hacer con ellos.
                                Cuando te hayas decidido, presiona "REALIZAR" y verás el resultado obtenido. No te olvides de seguir la receta! </p>
                            <br></br>
                        </div>
                        <div className="row">
                            <div id="contenedor_simulacion">
                                <h3>Fábrica de chocolate</h3>
                                <div className="label_login">
                                    <label >Cantidad de cacao a utilizar <input type="number" id='cant_cacao' ref={cantidad}></input></label>
                                </div>
                                <br></br>
                                <div id="contenedor">
                                    <p>¿Qué procesos quieres aplicarle al cacao?</p>
                                </div>
                                <div className="grid_container">
                                    <button className='simular1' onClick={e => ChangeButtonClass(e.target)} value='false' ref={secar}> Secar </button>
                                    <button className='simular1' onClick={e => ChangeButtonClass(e.target)} value='false' ref={tostar}> Tostar </button>
                                    <button className='simular1' onClick={e => ChangeButtonClass(e.target)} value='false' ref={triturar}> Triturar</button>
                                    <button className='simular1' onClick={e => ChangeButtonClass(e.target)} value='false' ref={prensar}> Prensar </button>
                                </div>

                                <div className="button_enviar1">
                                    <button className='result1' onClick={simulador}> Realizar simulación </button>
                                </div>
                                <br></br>
                            </div>
                            <div id="contenedor_receta">
                                <h3> Cadena productiva del chocolate </h3>
                                    <p> Este es un proceso que va paso a paso, por ende, si te saltas un paso no podrás crear productos. Sé cuidadoso con los botones que aprietes, ya que es acumulativo.</p>
                                    <p>1. Se SECAN las habas de cacao para que se les vaya la humedad, disminuir amargor y aprovechar el aroma -- Formas Cacao Seco. </p>
                                    <p>2. Se TUESTAN las habas de cacao seco para mejorar el aroma y poder triturarlas. -- Formas Cacao Tostado</p>
                                    <p>3. Se TRITURAN las habas de cacao tostadas en un proceso de molturación para formar el licor de cacao.      -- Formas Cacao Triturado</p>
                                    <p>4. Se PRENSAN las habas de cacao trituradas para obtener manteca de cacao y torta de cacao, las cuales logran formar el CHOCOLATE!.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div id="contenedor_resultado">
                                <h3>Resultado simulación </h3>
                                <Tile className="Tile" ref={tile} />
                                <img src={urls[id]} width = "100px"></img>
                            </div>
                        </div>
                        <script></script>
                        <div className="row">
                            <div id="tabla_simulaciones">
                                    <h2>Historial de Simulaciones</h2>
                                    <div className="button_enviar">
                            <button className='result1' onClick={recargar}> Recargar Historial </button>
                        </div>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <Tabla respuesta={data}/>
                                </div>
                            </div>
                       
                    </div>
        
                </>
                    
            )}
        </React.Fragment>
    );
}

const ChangeButtonClass = async (boton) => {
    if (boton.className === 'simular1') {
        boton.className = "simular2";
        boton.value = 'true';
    }
    else {
        boton.className = "simular1";
        boton.value = 'false';
    }
    
}

// const ChangeRealizar = async (boton) => {
//     if (boton.className === 'result1') {
//         boton.className = "result2";
//     }
//     else {
//         boton.className = "result1";
//     }
// }

export default Simulador;