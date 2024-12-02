let player = null;
let loggedIn;

const userInfo = document.getElementById('userInfo');
const biomeInfo = document.getElementById('biomeInfo');
const mainEl = document.getElementById('main');


fetch('init.php?action=load')
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        for (let key in response) {
            if (key == 'message') {
                loggedIn = false;
                if (response[key] == 'no_user') {
                    console.log('no user');
                    break;
                }
            }
            loggedIn = true;
            console.log(`logged in as ${response.username}`);
            player = new Player(response);
        }

        if (loggedIn) {
            biomeInfo.style.visibility = 'visible';
            biomeInfo.innerHTML = `${player.biome.toUpperCase()}`;
            userInfo.innerHTML = `<a href="profile.php">${player.username.toUpperCase()}</a> | <a href="logout.php">LOG OUT</a>`;

            if (window.location.pathname == '/php/login.php' && window.location.pathname == '/php/register.php') {
                mainEl.innerHTML = '<br><br><br>You are already logged in!';
            }

            loaded();
        }
        else {
            biomeInfo.style.visibility = "hidden";
            userInfo.innerHTML = `<a href="login.php">LOGIN</a>`;

            if (window.location.pathname != '/php/login.php' && window.location.pathname != '/php/register.php' && window.location.pathname != '/php/index.php') {
                mainEl.innerHTML = '<br><br><br>You must be logged in to view this page!';
            }
        }
    })