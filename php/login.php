<?php include 'header.php'; ?>
        <div id="main">
            <br></br>
            <h2>Welcome!</h2>
            <div id=connect></div>
            <form id='login'>
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
        <script src="../js/script.js"> </script>
</body>
</html>