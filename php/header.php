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
    <script src="../js/classes/trade.js"> </script>

    <!-- mapbox GL -->
    <script src="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.js"></script>
    <link href="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css" rel="stylesheet" />
</head>
    <div id="container">
        <!-- user info at the top of the main box -->
        <div id="top-info">
            <p id="biomeInfo"></p>
            <p id ="userInfo"></p>
        </div>
      <!-- game title and main menu buttons -->
      <div id="menu">
        <a href="index.php">
            <img src="../assets/images/fantasium-logo1.png" width="314" height="125">
        </a>
        <button id="p_profile" onclick="location.href='profile.php'">My profile</button>
        <button id="p_terrarium" onclick="location.href='terrarium.php'">Terrarium</button>
        <button id="explore_page" onclick="location.href='exploration.php'">Explore</button>
        <button id="trading_page" onclick="location.href='trading.php'">Trading</button>
        <button id="p_inventory" onclick="location.href='inventory.php'">Inventory</button>
        <button id="community_page" onclick="location.href='community.php'">Community</button>
      </div>