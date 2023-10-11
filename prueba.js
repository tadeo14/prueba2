var nombre;
var edad;
var categoria;

do {
    nombre = prompt ("Coloca tu nombre: ");
    edad=prompt("¿Cuál es tu edad?");
    categoria= prompt("dime tu categoria: ");
} while (confirm("desea guardar los datos") == false);

document.write ("tu nombre es " + nombre + "la edad que tiene es " +edad + "y tu categoria es"+ categoria)