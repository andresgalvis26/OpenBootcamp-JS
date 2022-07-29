// Ejercicio Práctico

class Estudiante {
    nombre = "Andres Felipe Galvis";
    asignatura = ["JavaScript", "HTML", "CSS"]

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignatura: this.asignatura
        }
    }
}


// Instancia de Estudiante
const estudianteUniversitario = new Estudiante()

console.log(estudianteUniversitario.obtenDatos())