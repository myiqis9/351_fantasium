<?php 
//include the composer library
require_once __DIR__ . '/vendor/autoload.php';
use Dotenv\Dotenv;
session_start();

//put into try catch clause
try {
    $dotenv = Dotenv::createImmutable(paths: __DIR__);
    $dotenv->load();
    $uri = $_ENV['URI'];
 
    //1: connect to mongodb atlas
    $client = 
    new MongoDB\Client(uri: $uri);
    echo("valid connection");
    echo("<br>");
}
    catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    }
?>

<!DOCTYPE html>
<head>
    <title>Fantasium</title>
    <meta charset="utf-8" />

    <!-- style & class scripts -->
    <link rel="stylesheet" type="text/css" href="../css/style.css" />

    <!-- Library script -->
    <script src="../p5.min.js"></script>

    <!-- js classes -->
    <script src="../js/classes/player.js"></script>
    <script src="../js/classes/item.js"></script>

    <!-- mapbox GL -->
    <script src="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.js"></script>
    <link href="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css" rel="stylesheet" />
</head>

<body style = "background: #3A2618">
    <div id="container">
      <!-- game title and main menu buttons -->
      <div id="menu">
        <!-- title will later be replaced by an img -->
        <h1>Fantasium</h1>
        <button id="p_profile" onclick="location.href='profile.php'">My profile</button>
        <button id="p_terrarium" onclick="location.href='terrarium.php'">Terrarium</button>
        <button id="explore_page" onclick="location.href='exploration.php'">Explore</button>
        <button id="trading_page" onclick="location.href='trading.php'">Trading</button>
        <button id="p_inventory" onclick="location.href='inventory.php'">Inventory</button>
        <button id="community_page" onclick="location.href='community.php'">Community</button>
      </div>