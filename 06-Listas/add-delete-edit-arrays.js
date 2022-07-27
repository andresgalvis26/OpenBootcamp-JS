// Cómo trabajar con listas (arrays, arreglos, vectores...)
let arrayNum = [1, 2, 3, 4, 5, 6]
let array = [1, 'hola', false, undefined]
console.log(array)




// Acceder a los valores de un array a través de su posición
console.log(arrayNum[1]) // Indice del valor que deseamos
console.log(array[1])




// Métodos para introducir más valores a las listas o arrays
// .push() .unshift() -> Mutan el valor de nuestro array

// Valores al final -> Método .push()
array.push('Final', 45, 302, true)
console.log(array)

// Valores al principio -> Métoodo .unshift()
arrayNum.unshift('Inicio', -2, -1, 0)
console.log(arrayNum)





// Métodos para eliminar valores en nuestros arrays
// .pop .shift => Mutan el valor del array

// Valores al final -> Pop
array.pop()
console.log(array)

// Valores al principio -> Shift
arrayNum.shift()
console.log(arrayNum)



// Método para eliminar, modificar o anadir valores a nuestro array
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6]

// Eliminar valores
// El primer valor es el indice y el segundo valor es cuantos eliminará a partir de ese índice
array3.splice(2, 1)
console.log(array3)


// Anadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "Hola")
console.log(array3)



// Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, 3)
console.log(array3)