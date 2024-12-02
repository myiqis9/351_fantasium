const userEl = document.getElementById("user");
const statsEl = document.getElementById("stats");
const tNameEl = document.getElementById("t_name");
const terrariumEl = document.getElementById("terrarium");

function loadProfile() {
    userEl.innerText = player.username;
}