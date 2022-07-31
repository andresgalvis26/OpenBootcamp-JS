// Sesiones y almacenacimiento a nivel de navegador
// Toda la información la veremos en la pestaña "Aplication"

// Trabajando con el localStorage
// Añadiendo items al localStorage
localStorage.setItem("Nombre", "Jairo")
//localStorage.setItem("Nombre", "Carlos")

// Añadiendo un objeto al localStorage - stringify
localStorage.setItem("persona", JSON.stringify({nombre: "Martha Cecilia", edad: 34}))

// Obteniendo items del localStorage
console.log(localStorage.getItem("Nombre"))

// Obteniendo un objeto del localStorage - parse
// Si no se usa parse, se trae todo como un string
console.log(JSON.parse(localStorage.getItem("persona")))


// Remover un item del localStorage
localStorage.removeItem("Nombre")



// Trabajando con el sessionStorage
// Este nombre de sesion SÓLO estará en la pestaña que se ejecute
sessionStorage.setItem("nombre-sesion", "AnFeGa26")

console.log(sessionStorage.getItem("nombre-sesion"))



// Cookies 
// Tiene una forma de trabajar diferente
// Debemos acceder a traves de document.cookie
document.cookie = "nombreCookie=AnFeGaCookie"
console.log(document.cookie)

// Darle caducidad
document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString()
console.log(document.cookie)