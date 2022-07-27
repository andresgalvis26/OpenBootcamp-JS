// Métodos más avanzados 
// .map() - .filter() - .reduce()

const arrayCiudades = ["Bucaramanga", "Bogotá", "Santa Marta", "Cartagena", "Medellin"]

const val = arrayCiudades.forEach(v => {
    console.log(v)
})

console.log(val)


const newArray = arrayCiudades.map((valor, indice) => `${indice+1}. ${valor}`)
console.log(newArray)




const listaObjetos = [
    { nombre: "Mariela", edad: 30},
    { nombre: "Amaya", edad: 39},
    { nombre: "Javier", edad: 59},
    { nombre: "Rodrigo", edad: 22},
    { nombre: "Pedro", edad: 36},
]

// Si queremos obtener una serie de objetos que cumplen una serie de filtros
/* const personasMayores30 = listaObjetos.filter(obj => {
    if (obj.edad > 30) {
        return true
    } else {
        return false
    }
}) */

// Forma MÁS optimizada
const personasMayores30 = listaObjetos.filter(obj => obj.edad > 30)


console.log(personasMayores30)


const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Rodrigo")
console.log(nuevaLista)


// Obtener un valor, un objeto o algo a partir de una lista
// reduce()
const valores = [3, 45, 53, 24, 54, 30, 100]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})

console.log(suma)