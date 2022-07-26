// Principales operaciones aritméticas
let a = 3.5;
let b = 4.1;

// Suma (+)
console.log(a + b)

// Resta (-)
console.log(a - b)

// Multiplicación (*)
console.log(a * b)

// División (/)
console.log(a / b)


// Representación de los números en cadenas de texto
console.log(typeof a);
let a_str = a.toString();
console.log(a_str);
console.log(typeof a_str);

// Redondeo de números decimales
let c = 3.3;
let d = c * 3;

console.log(d);

// Quiero tener solo dos decimales
// Se utiliza toFixed(x) -> Convierte el valor a string
console.log(d.toFixed(0))
console.log(d.toFixed(1))
console.log(d.toFixed(2))

// toPrecision(x)
// También convierte el valor en un string 
let e = 1839.1233456789;
console.log(e.toFixed(2))

// Limita el # de cifras significativas
console.log(e.toPrecision(7))



