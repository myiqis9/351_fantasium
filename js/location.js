//mapbox access token
mapboxgl.accessToken = "pk.eyJ1IjoibXlpcWlzOSIsImEiOiJjbTJubjZlZTEwODBwMmxwdW1uMXIwMDM3In0.HmJ3h34x-lCS-zrinDHgRg";

//declare variables
var map = new mapboxgl.Map({
    // id of div that will hold map
    container: 'map',
    // one of the existing mapbox map styles
    style: 'mapbox://styles/myiqis9/cm2tkmlz300ad01ntc5cxcprj',
    // style:'mapbox://styles/mapbox/standard',
    // zoom in (greater = smaller area displayed)
    zoom: 15,
    // longitude, latitude of the map center
    center: [-73, 45]
});

const locationBtn = document.getElementById("location").addEventListener("click", getLocation);
var player = null;

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
    //jump map to user coordinates
    map.jumpTo({center: [position.coords.longitude, position.coords.latitude]});
    //using settimeout because map.on('moveend') was WAY too inconsistent and unreliable
    setTimeout(() => {
        const playerPos = map.queryRenderedFeatures();
        findPlayerBiome(playerPos[0].properties);
    }, 300);
  }

  function findPlayerBiome(pos) {
    console.log(pos.BIOME_NAME);
    player = new Player("test", null, null, [], [], []);

    switch(pos.BIOME_NAME) {
      case "Tropical & Subtropical Moist Broadleaf Forests":
      case "Tropical & Subtropical Dry Broadleaf Forests":
        player.biome = "tropical";
        break;

      case "Tundra":
      case "Boreal Forests/Taiga":
      case "Rock and Ice":
      case "Temperate Conifer Forests":
        player.biome = "taiga"
        break;
      
      case "Mediterranean Forests, Woodlands & Scrub":
      case "Flooded Grasslands & Savannas":
      case "Mangroves":
        player.biome = "waterside";
        break;

      case "Temperate Broadleaf & Mixed Forests":
      case "Tropical & Subtropical Coniferous Forests":
        player.biome = "forest";
        break;

      case "Montane Grasslands & Shrublands":
      case "Temperate Grasslands, Savannas & Shrublands":
        player.biome = "grassland";
        break;

      case "Tropical & Subtropical Grasslands, Savannas & Shrublands":
      case "Deserts & Xeric Shrublands":
        player.biome = "desert";
        break;
    }

    console.log(player);
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

  // function findPlayerBiome(long, lat) {
  //   console.log(map);
  //   map.center = [long, lat];//area around player location
  //   console.log("Map center: " + map.center);
  //   map.panTo(map.center, {duration: 200}).on('moveend', () => {
  //       const playerPos = map.queryRenderedFeatures();
  //       console.log(playerPos[0].properties);
  //   });
  // }
