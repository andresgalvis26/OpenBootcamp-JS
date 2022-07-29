// Creando el objeto persona
const persona = {
    nombre: "Gorka",
    edad: 34,
    isDeveloper: true,
    // Como variables o atributos pueden ser funciones
    saludo: function () {
        console.log("Hola");
    },
};

// Visualizando el objeto por consola
console.log(persona);

persona.saludo();


// Que pasa si quiero crear otra persona
// Nuevamente las mismas líneas de código para otra persona
const otra_persona = {
    nombre: "Miguel",
    edad: 23,
    isDeveloper: false,
    // Como variables o atributos pueden ser funciones
    saludo: function () {
        console.log("Hola");
    },
}


// Que pasas si quiero cambiar ahora el saludo? 
// Debo modificar el Hola en ambos sitios del código 

// Este proceso es muy tedioso -> Solución sería crear una función

// Función factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        // Cuando tenemos una propiedad cuyo nombre es igual al valor que se le está pasando
        // Se puede obviar
/*         nombre: nombre,
        edad: edad,
        isDeveloper: isDeveloper, */
        nombre, 
        edad,
        isDeveloper,
        saludo: function() {
            console.log("Hola");
        }
    }
}

// Cuando querramos crear una nueva persona, podemos usar la función
const nuevaPersonaJuan = creaPersona("Juan", 23, true)
console.log(nuevaPersonaJuan)


const nuevaPersonaMaria = creaPersona("Maria", 30, false)
console.log(nuevaPersonaMaria)