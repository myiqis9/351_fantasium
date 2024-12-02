<?php include 'init.php'; ?>
<?php
    //checks for posted data
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        //user/pw variables
        $user = $_POST['username'];
        $pass1 = $_POST['password1'];
        $pass2 = $_POST['password2'];
        $biome = $_POST['biome'];

        $collection = $client->CART351->user_list;
        $currentUser = $collection->findOne(["username" => $user]);
    
        if ($currentUser != NULL) {
            $msg = array('message' => 'invalid_user');
            echo json_encode($msg);
        }
        else if($pass1 !== $pass2) {
            $msg = array('message' => 'invalid_pass');
            echo json_encode($msg);
        }
        else {
            //creating user
            //encryping password
            $hash = password_hash($pass1, PASSWORD_DEFAULT); 

            $insert = $collection->insertOne([
                'username' => $user,
                'password' => $hash,
                'biome' => $biome,
                'inventory' => "[]",
                'terrarium' => "[]",
                'trades' => "[]",
                'friendlist' => "[]"
            ]);
            $msg = array('message' => 'success');
            echo json_encode($msg);
        }
        exit;
    }
?>
<?php include 'header.php'; ?>
        <div id="main">
            <br></br>
            <h2>Create a new account!</h2>
            <div id="connect">
                <p id="connectTxt"> Fantasium needs your location in order to create your account.<br><br>
                                    This world's biomes are inspired by real ecoregions, and so your game world will be determined 
                                    by the real-life ecosystem you currently live in. <br><br>
                                    Press the button below to get your geolocation. <br> Don't forget to enable it in your browser!<br></p>
                <button id="location">Click me!!!</button>
            </div>
            <form id="register" action="" method="" enctype="" onsubmit="return false">
                <label for="username">Username : </label>
                <input type="text" id="username" name="username" placeholder="Enter Username">
                <br> </br>
                
                <label for="password">Password : </label>
                <input type="password" id="password1" name="password1" placeholder="Enter Password">
                <br> </br>

                <label for="password">Re-enter Password : </label>
                <input type="password" id="password2" name="password2" placeholder="Re-enter Password">
                <br> </br>

                <button type="submit">Register</button>
            </form>
            <div id="map"></div>
        </div>
        <script src="../js/register.js"> </script>
        <script src="../js/script.js"> </script>
</body>
</html>