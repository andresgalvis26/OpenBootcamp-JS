const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' })
  ],
});


// Función que devuelve el error personalizado
function mostrarError() {
    throw new Error('Este es un error personalizado por Andrés Felipe Galvis Galviz...')
}


// Try - catch para la ejecución del error
try {
    // Código que puede fallar
    mostrarError()
} catch (e) {
    // En caso de fallar, ejecuta esto
    logger.log('error', e.toString())
}