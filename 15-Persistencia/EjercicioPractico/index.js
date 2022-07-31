const nombres = "Andres Felipe"
const apellidos = "Galvis Galviz"

const nombreCompleto = nombres + " " + apellidos
console.log(nombreCompleto)


// Agregar al localStorage
localStorage.setItem("nombreCompleto", nombreCompleto)


// Agregar al sessionStorage
sessionStorage.setItem("nombreCompleto", nombreCompleto)


// Agregar a las cookies y expira en 2 min
document.cookie = `nombreCompletoCookie=${nombreCompleto};expires=${new Date(now.getTime() + 2 * 60000)}`