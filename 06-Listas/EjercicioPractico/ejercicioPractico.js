
// Creando la lista de la compra
let listaCompra = ['Arroz', 'Bolsa de Leche', 'Galletas', 'Yogur', 'Atún', 'Papa a la Francesa']
console.log(listaCompra)


// Agregando el aceite de girasol
listaCompra.push('Aceite de Girasol');
console.log(listaCompra)


// Quitando el aceite de girasol
listaCompra.pop()
console.log(listaCompra)


// Creando la lista de peliculas favoritas
const listaPeliculasFav = [
    { nombre: "Harry Potter y la Piedra Filosofal", director: 'Chris Columbus', fecha: 2001},
    { nombre: "Maze Runner: Correr o Morir", director: 'Wes Ball', fecha: 2014},
    { nombre: "Transformers: El lado oscuro de la Luna", director: 'Michael Bay', fecha: 2011}
]

// Nueva lista con peliculas posteriores al 1 de enero de 2010
const peliculasPosterioresAl2010 = listaPeliculasFav.filter(obj => obj.fecha > 2010)
console.log(peliculasPosterioresAl2010)

// Nueva lista que contiene los directores de las peliculas de la lista original
const directoresPeliculas = listaPeliculasFav.map((valor, indice) => `${indice+1}. ${valor.director}`)
console.log(directoresPeliculas)


// Nueva lista que contiene los titulos de las peliculas de la lista original
const titulosPeliculas = listaPeliculasFav.map((valor, indice) => `${indice + 1}. ${valor.nombre}`)
console.log(titulosPeliculas)


// Nueva lista que concatena la lista de directores con la de títulos usado factor de propagación
const listaDirectoresyListaTitulosConcat = directoresPeliculas.concat(titulosPeliculas)
console.log(listaDirectoresyListaTitulosConcat)


// Nueva lista que concatena la lista de directores con la de títulos usando factor de propagación
const listaDirectoresyListaTitulosPropag = [...directoresPeliculas, ...titulosPeliculas]
console.log(listaDirectoresyListaTitulosPropag) 