<?php include 'init.php';

//checks for posted data
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        //variables
        $inv = json_decode($_POST['inventory']);
        $collection = $client->CART351->user_list;

        //updating inventory
        $insert = $collection->findOneAndUpdate(
            [ 'username' => $_SESSION['user'] ],
            [ '$set' => [ 'inventory'=> $inv ]]);
        
        $msg = array('message' => 'success');
        echo json_encode($msg);
        exit;
    }
?>

<?php include 'header.php'; ?>
<div id="main">
            <br></br>
            <h2>Exploration</h2>
            You have X expeditions left.
            <br></br>
            Last gained material : X
            <br></br>
            <div id="exploration"></div>
            <!-- <p>^ This is still a WIP</p>
            <button id="get_item" onclick="explore()">Forage for items</button> -->
        </div>
    <script src="../js/exploration.js"> </script>
    <script src="../js/script.js"> </script>
</body>
</html>