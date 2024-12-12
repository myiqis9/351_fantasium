<?php include 'init.php';

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

              <button id="new_trade" onclick="location.href='new_trade.html'">Start a new trade</button>

            <!-- all available trades show up here. in the future, the img of the item shows up too -->

            <div class="trade-container">
                <p id = trade-number>Trade #238870</p>
                <div class="trade-box trade-left eighty">
                    Materials Offered:
                    <br></br>
                    Root
                  </div>
                
                  <div class="trade-box trade-right twenty">
                    Offer on Trade
                  </div>
            </div>
</div>
<script src="../js/trading.js"> </script>
<script src="../js/script.js"> </script>
</body>
</html>