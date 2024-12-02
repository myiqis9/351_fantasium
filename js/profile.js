const userEl = document.getElementById("user");
const statsEl = document.getElementById("stats");
const tNameEl = document.getElementById("t_name");
const terrariumEl = document.getElementById("terrarium");

function loaded() {
    console.log(player);
    userEl.innerText = player.username;
}