const userEl = document.getElementById("user");
const statsEl = document.getElementById("stats");
const tNameEl = document.getElementById("t_name");
const terrariumEl = document.getElementById("terrarium");

let player;
let jsonPlayer;

fetch('../json/player.json')
.then((response) => response.json())
.then((json) => { jsonPlayer = json; loadProfile(); })
.catch(error => console.error('Error:', error));

function loadProfile() {
    player = new Player(jsonPlayer);

    userEl.innerText = player.username;
}