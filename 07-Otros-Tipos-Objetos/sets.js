// A partir de EC6
// Sets o conjuntos (en castellano)
const array = [1, 2, 3, 4, 5, 1, 2, 3]

const miSet = new Set(array)

console.log(array)
console.log(miSet)

// Diferencia de los conjuntos de los array
// Set -> Conjunto NO ordenado de elementos únicos

// Set no permitirá almacenar elementos que se encuentren repetidos

// Agregar .add()
miSet.add(9)
console.log(miSet)
miSet.add(4)
console.log(miSet)



// Eliminar .delete()
miSet.delete(9)
console.log(miSet)



// clear ()
/* miSet.clear()
console.log(miSet) */


// .has()
console.log(array.includes(2))
console.log(miSet.has(40))


// .size()
console.log(miSet.size)




// Iteración dentro de los valores del set
miSet.forEach(valor => {
    console.log(valor)
})


const it_miSet = miSet.values()
console.log(it_miSet)

const ar_miSet = [...miSet]
console.log(ar_miSet)