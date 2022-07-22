// Listas, array o arreglo
const lista = [1, "hola", true, null, undefined]
const lista2 = new Array(2, "hola", true, undefined, null);
const lista3 = new Array(3);

lista3[0] = "Soy el primer elemento."

const lista4 = [lista, lista2, lista3];

console.log(lista)
console.log(lista2)
console.log(lista3)
console.log(lista4)




// Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: 'Apple',
    sistema: 'iOS',
    isWhite: false,
    isFunctional: true,
    contactos: ['Gorka', 'Raúl', 'Jairo'],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32,
        tipo: "SD"
    }
}

movil.anyo = 2015
movil.marca = "Xiaomi"

console.log(movil.anyo)

// Lo que se define como const es el objeto móvil
// NO podemos declarar otro móvil y cambiar sus atributos
// SI es posible añadirle y/o modificarle sus atributos


// Fechas
// Librerías de apoyo Moment.JS
const ahora = new Date()
console.log(ahora);

// 3 maneras diferentes
const fecha_milis = new Date(10); // Utilizando los milisegundos
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020"); // Utilizando la fecha en cadena
console.log(fecha_cadena)

// Los meses de las fechas también inician en cero

const fecha_valores = new Date(1999, 0, 26); // Utilizando mes dia y año
console.log(fecha_valores);

// Creando la fecha actual manualmente
const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo)