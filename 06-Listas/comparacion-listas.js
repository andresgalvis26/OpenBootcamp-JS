// Como podemos comparar listas
// .every()

const array = [4, 6, 9, 21, 3, 1, 50, 39, 29, 25, 2, 0, -4, -20, -56]

/* const resultado = array.every((valor) => {
    if (typeof valor === "number"){
        return true
    } else {
        return false
    }
}) */

const resultado = array.every(valor => valor > 0)
console.log(resultado)



// Comparacion listas
const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

// Da false porque las listas NO se pueden comparar, es necesario crear una función
console.log(ar1 === ar2)


const compararArrays = (array1, array2) => {
    if (array1.length !== array2.length) return false
    const res = array1.every((valor, i) => valor === array2[i])
    return res
}

console.log(compararArrays(ar1, ar2))


const ar3 = [1, 2, 3, 5]
console.log(compararArrays(ar1, ar3))


