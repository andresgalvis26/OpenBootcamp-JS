// Declarando o creando un objeto de clase Persona
class Persona {
    // Private -> #
    #nombre
    #edad

    // Protected -> _
    _isDeveloper = true;
    constructor(nom, ed) {
        this.#nombre = nom;
        this.#edad = ed;
    }

    saludo() {
        console.log(
            `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} anos`
        );
    }

    obtenNombre() { // Esto sería una función Getter -> Nos permite acceder de forma controlada a un atributo privado.
        return this.#nombre;
    }

    getEdad() {
        return this.#edad;
    }

    setEdad(nuevaEdad) {
        this.#edad = nuevaEdad;
    }

    // Este solo sería accesible desde aquí, desde fuera imposible.
    #obtenEdad() {
        return this.#edad;
    }
}


const personaHernando = new Persona("Hernando Rojas", 65)
console.log(personaHernando)

// Accediendo a los atributos o métodos 
//console.log(personaHernando.nombre)
//console.log(personaHernando.edad)


// Cuando creamos ciertas clases o de obejtos, deseemos proteger ciertas partes
// Para eso existen las propiedades privadas, es decir, NO son modificables desde fuera del constructor.
// Cuando es posible cambiarlas es porque están públicas

// Cómo declarar protected -> #
    // Protected -> #
/*     #nombre
    #edad */

// Al realizar esto, NO es posible acceder a los valores desde fuera.
//console.log(personaHernando.obtenNombre())
//console.log(personaHernando.#obtenEdad())
//console.log(personaHernando._isDeveloper)




// Probando getter y setters
// Creando un getter
// A través de la función get podemos acceder a un valor privado de forma controlada.
const edad = personaHernando.getEdad()
console.log(edad)


// Creando un setter
// Quiero cambiar la edad de la persona
personaHernando.setEdad(70)
console.log(personaHernando.getEdad())