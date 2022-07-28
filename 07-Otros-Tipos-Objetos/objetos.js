// Trabajando con Objetos en JS:
const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "González",
    isDeveloper: true,
    libros_favoritos: ["El método", "El código de la manifestación"],
    "4-juegos": [1, 2, 3, 4]
}

// Imprimiendo por consola la propiedad extrana
console.log(obj["4-juegos"])
console.log(obj.id)


// Comprobando con variables
const prop = "isDeveloper"
console.log(obj[prop])


// Replicar este objeto
const obj2 = obj;
console.log(obj2)
// Cuando hacemos este igual, le estamos dando una referencia al objeto principal y si se hacen cambios
// Los cambios que se hagan en uno, se realizarán en el otro.

obj2.nombre = "Lautaro"
console.log(obj2.nombre)
console.log(obj.nombre)


let val1 = 4;
let val2 = val1

// Esto NO sucede cuando se hace con datos primitivos
val2 = 6
console.log(val1)
console.log(val2)


// Cuál sería la forma correcta
const obj3 = {...obj}

console.log(obj.nombre)
console.log(obj3.nombre)

obj3.nombre = 'Andres Felipe'

console.log(obj.nombre)
console.log(obj3.nombre)



//// Ordenando lista de objetos en función de una propiedad
const listaPeliculas = [
    {titulo: "Lo que el viento se llevó", anyo: 1939},
    { titulo: "Titanic", anyo: 1997 },
    { titulo: "Moana", anyo: 2016 },
    {titulo: "El efecto mariposa", anyo: 2004 },
    {titulo: "TED", anyo: 2012 },
]


console.log(listaPeliculas)
// Para ordenar se usará el .sort()
// Este MUTA el valor original del objeto

listaPeliculas.sort((a, b) => a.anyo - b.anyo)

console.log(listaPeliculas)
