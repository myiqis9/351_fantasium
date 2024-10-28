//mapbox access token
mapboxgl.accessToken = pk.eyJ1IjoibXlpcWlzOSIsImEiOiJjbTJubjZlZTEwODBwMmxwdW1uMXIwMDM3In0.HmJ3h34x-lCS-zrinDHgRg;

//declare variables
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/standard',
    zoom: 3,
    center: [30, 15]
});

//get player location
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(usePosition, showError);
    } 
    else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  function usePosition(position) {
    console.log("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
    findPlayerBiome(position.coords.latitude, position.coords.longitude);
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

  function findPlayerBiome(lat, long) {
    const bbox = [
        [lat - 5, long - 5],
        [lat + 5, long + 5]
    ]; //area around player location

    const playerPos = map.queryRenderedFeatures(bbox);
    console.log(playerPos[0].properties);
  }