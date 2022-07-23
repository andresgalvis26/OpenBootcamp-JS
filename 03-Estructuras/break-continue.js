// Casos muy especifícos - break, continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {

    // En lugar de seguir, vuelve arriba al for y se ejecuta nuevamente
    // Se omite el 3
    if (lista[i] == 3) {
        continue;
    }

    console.log(lista[i]);

    // Salir del bucle cuando se cumple la condicion
    if (lista[i] > 5){
        break;
    }
}

// Cuál es el ámbito de un bucle
//console.log(i);


