// Funciones asíncronas y promesas

// Cuando hacemos una llamada a una BD de datos externa, puede tardar algo de tiempo
// NO depende de nuestra infraestructura

function miAsinc() {
    // Hace una llamada a una base de dato externa
    // Puede darnos algún error
}

// Todo esto se define a través de una promesa


// Definir una promesa
const miPromesa = new Promise((resolve, reject) => {

    const i = Math.floor(Math.random() * 2)
    // Si está todo correcto
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})



// Cómo se pueden consumir las promesas
// .then() y .catch()
miPromesa
    .then(() => console.log('Se ha ejecutado de forma correcta.')) // Forma correcta
    .catch(() => console.log('ERROR'))  // ERRORES dentro de la promesa
    .finally(() => console.log('Yo me ejecuto siempre.'))




// async y await