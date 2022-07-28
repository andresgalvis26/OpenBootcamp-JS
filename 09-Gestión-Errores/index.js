const logger = require('./logger')

// Esta sería una de las formas de llevar un registro sobre nuestra aplicación
/* console.log('HOLA :) ESTOY SALIENDO POR PANTALLA')

console.info('Hola esto es un mensaje informativo')

console.debug('Esto es un mensaje de debug')

console.warn('Esto es un mensaje de advertencia')

console.error('Esto es un error') */


// Librería Winston
// Nos permitirá gestionar los logs de la manera más profesional posible
// npm install winston

// Se creará una carpeta llamada node_modules, la cual contendrá todos los módulos necesarios para el correcto funcionamiento de lo que 
// instalamos por npm
/* const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }), // Tenemos la posibilidad de indicarle el nivel
    new winston.transports.File({ filename: 'combined.log' }),
  ],
}); */

//logger.log('HOLA :) ESTOY SALIENDO POR PANTALLA')
logger.info('Hola esto es un mensaje informativo')
logger.debug('Esto es un mensaje de debug')
logger.warn('Esto es un mensaje de advertencia')
logger.error('Esto es un error')

// Lo ejecutamos y no sucede nada 
// Veremos que se crean los archivos error.log y combined.log


// El tema de los niveles está definido en la documentación de Winston

