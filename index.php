<!DOCTYPE html>

<?php 
// include the composer library
require_once __DIR__ . '/vendor/autoload.php';

//put into try catch clause
try {
 
    //1: connect to mongodb atlas
    $client = 
    new MongoDB\Client(
        "mongodb+srv://admin:ILikeBeans1234@cart351.quopp.mongodb.net/?retryWrites=true&w=majority&appName=CART351"
    );
    echo("valid connection");
    echo("<br>");

    //2: connect to collection (that exists):
$collection = $client->CART351->plantItems;
//echo($collection);
 
 // use this as reference when creating player login - this INSERTS a NEW object into the collection
 //3: insert into the collection
    $insertOneResult = $collection->insertOne([
        'plant name' => 'cactus',
        'description' => 'lalllallla',
        'location' => 'montreal',
    ]);
 
printf("Inserted %d document(s)\n", $insertOneResult->getInsertedCount());
var_dump($insertOneResult->getInsertedId());
    }
    catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    }
?>

<head>
    <title>Fantasium</title>
    <meta charset="utf-8" />

    <!-- style & class scripts -->
    <link rel="stylesheet" type="text/css" href="css/style.css" />

    <!-- mapbox GL -->
    <script src="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.js"></script>
    <link href="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css" rel="stylesheet" />

    <!-- js classes -->
    <script src="js/classes/player.js"> </script>
    <script src="js/classes/item.js"> </script>
</head>

<body style = "background: #3A2618">
    <div id="container">
        <!-- game title and main menu buttons -->
        <div id="menu">
            <!-- title will later be replaced by an img -->
            <h1>Fantasium</h1>
            <button id="p_profile" onclick="location.href='html/profile.html'">My profile</button>
            <button id="p_terrarium" onclick="location.href='html/terrarium.html'">Terrarium</button>
            <button id="explore_page" onclick="location.href='html/exploration.html'">Explore</button>
            <button id="trading_page" onclick="location.href='html/trading.html'">Trading</button>
            <button id="p_inventory" onclick="location.href='html/inventory.html'">Inventory</button>
            <button id="community_page" onclick="location.href='html/community.html'">Community</button>
        </div>
        <div id="main">
            <br></br>
            <h2>Welcome!</h2>
            <form>
                <label for="username">Username : </label>
                <input type="text" id="username" name="username" placeholder="Enter Username">
                <br> </br>
                
                <label for="password">Password : </label>
                <input type="password" id="password" name="password" placeholder="Enter Password">
                <br> </br>

                <button type="submit">Login</button>
            </form>
            <br> </br>
            <button id="location" onclick="getLocation()">Click me!!!</button>
            <div id="map"></div>
        </div>
    </div>

    <!-- main script.js call -->
    <script src="js/location.js"> </script>
    <script src="js/script.js"> </script>
</body>
</html>