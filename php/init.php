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
    $client = new MongoDB\Client(uri: $uri);
}
catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

//checks for get username
if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET["action"])) {
    if(isset($_SESSION['user'])) {
        //find user in database
        $collection = $client->CART351->user_list;
        $currentUser = $collection->findOne(["username" => $_SESSION['user']]);

        foreach($currentUser as $item) {
           echo json_encode($item);
        }
    }
    else {
        $msg = array('message' => 'no_user');
        echo json_encode($msg);
    }
    exit;
}
?>