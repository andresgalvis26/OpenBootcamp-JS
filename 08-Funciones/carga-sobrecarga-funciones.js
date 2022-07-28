// Sobrecarga y carga de funciones

// Carga de funciones

function saludar() {
    hola()
}

function hola() {
    console.log('Hola, soy la funcion hola()')
}

saludar()

// Primero interpreta que debe ejecutar la función saludar
// Dentro de la función saludar está la función hola()
// Y dentro de hola, está un saludo.



// Forma ilustrativa de mostrar cómo funciona la carga de funciones
// 1. global()
// 2. saludar() global()
// 3. hola() saludar() global()
// 4. saludar() global()
// 5. global()



// Funciones recursivas
/* function recursivo() {
    recursivo()
}

recursivo() */