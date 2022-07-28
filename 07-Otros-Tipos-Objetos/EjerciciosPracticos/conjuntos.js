const nombresFamilia = [
    'Andres Galvis',
    'Jairo Galvis',
    'Martha Galviz',
    'Maicol Ramirez',
    'Yulitza Parra',
    'Princess Galvis'
]

console.log(nombresFamilia)



// Creando el set y visualizando por consola
const setNombresFamilia = new Set(nombresFamilia)
console.log(setNombresFamilia)


// Modificando el setOriginal agregando mi nombre
setNombresFamilia.add('Andres Galvis')
console.log(setNombresFamilia)


// Modificando el setOriginal agregando el nombre 'JavaScript''
setNombresFamilia.add('JavaScript')
console.log(setNombresFamilia)

