// Métodos más utilizados con cadenas de caracteres

// Obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length)

// Obtener partes de cadenas de caracteres
// slice() substring() substr()
let slice_str = str.slice(5, 10)
console.log(slice_str)

let substring_str = str.substring(5, 10)
console.log(substring_str)

let substr_str = str.substr(5, 10)
console.log(substr_str)

// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Andres"
console.log(cadena)

// Al utilizar strings sólo reemplaza la primera instancia
// Cambiar Andres por nombre Miguel
console.log(cadena.replace('Andres', 'Miguel'))



let texto_largo = "Este es un texto en donde intentare reemplazar las palabras las por otras..."
console.log(texto_largo.replace('las', 'leclerc'))

// Al utilizar la expresion regular /g (global) reemplaza todas las instancias
console.log(texto_largo.replace(/las/g, 'verstappen'))
