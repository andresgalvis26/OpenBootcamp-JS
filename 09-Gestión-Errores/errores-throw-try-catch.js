const miFuncion = val => {
    if (typeof val === 'number'){
        return 2 * val
    }
    //return false;
    throw new Error('El valor debe ser de tipo número.')
}

console.log(miFuncion(12))
//console.log(miFuncion('UnString'))

const numero = 15


// palabra reservada throw -> lanzar




// palabras clave -> try{} catch {}
try {
    // Código que puede fallar
    console.log('Está ejecutándose de manera correcta')
    const doble = miFuncion(numero)
    console.log(doble)
} catch(e) {
    // En caso de fallar, quiero que ejecutes
    console.error(e)
    console.log('ERROR!')
} finally {
    console.log('Esto se va a ejecutar tanto si se produce un error, como si no existe ninguno.')
}



// Tratar de envolver nuestro código en try catch para controlar errores



// Errores más comunes 
// InternalError, SyntaxError, TypeError, RangeError y ReferenceError

// IE -> Cada vez que hay un problema interno
// SE -> Cada vez que hay un fallo de sintaxis o mal escrito algo
// TE -> Más comunes, pasarle a una función un tipo de dato que NO está esperando (espera un number y se le pasa un bool)
// RE -> Tenemos una lista de 10 elementos y queremos acceder al elemento 12. NO EXISTE -> RangeError
// REFERR -> NO existe esa referencia a la que estamos refiriendonos.