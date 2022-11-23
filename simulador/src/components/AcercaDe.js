import React from 'react';
function QuienesSomos(){
    return (
    <>
    <div className="ImagenAcerca">
    <img src={require("../imgs/pexels-fauxels-3184292.jpg")} alt="Imagen"></img>
      </div>
    <div className="acerca_de" id="acerca_de">
        <h1>MISIÓN SWEET SIMULATOR</h1>
        <h2>1. Entender de manera didáctica las cadenas de producción de azúcar y chocolate.</h2>
        <h2>2. Obtener información estadística sobre el azúcar, chocolate y productos basados en
            estos ingredientes.</h2>
        <h2>3. Visualizar y compartir recetas caseras.</h2>
        <h2>4. Compartir información entre usuarios sobre recetas, ingredientes y sugerencias.</h2>
        <h2>5. Guardar las propias recetas.
        </h2>
    </div>
 
    
    <div className = "unete">
        <h2> Alguna duda? Revisa nuestras preguntas frecuentes!</h2>
        <a href="/preguntas-frecuentes"> <button>Ir a preguntas frecuentes</button></a>
        <br/>
        <br/>
        <br/>
    </div>

    </>
    )
}

export default QuienesSomos;