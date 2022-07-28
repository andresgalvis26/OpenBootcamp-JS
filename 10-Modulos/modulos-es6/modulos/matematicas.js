// Primero debo exportar las funciones o hacerlas publicas
// Y despues desde donde se quiereen consumir, se importan.

export function suma(a, b) {
    return a + b;
}

export function multiplica(a, b) {
    return a * b;
}

export function eleva(a, b) {
    return a ** b;
}

export function factorial(a) {
    // Factorial de 5: 5 * 4 * 3 * 2 * 1
    let factorial = 1;
    for (let i = 1; i <= a; i++) {
        factorial *= i;
    }
    return factorial;
}

// También puedo exportar constantes
export const nombreClase = 'Matematicas'

// ESTO YA NO FUNCIONARÁ
/* module.exports = {
    suma,
    multiplica,
    eleva,
    factorial,
}; */
