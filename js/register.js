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

const connectEl = document.getElementById("connect");
const txtEl = document.getElementById("connectTxt");
const regForm = document.getElementById("register");
regForm.addEventListener("submit", submitForm); 
const locationBtn = document.getElementById("location");
locationBtn.addEventListener("click", getLocation);
let biome = null;

//get player location
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(usePosition, showError);
    } 
    else {
      txtEl.innerText = "Geolocation is not supported by this browser.";
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

    switch(pos.BIOME_NAME) {
      case "Tropical & Subtropical Moist Broadleaf Forests":
      case "Tropical & Subtropical Dry Broadleaf Forests":
        biome = "tropical";
        break;

      case "Tundra":
      case "Boreal Forests/Taiga":
      case "Rock and Ice":
      case "Temperate Conifer Forests":
        biome = "taiga"
        break;
      
      case "Mediterranean Forests, Woodlands & Scrub":
      case "Flooded Grasslands & Savannas":
      case "Mangroves":
        biome = "waterside";
        break;

      case "Temperate Broadleaf & Mixed Forests":
      case "Tropical & Subtropical Coniferous Forests":
        biome = "forest";
        break;

      case "Montane Grasslands & Shrublands":
      case "Temperate Grasslands, Savannas & Shrublands":
        biome = "grassland";
        break;

      case "Tropical & Subtropical Grasslands, Savannas & Shrublands":
      case "Deserts & Xeric Shrublands":
        biome = "desert";
        break;
    }

    connectEl.innerHTML = `You are in the <b>${biome}</b> biome!<br><br>`;
    locationBtn.style.visibility = "hidden";
    regForm.style.visibility = "visible";
  }
  
  function showError(error) {
    let errorMsg;

    switch(error.code) {
      case error.PERMISSION_DENIED:
        errorMsg = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        errorMsg = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        errorMsg = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        errorMsg = "An unknown error occurred.";
        break;
    }

    txtEl.innerHTML = "An error has occurred in trying to fetch your location. <br> Please refresh the page, check your browser settings and try again. <br><br> ERROR: " + errorMsg;
  }

  function submitForm() {
    let data = new FormData(regForm);
    for(let pair of data.entries()) {
      console.log(pair[0] + ' - ' + pair[1]);
    }

    fetch('../php/register.php')
    .then()
  }
