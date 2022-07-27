// Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined, null]


// Forma antigua (poco eficiente)
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}



// Forma moderna o ES6 (más eficiente) .forEach()
array.forEach(valor => {
    console.log(valor)
})

const arrayNums = [2, 4, 4, 93, 02, 1029, 192, 9383, 10]
arrayNums.forEach(valor => {
    console.log(valor)
})



// Búsqueda de un valor dentro de una lista .find()
// Quiero buscar el elemento 90 en el array
const variable = array.find(valor => {
    if (valor === 90) {
        return true
    }
})

console.log(variable)


const listaObjetos = [
    { nombre: "Mariela", edad: 30},
    { nombre: "Amaya", edad: 39},
    { nombre: "Javier", edad: 59},
    { nombre: "Rodrigo", edad: 22},
    { nombre: "Pedro", edad: 36},
]

/* const objeto = listaObjetos.find(o => {
    if (o.nombre === "Pedro"){
        return true
    }
}) */


/* const objeto = listaObjetos.find(o => {
    return o.nombre === "Rodrigo"
}) */

// Forma más eficiente
const objeto = listaObjetos.find(o => o.nombre === "Rodrigo")
console.log(objeto.edad)

const { edad } = listaObjetos.find(o => o.nombre === "Mariela")
console.log(edad)