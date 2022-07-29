function Fibonacci(numero) {

    if (numero === 1) return [1]
    if (numero === 2) return [1, 1]

    let lista = [1, 1]

    for (let i = 2; i < numero; i++){
        lista.push(lista[i - 1] + lista[i - 2])
    }

    return lista

}

console.log(Fibonacci(6))