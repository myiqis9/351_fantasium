let player = null;
let loggedIn = false;

let userInfo = document.getElementById('userInfo');
let biomeInfo = document.getElementById('biomeInfo');


fetch('header.php?action=load')
.then((response) => {
    return response.json();
})
.then((response) => {
    for(let key in response) {
        if(key == 'message') {
            loggedIn = false;
            if(response[key] == 'no_user') {
                console.log('no user');
                break;
            }
        }
        console.log('logged in');
        player = new Player(response);
    }
})

if(loggedIn) {
    biomeInfo.style.visibility = 'visible';
    biomeInfo.innerHTML = `${player.biome.toUpperCase()}`;
    userInfo.innerHTML = `<a href="profile.php">${player.username.toUpperCase()}</a> | LOG OUT`;

}
else {
    biomeInfo.style.visibility = "hidden";
    userInfo.innerHTML = `<a href="login.php">LOGIN</a>`;
}