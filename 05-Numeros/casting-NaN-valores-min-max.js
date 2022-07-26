// Operador.valueOf() - Obtener valores númericos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b)

// Obteniendo el valor del literal
console.log(b.valueOf())

// NaN - Infinity
// Not a Number -> Intentando utilizar un método de variables númericas en algo NO númerico.
let n = Number('adios');
console.log(n)
console.log(isNaN(n))

let numerador = 19;
let divisor = 0;
let divisor_2 = null;

console.log(numerador / divisor);
console.log(numerador / divisor_2)


// Cómo convertir los string a valores númericos con Number, parseInt y parseFloat
let numero = '5.89';
let num2 = 17.2;

console.log(typeof numero)
console.log(typeof num2)

// Esto es un error de concepto por sumar dos tipos de datos diferentes
console.log(numero + num2)

// Forma correcta de hacerlo -> Number hace el casteo
console.log(Number(numero) + num2);

// parseInt & parseFloat -> Pegando o convirtiendo a entero y coma flotante
console.log(parseInt(numero));
console.log(parseFloat(numero));


// Números hexadecimales -> Numeros en base 10
// Es posible trabajar con ellos dentro de JS 
// Todos los números hexadecimales inician 0x
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16))


// Obtener los valores máximo y mínimo en JS
let min_precision = Number.EPSILON
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision)
console.log(min_valor_JS)
console.log(max_valor_JS) 
console.log(2 ** 1024)