// Funciones de tipo flecha
// A partir de EC6 se introdujeron las funciones tipo flecha y anonimas

const array = [2, 3, 4, 6, 20, 10, 24]


// Forma antigua o tradicional
const array2 = array.map(function(valor) {
    return valor * 2
})

console.log(array2)



// Forma con tipo flecha
const array3 = array.map((valor) => valor * 2)
console.log(array3)



// Definir una función de tipo flecha -> Lo suyo es guardarlo en una const


console.log(doble(6))
//console.log(dobleDelValor(6))
variable = 7
console.log(variable)



// 2da forma
const dobleDelValor = valor => valor * 2
const array4 = array.map(dobleDelValor)
console.log(array4)

// 1ra forma
/* const dobleValor = valor => {
    return valor * 2
} */

function doble(valor) {
    return valor * 2
}

var variable;




// Las funciones tipo flecha solo se pueden acceder después de haber sido inicializadas
// Las funciones (function) y las variables (var) se pueden acceder desde cualquier lugar del código

// Es recomendable definir variables y funciones arriba del todo 
