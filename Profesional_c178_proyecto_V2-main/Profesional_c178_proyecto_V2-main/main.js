//Latitud y longitud para abrir el mapa
let latitude = 22.7868542, longitude = 88.3643296;

// Inicializando Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

//Crear el mapa con zoom 4


//Agregar el control Geocoder



//Variable para elegir la imagen amber desde main.html
var img1 = document.querySelector("#amber")
// Crea un marcador del Fuerte Amber en Jaipur y agrégalo al mapa.
var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([75.85133, 26.98547])
	.addTo(map);


//Variable para elegir la imagen gateway desde main.html

// Crea un marcador de la Entrada de la India en Mumbai y agrégalo al mapa.


//Variable para elegir la imagen gate desde main.html

// Crea un marcador de la Puerta de la India y agrégalo al mapa.


//Variable para elegir la imagen lotus desde main.html

// Crea un marcador en el Templo del Loto en Delhi y agrégalo al mapa.


//Variable para elegir la imagen victoria desde main.html

//Crea un marcador del Victoria Memorial en Kolkata y agrégalo al mapa.

