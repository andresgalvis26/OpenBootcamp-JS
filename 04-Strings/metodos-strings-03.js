// Métodos de cadenas de texto (parte 3)
// En vez de strings, expresiones regulares

// https://regexr.com

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos."

// Encontrar cuantas veces está la palabra no
console.log(texto_largo.match(/no/g))


// Existe la palabra dentro del texto: SI la tiene - NO la tiene
console.log(texto_largo.includes(""))


// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("t"))

// Saber si un texto termina con una palabra
console.log(texto_largo.endsWith("."))
