<?php include 'header.php'; ?>
<div id="main">
            <br></br>
            <!-- the terrarium name would get updated depending on what the user types (not funtional tho this is just the visual)-->
            <input type="text" id="terra_name_input" value="Terrarium name" />

            <div id="terrarium">
            </div>

            <!-- the contents of this div show up after the user has clicked on an object to move/upgrade -->
            <div id="item-container">
                <div id="item-upgrade">item here</div>
                <div id="mats-needed">materials needed here</div>
            </div>
        </div>
<?php include 'footer.php'; ?>