// If else + if else

let nota = 5;


// Esto se volvería un código inmantenible y sin buenas prácticas
/* if (nota === 5) {
    console.log("Enhorabuena, has obtenido la mayor calificación")
} else {
    if (nota === 4) {

    }

    if (nota === 3 ) {

    }
} */

if (nota  === 5) {
    console.log("Enhorabuena, has obtenido la mayor calificación")
} else if (nota === 4 ) {
    console.log("Buen trabajo, pero podrías haberlo hecho mejor.")
} else if (nota === 3) {
    console.log("Has obtenido un suficiente.")
} else if (nota === 2 ) {
    console.log("No has aprobado por poco.")
} else if (nota === 1 ) {
    console.log("No has estudiado nada, trabaja un poquito más para la próxima");
} else {
    console.log("Error, introduce una nota entre el 1 y el 5");
}


