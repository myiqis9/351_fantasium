<?php include 'header.php'; ?>
        <div id="main">
            <br></br>
            <h2>Welcome!</h2>
            <form id='login'>
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
        <script src="../js/script.js"> </script>
</body>
</html>