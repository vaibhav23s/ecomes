
  let loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    let users = JSON.parse(localStorage.getItem("loginData")) || [];

    let flag = false;

    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        if (users[i].password === password) {
          flag = true;
          break;
        } else {
          alert("❌ Password galat hai");
          return;
        }
      }
    }

    if (flag === true) {
      alert("✅ Login successful");
      // Index page pe bhejna
      window.location.href = "index.html";
    } else {
      alert("❌ Username galat hai");
    }
  });

