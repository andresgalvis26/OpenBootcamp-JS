let factorial = 1
let num = 10

while (true) {
    factorial *= num;
    num--
    console.log(factorial)
    if (num === 1) break
}

console.log("El factorial de 10 es igual a: " + factorial);