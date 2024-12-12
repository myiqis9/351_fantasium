<?php include 'init.php'; 

//checks for posted data
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    //variables
    $inv = json_decode($_POST['inventory']);
    $ter = json_decode($_POST['terrarium']);
    $collection = $client->CART351->user_list;
  
    //updating inventory
    $insert = $collection->findOneAndUpdate(
        [ 'username' => $_SESSION['user'] ],
        [ '$set' => [ 'inventory'=> $inv, 'terrarium' => $ter ]]);
    
    $msg = array('message' => 'success');
    echo json_encode($msg);
    exit;
  }
  ?>

<?php include 'header.php'; ?>
<div id="main">
            <br></br>
            <h2>Inventory</h2>

            <div id="inventory">
            </div>
        </div>
    <script src="../js/inventory.js"> </script>
    <script src="../js/script.js"> </script>
</body>
</html>