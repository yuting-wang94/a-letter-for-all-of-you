const form = document.querySelector("form");
const firstnameInput = document.getElementById("firstname-input");
const passwordInput = document.getElementById("password-input");

const unlockContainer = document.querySelector("div");

const forgotPw = document.getElementById("forgot-pw");

const correctFirstname = "Daniel";
const correctPassword = "Nagoya08120904"; 

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const firstname = firstnameInput.value.trim();
    const password = passwordInput.value.trim();

    if(!firstname || !password){
      alert('Please fill in the blank!');
      return;
    }

    const errors = [];

    if (
      firstname.toLowerCase() === correctFirstname.toLowerCase() &&
      firstname !== correctFirstname
    ) {
      errors.push("First Name must start with a capital letter");
    }

    if (
      password.toLowerCase() === correctPassword.toLowerCase() &&
      password !== correctPassword
    ) {
      errors.push("Placename must start with a capital letter");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    if (firstname ===correctFirstname && password === correctPassword) {
      window.location.href = "secret.html";
    } else {
      alert('Wrong password ❌');
    }
  });

  forgotPw.addEventListener("click",()=>{
    alert('🤬🤬🤬🤬🤬🤬');
  })