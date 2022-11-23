# grupo-grupo-web-1-frontend


La validacion de front se saco de: https://www.telerik.com/blogs/how-to-create-validate-react-form-hooks

## Sobre la Implementación de Javascript

* Se crearon archivos .js que permiten realizar acciones básicas, tanto para la vista registrarse como para la vista log_in.

* En particular, el Javascript conectado a la vista **registrase** se llama ``registro.js``. Este archivo controla que todos los campos de inputs estén ingresados con datos (se rellenen todos los campos del registro), además que el mail sea válido (que contenga "@" y ".") y también que las contraseñas ingresadas sean idénticas. Para cualquiera de estos casos, si es que no se cumple alguna de estas consideraciones, se mostrará un alerta que indica el error cometido y se vaciará el campo en el que se cometió el error si corresponde (Ej: Si el mail no es válido, se le alerta al usuario "El mail ingresado no es válido! Vuelve a ingresarlo", y se vacia el campo email, para que el usuario lo complete denuevo desde cero).

* - Por otro lado, si el registro es exitoso, se le informa al usuario que se ha registrado correctamente y se le redirige a la landing page (index.html).

* Por su parte el Javascript conectado a la vista **log_in** se llama ``log_in.js``, también realiza validaciones. Estas son, primero que todos los campos sean rellenados y segundo que el mail sea válido (tenga @ y .). Alerta si alguna de estas condiciones no se cumple.

* - Tambien, si apretas el logo de usuario este va cambiando :)

## Consideraciones

1. Para la correcta ejecucion y visualizacion de las pestanas, recomendamos visualizar el frontend de la aplicacion con la extensión live server. Dado que permite una mayor conectividad entre las vistas (hemos enfrentado problemas al abrir archivos así nomás sin utilizar live server).

2. Como en el enunciado no se detallaba donde se debian ubicar los archivos .js, decidimos arbitrariamente ubicarlos en el directorio principal.


Gracias por leer :)

