let marker;
let map;

function initMap() {
    //console.log("Inicializando el mapa...")

    // Definir posiciones (lat y lon)
    const posicionCataratas = {
        lat: -22.9510,
        lng: -43.2065
    }

    const posicionEstadioLiverpool = {
        lat: 53.430759,
        lng: -2.961425
    }

    const posicionEstatuaLibertad = {
        lat: 19.314512,
        lng: -99.112203

    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: posicionCataratas
    })

    markerCataratas = new google.maps.Marker({
        position: posicionCataratas,
        map,
        title: "Cataratas del Niagara"
    })

    markerEstadioLiv = new google.maps.Marker({
        position: posicionEstadioLiverpool,
        map,
        title: "Estadio del Liverpool FC"
    })

    markerEstatuaLib = new google.maps.Marker({
        position: posicionEstatuaLibertad,
        map,
        title: "Estatua de la Libertad"
    })
}