let alturaCm = 179;
console.log('Mi altura en centimetros es: ' + alturaCm + ' cm.');

let alturaM = 1.79;
console.log('Mi altura en metros es: ' + alturaM + ' m.');

let pesoKg = 68.5;
console.log('Mi peso en kilogramos es: ' + pesoKg + ' kg.');

let alturaMetrosHaciaArriba = alturaM.toFixed(1)
console.log('Mi altura en metros redondeada hacia arriba es: ' + alturaMetrosHaciaArriba + ' m.');

let pesoKgHaciaAbajo = pesoKg.toFixed(2)
console.log('Mi peso en kg redondeado hacia abajo es: ' + pesoKgHaciaAbajo + ' kg.')

const areEqual = Number.MAX_VALUE + 1 === Number.MAX_VALUE
console.log(areEqual)