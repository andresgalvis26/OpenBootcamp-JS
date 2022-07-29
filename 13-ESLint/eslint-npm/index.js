// Este es el archivo que vamos a utilizar
// Ya hemos instalado en este punto ESLint

const nombre = "Andres Felipe"



// Deseo que en esta línea se pueda tener comillas simples (quiero que me dejes la regla de las comillas dobles)

/* eslint-disable */

const persona2 = 'Maria'

/* eslint-enable */


// En esta línea deseo que NO se habiliten las reglas de doble comillas
const nuevoString = 'Este es un string con comillas simples' //eslint-disable-line


/* eslint-disable-next-line indent */
const string2 = "Mas strings"

console.log(string2)