// Declarando o creando un objeto de clase Persona
class Persona {
    // Variables que forman parte de la persona - ATRIBUTOS
/*     nombre;
    edad;
    isDeveloper; */

    // Método por defecto para crear una clase
    constructor(nombre, edad, isDeveloper) {
        // this -> Hace referencia al objeto interno
        // Es decir, a los atributos nombre, edad, isDeveloper le asigno lo que le paso a través del constructor.
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    // Todas las funciones tanto en objetos como en clases se denominan MÉTODOS
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} anos`);
    }
}


// Utilizando el método constructor
const nuevaPersonaJairo = new Persona("Jairo Yesid", 48, false)
// Al observar el consolelog, vemos que es un objeto de clase Persona
console.log(nuevaPersonaJairo)



// Instanciación 
// Forma de inicializar una clase 

let numero = 60 // Inicializando 
console.log(typeof numero)

let personaMariaPaula = new Persona("Maria Paula", 19, false) // Instanciando
console.log(typeof personaMariaPaula)

// instanceOf es similar a typeOf pero para clases
console.log(personaMariaPaula instanceof Persona)


