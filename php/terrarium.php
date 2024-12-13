<?php include 'init.php'; 

//checks for posted data
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    //variables
    $terr = json_decode($_POST['terrarium']);
    $terr_name = $_POST['terr_name'];
    $collection = $client->CART351->user_list;

    //updating inventory
    $insert = $collection->findOneAndUpdate(
        [ 'username' => $_SESSION['user'] ],
        [ '$set' => [ 'terrarium'=> $terr, 'terr_name' => $terr_name ]]);
    
    $msg = array('message' => 'success');
    echo json_encode($msg);
    exit;
}

?>

<?php include 'header.php'; ?>
<div id="main">
            <br></br>
            <!-- the terrarium name would get updated depending on what the user types (not funtional tho this is just the visual)-->
            <input type="text" id="terra_name" value="" />

            <div id="terrarium">
            </div>
            <button id="saveBtn" onclick="saveTerrarium()">Save Terrarium</button>

            <!-- the contents of this div show up after the user has clicked on an object to move/upgrade -->
            <div id="item-container">
                <div id="item-upgrade">item here</div>
                <div id="mats-needed">materials needed here</div>
            </div>
        </div>
    <script src="../js/terrarium.js"> </script>
    <script src="../js/script.js"> </script>

</body>
</html>