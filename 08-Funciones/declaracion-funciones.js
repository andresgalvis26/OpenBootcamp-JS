// Qué son las funciones, cómo se declaran y cómo se utilizan 
// Bloques de código que se crean con un objetivo específico

const nom = 'Pedro'

//saludar('Andres')
saludar(nom)

function saludar (nombre) {
    console.log(`Hola ${nombre}`)
}



/////
// Cuando se trabaja con tipo de datos primitivos y modificamos el dato dentro de la 
// función, NO se cambia el objeto original. A diferencia de los objetos que SÍ sucede.

let nombre_2 = 'Julian'
console.log(nombre_2)

despedir(nombre_2)
console.log(nombre_2)

function despedir(nombre) {
    nombre = 'Diego'
    console.log(`Adios ${nombre}`)
}



/////
// Cuando se trabaja con objetos y cambiamos alguna propiedad del objeto que se 
// pasa como parámetro, estamos modificando el objeto ORIGINAL.
// Tener mucho cuidado con esto

let persona = {nombre: 'Mariela', apellido: 'Gónzalez'}
console.log(persona)

saludarPersona(persona)
console.log(persona)

function saludarPersona(objeto) {
    objeto.apellido = 'Villar'
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

// Si intento llamar a saludarPersona sin ningún parámetro
//saludarPersona() // Da ERROR porque intenta acceder a la propiedad de algo que NO está definido 





///////// Imprimir el número
function imprimeNumero(numero = 7) { // Parámetros x defecto
    console.log(numero)
}

imprimeNumero(3)

// Qué pasa si no se le pasa nada? -> undefined
// Pero si quiero que cuando NO se le pasa nada, imprima algo





////// Tenemos la posibilidad de definir funciones con parámetros indeterminados
// Utilizar el factor de propagación como parámetro

// Esto nos pasará por consola TODOS los parámetros que pasemos
function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1, 3, 4, 5, 6, 8, 'hola')




///// Suma
function suma (...nums) {
    return nums.reduce((a, b) => a + b)
}

const sumatoria = suma(1, 2, 3, 4, 5, 6, 7, 2)
console.log(sumatoria)



// Palabra reservada RETURN
// Devolvernos algo 
// Si queremos que una función devuelva algo, tenemos que colocar el return


/* function suma (...nums) {
    return nums.reduce((a, b) => a + b)
} */



// Qué es el ámbito de una función?
// La función está entre llaves y todo lo que definamos ahí dentro, estará dentro del ámbito de la función.

let variable = 'Hola';

function multiplicar (a=0, b=0) {
    console.log(variable)

    let variable_interna = 'Adios'

    return a * b
}

console.log(multiplicar(4, 9))
// console.log(variable_interna) // NO será posible acceder porque está disponible en el ámbito de la función multiplicar