
// Objeto con los datos personales
const datosPersonales = {
    nombre: 'Andres Felipe',
    apellido: 'Galvis Galviz',
    edad: 23,
    altura: 179,
    isDeveloper: true
}

// Variable que contiene mi edad a partir del objeto
const miEdad = datosPersonales.edad
console.log(miEdad)


// Nueva lista que contiene el objeto datos personales y los datos de mis mejores amigos
const listaDatosPersonales = [
    {
        ...datosPersonales
    },
    {    
        nombre: 'Andres Felipe',
        apellido: 'Caballero',
        edad: 25,
        altura: 181,
        isDeveloper: false
    },
    {
        nombre: 'Diego Fernando',
        apellido: 'Pineda',
        edad: 24,
        altura: 175,
        isDeveloper: true
    }
]

console.log(listaDatosPersonales)


// Nueva lista de objetos ordenada por edad de mayor a menor
const listaOrdenadaPorEdad = listaDatosPersonales.sort((a, b) => b.edad - a.edad)
console.log(listaOrdenadaPorEdad)