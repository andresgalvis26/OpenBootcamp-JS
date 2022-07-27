// .sort () -> Ordenar listas
// Modifica el array
const array = [2, 4, 43, 12, 42, 7, 0, 3, 90]

console.log(array)

array.sort((a, b) => {
    if (a < b) {
        return -1
    } else if (a > b) {
        return +1
    } else { // a === b
        return 0
    }
})

console.log(array)

// Forma más sencilla (SOLO PARA NÚMERICOS)
const arrayNumerico = [203, 5, 10, 54, 92, 3, 102, 320, 4, 93]

arrayNumerico.sort((a, b) => a - b)

console.log(arrayNumerico)




///// ESTO ES INTERESANTE EN ARRAYS DE OBJETOS
const listaObjetos = [
    { nombre: "Mariela", edad: 30},
    { nombre: "Amaya", edad: 39},
    { nombre: "Javier", edad: 59},
    { nombre: "Rodrigo", edad: 22},
    { nombre: "Pedro", edad: 36},
]

/* listaObjetos.sort((a, b) => {
    if (a.edad < b.edad) {
        return -1
    } else if (a.edad > b.edad) {
        return +1
    } else {
        return 0
    }
}) */

listaObjetos.sort((a, b) => a.edad - b.edad)

console.log(listaObjetos)
