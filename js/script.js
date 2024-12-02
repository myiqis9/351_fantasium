let user = null;
let loggedIn = false;

let userDisplay = document.getElementById('user');
let biomeDisplay = document.getElementById('biome');

function loadUser() {
    fetch('header.php?action=load')
        .then((response) => {
            if(response == "!NOUSER!") {
                loggedIn = false;
                return response; //to avoid errors
            }
            else {
                loggedIn = true;
                return response.json();
            }
        })
        .then((response) => {
            if(loggedIn) user = response;
        })
        .catch
}