<?php include 'init.php';


if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET["action"])) {
  $collection = $client->CART351->trade_list;
  
    //updating inventory
    $insert = $collection->find(
      [ ] ],
      [ ]]);
}

?>



<?php include 'header.php'; ?>
<div id="main">
<br></br>
            <h2>Trading Center</h2>
            <div class="search-container">
                <input type="text" placeholder="Trade Number" class="search-bar">
                <!-- material offered and requested could maybe be a drop down choice in the future? -->
                <input type="text" placeholder="Material Offered" class="search-bar">
                <input type="text" placeholder="Material Requested" class="search-bar">
              </div>

              <button id="new_trade" onclick="location.href='new_trade.php'">Start a new trade</button>

            <!-- all available trades show up here. in the future, the img of the item shows up too -->
             <div id="trades"></div>
</div>
<script src="../js/trading.js"> </script>
<script src="../js/script.js"> </script>
</body>
</html>