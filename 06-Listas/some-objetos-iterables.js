// .some() -> Si alguno de los elementos cumple la condición

const array = [3, 7, 4, 34, 20, 4930, 20, -1, 23]

const res = array.some(valor => valor < 0)

console.log(res)


const existe = array.some(valor => valor === 3)
console.log(existe)



// Dentro de objetos
const listaObjetos = [
    { nombre: "Mariela", edad: 30},
    { nombre: "Amaya", edad: 39},
    { nombre: "Javier", edad: 59},
    { nombre: "Rodrigo", edad: 22},
    { nombre: "Pedro", edad: 36},
]

const existeMiguel = listaObjetos.some(persona => persona.nombre === "Miguel")
console.log(existeMiguel)

const existeJavier = listaObjetos.some(persona => persona.nombre === "Javier")
console.log(existeJavier)





// // Cómo podemos obtener una lista a partir de un objeto iterable
// Objetos que nos permiten iterar dentro de ellos, EJM: string

const str = "Hola Mundo!"
console.log(str[5])


// una lista a partir del string
const ar_str = Array.from(str)
console.log(ar_str)


// set
const set = new Set([2, 3, "hola", 4])
const ar_set = Array.from(set)
console.log(ar_set)


// Obtener un iterable de todos los indices del array
const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)