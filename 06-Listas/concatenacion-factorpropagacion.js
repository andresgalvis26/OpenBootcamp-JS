// Cómo unir dos listas .concat(lista2)

const lista1 = ["hola", 2, false, null]
const lista2 = ["adios", 9, true, undefined]

// Esto NO modifica los valores de las listas
console.log(lista1.concat(lista2))

const lista3 = lista1.concat(lista2)
console.log(lista3)



// Cómo unir dos listas con el factor de propagación
// A partir de EC6 
// El factor de propagación son los 3 puntos que colocamos
console.log(...lista3)

const lista4 = [...lista1, ...lista2]
console.log(lista4)

