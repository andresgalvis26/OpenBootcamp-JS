let nombre = "Andres   "
let apellido = "Galvis"
let estudiante = nombre + apellido
let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()
let estudianteLen = estudiante.length
let estudiantePrimeraLetra = nombre.charAt(0) 
let estudianteUltimaLetra = apellido.charAt(5)
let estudianteSinEspacios = estudiante.trimEnd().length
let isNombreinEstudiante = estudiante.includes("Andres")


console.log(estudianteLen)
console.log(estudianteSinEspacios)
console.log(isNombreinEstudiante)
