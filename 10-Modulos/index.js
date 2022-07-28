// Formas de importar/exportar módulos
// 1. CommonJS -> require
// 2. Import ES6 -> import


//const moduloMatematicas = require('./modulos/matematicas.js')

// Otra forma de importar
//const factorial = moduloMatematicas.factorial;
//const suma = moduloMatematicas.suma;

// Forma más fácil - Deconstrucción de objetos
//const { suma, factorial } = moduloMatematicas;
import { factorial, suma } from './modulos/matematicas.js'



//console.log(moduloMatematicas.factorial(10))

 const fact = factorial(5)
console.log(fact)

const sum = suma(100, 150)
console.log(sum)


// Todos los archivos tienen archivos por defecto tienen 
// un objeto module

//console.log(module)


