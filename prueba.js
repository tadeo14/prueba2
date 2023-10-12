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

*/
var fecha = new Date(); // Crea una instancia de Date que representa la fecha y la hora actual
var diaDeLaSemana = fecha.getDay();

switch (diaDeLaSemana) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
}