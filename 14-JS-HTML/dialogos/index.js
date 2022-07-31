// Diferentes formas de llamar
// const boton = document.getElementById("btn")
const boton = document.querySelector("#btn");

console.log(boton);

boton.addEventListener("click", () => {
    console.log("click...");

    // Lanzar alertas por pantalla
    // Son utiles para mensajes al usuario cuando se requiere o falta algo.
    // alert("Se ha hecho un click.")

    // Confirmaciones
    // Utilizando el operador ternario -> true ? : false
    // confirm("¿Estás de acuerdo?") ? console.log("Sí. Perfecto") : console.log("No, en desacuerdo.")

    // Otra forma de hacer la confirmación
    const respuesta = confirm("¿Seguro?");
    if (respuesta) {
        console.log("Estás de acuerdo.");
    } else {
        console.log("No estás de acuerdo.");
    }

    // La mejor forma es hacerlo con el operador ternario...
});

// Que nos solicite información
const botonInfo = document.getElementById("btn-info");
console.log(botonInfo);
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu nombre?");
    if (nombre) {
        console.log("Tu nombre es " + nombre);
    } else {
        console.log("No has introducido nada...")
    }
});

const lista = [{
    nombre: "Eduard Giovanny",
    edad: 12
}, {
    nombre: "Carlos Andres",
    edad: 29
}, {
    nombre: "Juan Carlos",
    edad: 19
}, {
    nombre: "Mariela Maria",
    edad: 39
}]

console.log(lista)

// Forma más visual de ver las listas de objetos
console.table(lista)
