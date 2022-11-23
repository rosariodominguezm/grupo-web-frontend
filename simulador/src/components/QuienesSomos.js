import React  from 'react';
function QuienesSomos(){
    return (
    <>
    <div className="preguntas_frecuentes">
        <h2>¿Quiénes somos?</h2>
        <br/>
    </div>

    <section id="us">
      <div className="row">
        <div className = "column" id="contenedor2">
          <h2> Simulador de azúcar tiene como misión poder ser una plataforma interactiva para visualizar la cadena de proceso
            del azúcar y del chocolate, como también ver recetas con estos ingredientes. Para esto existe un equipo comprometido, trabajando día a día para llegar más lejos.</h2>
        </div>
      </div>
      <section id="section-nosotros">
          <div className="grid">
            <div className="box cata">
                <img src={require("../imgs/cata.jpg")} alt="Imagen"></img>
                <h3>Catalina Fernández</h3>
                <p>Major Computación en Tecnologías de la información</p>
                <p>Minor Industrial</p>
            </div>
            <div className="box rosario">
            <img src={require("../imgs/rosario2.jpeg")} alt="Imagen"></img>
                <h3>Rosario Domínguez</h3>
                <p>Major Investigación Operativa</p>
                <p>Minor Computación en Tecnologías de la información</p>
            </div>
            <div className="box flo">
            <img src={require("../imgs/flo.jpg")} alt="Imagen"></img>
                <h3>Florencia Viollier</h3>
                <p>Major Computación en Tecnologías de la información</p>
                <p>Minor Industrial</p>
            </div>
          </div>
      </section>

    </section>

    <div >
        <h2>¿Quiénes somos?</h2>
        <br/>
    </div>
    </>
    )
}

export default QuienesSomos;