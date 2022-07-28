// Función que devuelve siempre true
function alwaysTrue () {
    return true
}

console.log(alwaysTrue())


// Función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function soyUnaPromesa() {
    return setTimeout(() => console.log('Hola soy una promesa'), 5000)
}

console.log(soyUnaPromesa())


// Función generadora de índices pares automáticos
function* paresAutomaticos() {
    let id = 0;
    while (true) {
        yield id += 2
    }
}

const pares = paresAutomaticos()

console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
