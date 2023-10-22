/*var nombre;
var edad;
var categoria;

do {
    nombre = prompt ("Coloca tu nombre: ");
    edad=prompt("¿Cuál es tu edad?");
    categoria= prompt("dime tu categoria: ");
} while (confirm("desea guardar los datos") == false);

document.write ("tu nombre es " + nombre + "la edad que tiene es " +edad + "y tu categoria es"+ categoria)
Ejercicio 1
Se generará un mensaje de alerta que saludará
al usuario con un mensaje diferente según el día
de la semana.
Trabajaremos con getDay() y switch


var fecha = new Date(); // Crea una instancia de Date que representa la fecha y la hora actual
var diaDeLaSemana = fecha.getDay();

switch (diaDeLaSemana) {
    case 0:
        document.write("Domingo");
        break;
    case 1:
        document.write("Lunes");
        break;
    case 2:
        document.write("Martes");
        break;
    case 3:
        document.write("Miércoles");
        break;
    case 4:
        document.write("Jueves");
        break;
    case 5:
        document.write("Viernes");
        break;
    case 6:
        document.write("Sábado");
        break;
}
Por supuesto, la primera línea del ejemplo, `var fecha = new Date();`, se utiliza para crear una 
instancia de la clase `Date` en JavaScript. Esta instancia representa la fecha y la hora actual 
en el momento en que se ejecuta el código.

Aquí tienes una explicación más detallada de esta línea de código:

1. `new Date()`: Esto crea un nuevo objeto `Date` que representa la fecha y 
la hora actual del sistema en el que se está ejecutando el código. En otras palabras, 
`new Date()` te proporciona una instancia de la clase `Date` que contiene la fecha y 
hora actuales en el momento de su creación.

2. `var fecha = ...`: Esto declara una variable llamada `fecha` y le asigna la instancia de 
`Date` recién creada. Como resultado, puedes usar la variable `fecha` para acceder a la fecha 
y la hora actuales, así como a varios métodos relacionados con fechas y horas.

En resumen, la primera línea se utiliza para obtener la fecha y la hora actuales y almacenarlas
en una variable llamada `fecha`. Esto es útil en el contexto de tu ejemplo para luego utilizar 
`fecha.getDay()` y obtener el día de la semana correspondiente a esa fecha actual.


var arrays = [5, 14, 19, 21];
var agregar = prompt ("agrega un numero: ")
arrays.push(agregar);


document.write (arrays);

*/


while (true) { 
    var rol = prompt ("Cual es su rol? ")
    if (rol == null) {
        alert ("No ha ingresado ningun dato")
        break; //saldra del bucle si presiona cancelar 
    }
    if (rol == "admin" || rol == "recursos") {
        // Comprobar si el usuario hizo clic en "Aceptar" en lugar de "Cancelar" o cerró la ventana
            var clave = prompt ("Coloca tu clave: ");
            if (clave == "1234") {
                alert ("Acceso permitido.");
                var usuario = prompt ("Diga su nombre de usuario: ")

                let miParrafo = document.getElementById("mi-parrafo");
                miParrafo.innerHTML = ("hola  " + usuario + ", bienvenid@ a nuestra aplicacion");
                break;

                } else if (clave == null) { 
                    alert ("No proporcionaste ninguna clave.");
                    
                } else {
                    alert ("contraseña incorrecta, intenta nuevamente")
                }
            } else {
     // El usuario hizo clic en "Cancelar" o cerró la ventana
            alert("No proporcionaste tu nombre.");
    
        }
    
}

/*
  "mi-parrafo"
    var rol;
var clave;

while (true) {
    rol = prompt("¿Cuál es su rol?");
    
    if (rol === null) {
        alert("No proporcionaste un rol.");
        break;  // Sale del bucle si se presiona "Cancelar" en la primera pregunta
    }
    
    if (rol === "admin" || rol === "recursos") {
        clave = prompt("Coloca tu clave: ");
        
        if (clave === null) {
            alert("No proporcionaste una clave.");
        } else if (clave === "1234") {
            alert("Acceso permitido.");
            break;  // Sale del bucle si se proporciona una clave correcta
        } else {
            alert("Contraseña incorrecta. Inténtalo de nuevo.");
        }
    } else {
        alert("No proporcionaste un rol válido. Por favor, inténtalo de nuevo.");
    }
}
*/