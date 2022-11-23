import React from 'react';
function Index(){
    return(
        <>
        <div className="row">
            <div className = "column" id="contenedor">
                <h1>¿Sabes cómo se crean tus <br></br>antojos favoritos?</h1>
                <h2> Con SWEET SIMULATOR lo descubrirás!</h2>
                <p> Aquí podrás ver qué hace nuestra página <br></br> y cómo interactuar con ella.</p>
                <a href="/acerca-de">
                    <button className="btn btn-primary btn-lg">Acerca de la página</button>
                </a>
                <br>
                </br>
                <p> ¿Quién está detrás de esta aplicación web? </p>
                <a href="/quienes-somos">
                    <button className="btn btn-primary btn-lg">Quiero conocerlas</button>
                </a> 
            </div>

            <div className="column">
                <img src={require("../imgs/azucar.jpg")} alt="Imagen"></img>
                <img src={require("../imgs/postre_chocolate.jpg")} alt="Imagen"></img>
            </div>
        </div>
        </>
    )
}

export default Index;