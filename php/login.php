<?php include 'init.php'; ?>

<?php
    //checks if already logged in
    if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET["action"])) {
        if(isset($_SESSION['user'])) {
            $msg = array('message' => 'logged_in');
            echo json_encode($msg);
        }
    }

    //checks for posted data
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        //user/pw variables
        $user = $_POST['username'];
        $pass = $_POST['password'];
    
        $collection = $client->CART351->user_list;
        $currentUser = $collection->findOne(["username" => $user]);
            
        if ($currentUser != NULL) {
            // Verify the hash against the password entered 
            $verify = password_verify($pass, $currentUser["password"]);
        
            if ($verify) {
                //start session with user
                $_SESSION["user"] = $user;
                $msg = array('message' => 'success');
                echo json_encode($msg);
            } 
            else {
                $msg = array('message' => 'incorrect_pass');
                echo json_encode($msg);
            }
        } 
        else {
            $msg = array('message' => 'incorrect_user');
            echo json_encode($msg);
        }
        exit;
    }

    //checks for get data (recieved)
    if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET["action"])) {
        $collection = $client->CART351->user_list;

        $result = $collection->find([]);
        $returnarray = [];

        foreach ($result as $item) {
            $returnarray[] = $item;
        }
        echo json_encode($returnarray);
        exit();
    }//POST
?>
<?php include 'header.php'; ?>

        <div id="main">
            <br></br>
            <h2>Welcome back!</h2>
            <p id='errorMsg'></p>
            <form id='login' onsubmit="return false">
                <label for="username">Username : </label>
                <input type="text" id="username" name="username" placeholder="Enter Username">
                <br> </br>
                
                <label for="password">Password : </label>
                <input type="password" id="password" name="password" placeholder="Enter Password">
                <br> </br>

                <button type="submit">Login</button>
            </form>
            <br>
            <p>Don't have an account?<br></p>
            <button id="b_register" onclick="location.href='register.php'">Register!</button>
            <div id="map"></div>
        </div>
        <script src="../js/login.js"> </script>
        <script src="../js/script.js"> </script>
</body>
</html>