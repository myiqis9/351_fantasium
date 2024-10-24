// vvvvv MAIN SCRIPT ACTIVITY BELOW vvvvvv

// TO MAKE THE MAP APPEAR YOU MUST ADD YOUR ACCESS TOKEN FROM // https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1Ijoic3Jvc2VuYmUiLCJhIjoiY20yZ2FydHRxMDBlMDJrcHR4Z2J5NXk5ZyJ9.YnR-gB4FNrEzr_z4bRG6iw';
// initiate a new map by passing an object describing a config
// for more info see: https://docs.mapbox.com/mapbox-gl-js/api/map/
var map = new mapboxgl.Map({
    // id of div that will hold map
    container: 'map',
    // one of the existing mapbox map styles
    style: 'mapbox://styles/mapbox/light-v10',
    // style:'mapbox://styles/mapbox/standard',
    // zoom in (greater = smaller area displayed)
    zoom: 4,
    // longitude, latitude of the map center
    center: [-73, 45]
});

// declare an async function that calls an API endpoint for dataset metadata
// takes one parameter
//   (uuid) the Dataset ID
// returns an object interpreted from the JSON response
const callApiDatasetMetadata = async (uuid) => {
    
    // fetch the API endpoint (GET request)
    //const response = await fetch('https://api.resourcewatch.org/v1/dataset/' + uuid + '?includes=layer,metadata')

    const response = await fetch('layerData.json')
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}


const getBiomesSlug = (obj) => {
    return obj['data']['attributes']['layer'][0]['attributes']['slug'];
}


// declare a function that returns the Mapbox-ready raster tile URL template
// (example.com/{x}/{y}/{z}) from the response object returned by `callApiDatasetMetadata`
// takes one parameter
//   (obj) the API response data
// returns a string representing a templated URL, ready to be used by webmaps
const getTileLayerUrlForBiomes = (obj) => {
    // drill down to get a useful object
    const layerConfig = obj['data']['attributes']['layer'][0]['attributes']['layerConfig'];
    // get the URL template parameters
    const defaultParams = layerConfig['params_config'];
    console.log(layerConfig)

      // get the full templated URL
      let url = layerConfig['source']['tiles'][0];
      console.log(url)
      // substitute default parameters iteratively
      for (const param of defaultParams) {
    console.log(param)
      url = url.replace('{' + param['key'] + '}', param['default'].toString());
      }
      console.log(url)

    // // get the full templated URL
    //  let url = layerConfig['source'];
    //  console.log(url)
    // // substitute default parameters iteratively
    // for (const param of defaultParams) {
    // url = url.replace('{' + param['key'] + '}', param['default'].toString());
    // }
    return 0;
}




// add the data layers once the map is loaded (API calls are asnyc)
 map.on('load', async () => {

//     // LOAD TREE COVER LOSS RASTER TILES
//     // declare the Dataset ID for Biomes
  const datasetIdForBiomes = '31f11692-7512-40ba-abd3-4151595ea454';
  //const datasetIdForTCL = 'b584954c-0d8d-40c6-859c-f3fdf3c2c5df';

//     // fetch remote dataset metadata (we have it in a json file already)
   const metadataForBiomes = await callApiDatasetMetadata(datasetIdForBiomes);
   console.log(metadataForBiomes);

//     // get an identifier for the Tree Cover Loss raster tiles
    const slugForBiomes = getBiomesSlug(metadataForBiomes);
    console.log(slugForBiomes)


    map.addSource('mapbox-biomes', {
        type: 'vector',
        // Use any Mapbox-hosted tileset using its tileset id.
        // Learn more about where to find a tileset id:
        // https://docs.mapbox.com/help/glossary/tileset-id/
        
        url: 'mapbox://srosenbe.619ylkt1'
    });

    //!!!!!!!!!!!!!!!
    map.addLayer(
        {
            'id': 'terrain-data',
            'type': 'fill',
            'source': 'mapbox-biomes',
            'source-layer': 'bio_042_biome_ecoregion_1-cnfake',
            
            'paint': {
                'fill-outline-color': 'rgba(255,0,0,.5)',
                    'fill-color': [
                        "interpolate",
                        ["linear"],
                        ["get", "BIOME_NUM"],
                        1,
                        "rgba(255, 0, 0,.5)",
                        14,
                        "rgba(102, 170, 229,0.5)"
                      ]
            }
        }
    );

    //!!!!!!!!!!!
    map.on('click', (e) => {
        // Set `bbox` as 5px reactangle area around clicked point.
        const bbox = [
            [e.point.x - 5, e.point.y - 5],
            [e.point.x + 5, e.point.y + 5]
        ];
        // Find features intersecting the bounding box.
        const selectedFeatures = map.queryRenderedFeatures(bbox, {
            layers: ['terrain-data']
        });

        console.log(selectedFeatures[0].layer);
        console.log(selectedFeatures[0].properties);
    });
 });