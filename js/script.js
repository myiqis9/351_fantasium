//biome_name and biome_num
mapboxgl.accessToken = 'pk.eyJ1IjoibXlpcWlzOSIsImEiOiJjbTJubjZlZTEwODBwMmxwdW1uMXIwMDM3In0.HmJ3h34x-lCS-zrinDHgRg';
document.getElementById("location").addEventListener("click", getLocation);

//getting user location
function getLocation() {
    console.log("getting position");
    if(navigator.geolocation) navigator.geolocation.getCurrentPosition(usePosition, showError);
    else console.log("Geolocation not supported.");
}

function usePosition(position) {
    console.log(`latitude: ${position.coords.latitude} longitude: ${position.coords.longitude}`);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
          console.log("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.log("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          console.log("An unknown error occurred.");
          break;
      }
}

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 5 // starting zoom
});