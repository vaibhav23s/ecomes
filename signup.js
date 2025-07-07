
  let signupForm = document.getElementById("signup-form");

  signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("loginData")) || [];

    let userObj = {
      username: username,
      email: email,
      password: password
    };

    users.push(userObj);

    localStorage.setItem("loginData", JSON.stringify(users));

    alert("Signup successful!");

    // Login page pe bhejna
    window.location.href = "login.html";
  });
