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
            <form id='register' action="" method="" enctype="">
                <label for="username">Username : </label>
                <input type="text" id="username" name="username" placeholder="Enter Username">
                <br> </br>
                
                <label for="password">Password : </label>
                <input type="password" id="password" name="password" placeholder="Enter Password">
                <br> </br>

                <button type="submit">Login</button>
            </form>
        </div>
        <div id="map"></div>
        <script src="../js/register.js"> </script>
        <script src="../js/script.js"> </script>
</body>
</html>