<?php include 'header.php'; ?>
<div id="main">
            <br></br>
            <h2>Player chat</h2>
            <div id="chat-container">
                <div class="search-player">
                    <input type="text" placeholder="Search for players..." class="search-input">
                    <br></br>
                    List of players shows up here once user presses enter (or maybe add a button?)
                </div>
                <div class="chatbox">
                    <div class="chatbox-messages">
                        <!--simulated messages -->
                        <div class="message received">yapmaster9000 : Chat is this real</div>
                        <div class="message sent">pookiedookie : you're literally being simulated rn</div>
                    </div>
                    <div class="chatbox-input">
                        <input type="text" placeholder="Send a message..." id="chatInput" />
                        <button id="sendButton">Send</button>
                    </div>
                </div>
            </div>
    <script src="../js/community.js"> </script>
    <script src="../js/script.js"> </script>
</body>
</html>