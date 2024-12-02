const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", submitForm);
errorEl = document.getElementById("errorMsg");

//fetch get
fetch('login.php?action=load')
.then((response) => {
    return response.json();
})
.then((response) => {
    if(response.message == 'logged_in') {
        errorEl.innerHTML = `You are already logged in!<br><br>`;
        loginForm.style.visibility = 'hidden';
    }
})

function submitForm() {
    let data = new FormData(loginForm);

    //fetch post
    fetch('login.php', {
        method: 'POST',
        body: data
    })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if(response.message == 'success') {
        location.href = "profile.php";
      }
      else if (response.message == 'incorrect_user' || response.message == 'incorrect_pass') {
        errorEl.innerHTML = `Username or password is incorrect!<br><br>`;
      }
    })
  }