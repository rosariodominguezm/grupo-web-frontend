import React from 'react';
function ReglasNegocio(){
    return <>
     <div className = "column" id="contenedor_rn">
            <h1>Reglas de Negocio</h1>
                
            <p> Quieres saber cómo interactua la página con las interacciones del usuario? Tanto su front-end como back-end... 
            Aquí te lo explicamos: </p>
    </div>
    <div className = "column" id="contenedor_rn2">
            <h3>Login y Registro</h3>  
            <p> Para el login y registro el usuario ingresa sus datos, los cuales se envían mediante Axios al back-end. 
                El back-end recibe esta información mediante un método POST que ingresa los datos a la base de datos en caso de registro
                y comprueba la existencia del usuario en caso de login. En ambos casos se validan los datos, tanto existencia como formato, en el back-end
                y se envía una respuesta al front-end. 
                            Para el log In se comprueba que el usuario exista y que la contraseña sea correcta. En caso de que no se cumpla alguna de estas condiciones se envía un mensaje de error al front-end el cual se muestra al usuario como una alerta.
                            Para el caso del registro se comprueba que el usuario no exista y que el formato de los datos sea correcto. En caso de que no se cumpla alguna de estas condiciones se envía un mensaje de error al front-end el cual se muestra al usuario como una alerta. </p>
    </div>
    <div className = "column" id="contenedor_rn2">
            <h3>Simulación</h3>  
            <p> En la simulación funciona similar. Un usuario ya ingresado realiza una simulación, la cual el front-end recibe con los botones e interacciones
                y las envía al back-end para que sean evaluadas y que encuentre en la base de datos qué producto se obtuvo. Esto mediante un POST del back-end. 
                Con ello, el back-end envía al front-end el resultado de la simulación. Este resultado se le muestra al usuario, quien además en el front-end puede ver el historial
                de simulaciones, el cual se saca de las bases de datos mediante un GET con el back-end.</p>
    </div>
    <div className = "column" id="contenedor_rn2">
            <h3>¿Cómo probarlo?</h3>  
            <p> El login puede usarse con el usuario: ian@gmail.com, con clave: 123456. O también puedes registrarte y luego hacer login.</p>
            <p> La simulación se ocupa apretando los botones y con ello, viendo qué se genera. Distintas combinaciones generan distintos resultados. </p>
    </div>
    </>
}



export default ReglasNegocio;