// Inheritance - Herencia
// Anteriormente hemos creado la clase Persona
// Queremos hacer la clase Desarrollador, que además pertenecería a la clase Persona

class Persona {
    _nombre
    _edad

    constructor(nom, ed) {
        this._nombre = nom;
        this._edad = ed;
    }

    saludo() {
        console.log(
            `Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años`
        );
    }
}

// La utilidad de la Herencia se da en si, aquí tenemos otro campo
class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje){
        // NO es posible construir otro constructor porque ya está el de la clase Padre (Persona)
        // Entonces vamos a llamarlo con super
        super(nombre, edad)
        this.lenguaje = lenguaje
    }
    
    // Lo volvemos a definir - Estamos sobreescribiendo la definición del método 
    // En inglés Override
    saludo() {
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }

}


// Observamos que sin agregar nada a la clase Desarrollador, esta tomando todo el constructor de Persona
const nuevoDevBreinner = new Desarrollador('Breinner Sarmiento', 25, "JavaScript")
console.log(nuevoDevBreinner)
console.log(nuevoDevBreinner.saludo())


// Que pasaria si yo quisiera que el saludo de los desarrolladores fuera diferente?
// Para ello, vamos a entrar en un concepto llamado Polimorfismo
// Polimorfismo -> Varias formas -> Las clases en JS pueden tomar diferentes formas
// Cómo se refleja esto?


// Los atributos protected se están pasando de la clase Padre hacia la clase Hija con sus valores...



