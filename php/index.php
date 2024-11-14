<!DOCTYPE html>

<?php 

// include the composer library
//require_once __DIR__ . '/vendor/autoload.php';

//put into try catch clause
//try {
 
    //1: connect to mongodb atlas
    //$client = 
    //new MongoDB\Client(
       // "mongodb+srv://admin:ILikeBeans1234@cart351.quopp.mongodb.net/?retryWrites=true&w=majority&appName=CART351"
    //);
    //echo("valid connection");
    //echo("<br>");

    //2: connect to collection (that exists):
//$collection = $client->CART351->plantItems;
//echo($collection);
 
 // use this as reference when creating player login - this INSERTS a NEW object into the collection
 //3: insert into the collection
    //$insertOneResult = $collection->insertOne([
        //'plant name' => 'cactus',
        //'description' => 'lalllallla',
        //'location' => 'montreal',
    //]);
 
//printf("Inserted %d document(s)\n", $insertOneResult->getInsertedCount());
//var_dump($insertOneResult->getInsertedId());
    //}
    //catch (Exception $e) {
        //echo 'Caught exception: ',  $e->getMessage(), "\n";
    //}
?>

<?php include 'header.php'; ?>
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
            <button id="location">Click me!!!</button>
            <div id="map"></div>
        </div>
    <script src="../js/location.js"> </script>
</body>
</html>