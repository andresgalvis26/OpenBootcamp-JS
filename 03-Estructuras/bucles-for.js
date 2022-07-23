// Bucles For

/* i = i + 1
i += 1
i++ */

for (let i = 0; i < 10; i++) {
    // Esto es el bucle
    console.log(i)
}


// Recorriendo un array o lista
let lista = [1, 4, 5, 3, 12, 4, 3, 69, 1000, 32];

for (let i = 0; i < lista.length; i++ ) {
    console.log(lista[i])
}

// Para el caso de las listas, es posible usar forOf
for (const valor of lista) {
    console.log(valor)
}



// forEach - También funciona para las listas
// Se utiliza una función flecha =>
lista.forEach(valor => {
    console.log(valor)
})


// forIn - Se utiliza con objetos
let persona = {
    nombre: "Andres",
    apellido: "Galvis",
    edad: 23,
    isDeveloper: true
}

for (let propiedad in persona) {
    // Acceder a las propiedades
    console.log(propiedad)
    // Acceder al objeto
    console.log(persona)
    // Acceder a los valores
    console.log(persona[propiedad])
}