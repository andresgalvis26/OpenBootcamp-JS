// Trabajando con fechas

// Declarando la fecha de ahora
const fecha = new Date()
console.log(fecha)


// Atención -> Meses inicializan en 0 (Enero) y 11 (Diciembre)
const fecha2 = new Date(1999, 0, 26, 11, 39, 52)
console.log(fecha2)


// Otra forma de inicializar fechas -> Con milisegundos
const fecha3 = new Date(10000000000)
console.log(fecha3)


// Definir la fecha a través de strings
const fecha4 = new Date("October 13, 1986 12:35:29")
console.log(fecha4)


// Comparar fechas (mayor o menor que)
console.log(fecha > fecha2)

// Si se quiere comparar fechas a ver si es igual, de esta forma es un ERROR
const fecha5 = new Date(1999, 0, 26, 11, 39, 52)

// NO SE PUEDEN COMPARAR FECHAS DE ESTA MANERA
console.log(fecha2 === fecha5)


// Para realizar esto es necesario convertir las fechas a milisegundos
console.log(fecha2.getTime() === fecha5.getTime()) // OK - Esta es la forma correcta


// Obtener el día, mes y el anyo de una fecha

// Obtener el día .getDate()
console.log(fecha5.getDate())

// Obtener el mes .getMonth() (0 - Enero y 11 - Diciembre)
console.log(fecha5.getMonth() + 1)

// Obtener el anyo .getFullYear()
console.log(fecha5.getFullYear())


// toLocateDateString
console.log(fecha2.toLocaleDateString('en-GB'))



