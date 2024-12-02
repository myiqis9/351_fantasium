let loginForm = document.getElementById('login');

function loadUser() {
    fetch('header.php?action=load')
        .then((response) => {
            if(response == "!NOUSER!") loggedIn = false;
            else loggedIn = true;
            return response.json();
        })
        .then((response) => {
            if(loggedIn) user = response;
        })
}