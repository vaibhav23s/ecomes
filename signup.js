let form = document.getElementById("form");
let pass = document.getElementById("pass");
let names = document.getElementById("names");
let email = document.getElementById("email");


form.addEventListener("submit", signfun);
let signarr = JSON.parse(localStorage.getItem("signarr")) || [];

function signfun(event) { 
  event.preventDefault(); 

  let obj = {
    pass: pass.value,
    email: email.value,
    names: names.value,
  };

  signarr.push(obj); 
  console.log(signarr);
  localStorage.setItem("signarr",JSON.stringify(signarr))
  window.location.href = "./login.html";
}
