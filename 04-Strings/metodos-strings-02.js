// Métodos de cadenas de texto (parte 2)
let input = "Escorpio"
let db = "escorpio"

// toLowerCase() - toUpperCase()

console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLocaleLowerCase())
console.log(input.toLocaleUpperCase())
console.log(input.toLowerCase() === db)


// Diferentes formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena. "
let str_2 = "Y yo soy la segunda cadena"

console.log(str_1.concat(str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)


// Eliminar espacios al inicio y al final
let str_3 = "            Hola, yo soy un string con espacios al final.                "
console.log(str_3.length)

// trim() -> Nos permite eliminar los espacios vacíos
console.log(str_3.trim().length)

// trim con Start - Eliminar los espacios al principio
console.log(str_3.trimStart().length)

// trim con End - Eliminar los espacios al final
console.log(str_3.trimEnd().length)



// Obtener el caracter que hay en cierta posición
// Se pueden tratar como lista de caracteres
let str_4 = "Hola soy el string número 4"

console.log(str_4.charAt(6))
console.log(str_4[6])



// Obtener la posición de una palabra dentro de una cadena de carácteres
let str_5 = "Hola soy Andres y me gusta el tenis. Mi nombre es Andres"
console.log(str_5.indexOf("Andres"))
console.log(str_5.charAt(9))
console.log(str_5.lastIndexOf("Andres"))
