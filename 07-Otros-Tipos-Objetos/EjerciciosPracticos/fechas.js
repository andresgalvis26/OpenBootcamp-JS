// Fecha de hoy
const fechaHoy = new Date()
console.log(fechaHoy)


// Fecha de Nacimiento
const fechaNacimiento = new Date(1999, 0, 26)
console.log(fechaNacimiento)


// Comprobar si la fecha de hoy es más tarde que la fecha de nacimiento
console.log(fechaHoy > fechaNacimiento)


// Variable que contiene el día de mi nacimiento
console.log(fechaNacimiento.getDate())


// Variable que contiene el mes de mi nacimiento
console.log(fechaNacimiento.getMonth() + 1)


// Variable que contiene el anyo de mi nacimiento
console.log(fechaNacimiento.getFullYear())



