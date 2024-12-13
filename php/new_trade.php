<?php include 'init.php'; 

//checks for posted data
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  //variables
  $inv = json_decode($_POST['inventory']);
  $trade = json_decode($_POST['trade']);

  $collection = $client->CART351->user_list;
  $tradecoll = $client->CART351->trade_list;

  //updating inventory
  $insert = $collection->findOneAndUpdate(
      [ 'username' => $_SESSION['user'] ],
      [ '$set' => [ 'inventory' => $inv ]]);


  $insert = $tradecoll->insertOne([
      'creator' => $_SESSION['user'],
      'creatoroffer' => $trade
    ]);
  
  $msg = array('message' => 'success');
  echo json_encode($msg);
  exit;
}
?>

<?php include 'header.php'; ?>
<div id="main">
  <br></br>
  <h2>New Trade</h2>
  <div id="new-trade">
  <div class="trade-container">
  <div class="trade-box trade-left eighty" id="trade">
  </div>
  <button class="trade-box trade-right twenty" id="submit">Create Trade</div>
  </div>
  <br></br>
  <div id="inventory"></div>
</div>
</div>
<script src="../js/new_trade.js"> </script>
<script src="../js/script.js"> </script>
</body>
</html>