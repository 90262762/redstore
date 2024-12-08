// Get elements
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const showRegister = document.getElementById("show-register");
const showLogin = document.getElementById("show-login");

// Show Login Form with Slide Animation
loginBtn.addEventListener("click", function() {
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
});

// Show Register Form with Slide Animation
registerBtn.addEventListener("click", function() {
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
});

// Show Register form from Login form with animation
showRegister.addEventListener("click", function(event) {
    event.preventDefault();
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
});

// Show Login form from Register form with animation
showLogin.addEventListener("click", function(event) {
    event.preventDefault();
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
});
