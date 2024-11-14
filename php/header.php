<!DOCTYPE html>

<head>
    <title>Fantasium</title>
    <meta charset="utf-8" />

    <!-- style & class scripts -->
    <link rel="stylesheet" type="text/css" href="../css/style.css" />

    <!-- Library script -->
    <script src="../p5.min.js"></script>

    <!-- js classes -->
    <script src="js/classes/player.js"></script>
    <script src="js/classes/item.js"></script>

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
        <button id="p_profile" onclick="location.href='profile.html'">My profile</button>
        <button id="p_terrarium" onclick="location.href='terrarium.html'">Terrarium</button>
        <button id="explore_page" onclick="location.href='exploration.html'">Explore</button>
        <button id="trading_page" onclick="location.href='trading.html'">Trading</button>
        <button id="p_inventory" onclick="location.href='inventory.html'">Inventory</button>
        <button id="community_page" onclick="location.href='community.html'">Community</button>
      </div>