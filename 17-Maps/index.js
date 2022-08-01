let marker;
let map;

function initMap() {
    //console.log("Inicializando el mapa...")

    // Definir una posición (lat y lon)
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: posicion
    })

    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición Inicial"
    })

    // Obtener la geolocalización
    // marker.setPosition({lat, lng})
    geoPosiciona()

}

function geoPosiciona() {
    if (navigator.geolocation){
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000}
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalización.")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }

    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)

}

function onError(error) {
    console.log(error)
}