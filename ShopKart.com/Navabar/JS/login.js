const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const formsWrapper = document.querySelector(".forms-wrapper");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const registerSubmit = document.getElementById("registerSubmit");
const fullName = document.getElementById("fullName");
const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");
const confirmPassword = document.getElementById("confirmPassword");

// Show Login Form
loginBtn.addEventListener("click", () => {
  formsWrapper.classList.remove("show-register");
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
  loginForm.classList.add("active-form");
  registerForm.classList.remove("active-form");
});

// Show Register Form
registerBtn.addEventListener("click", () => {
  formsWrapper.classList.add("show-register");
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
  registerForm.classList.add("active-form");
  loginForm.classList.remove("active-form");
});

// Register form validation
registerSubmit.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission for validation

  const password = registerPassword.value;
  const confirmPwd = confirmPassword.value;

  // Check if password and confirm password match
  if (password !== confirmPwd) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  // Check if all fields are filled
  if (!fullName.value || !registerEmail.value || !password || !confirmPwd) {
    alert("Please fill in all fields.");
    return;
  }
  const users = JSON.parse(localStorage.getItem("users")) || [];
  // Add the new user to localStorage
  const user = {
    fullName: fullName.value,
    email: registerEmail.value,
    password: password,
  };
users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful!");
  // Redirect to login page after successful registration (optional)
  window.location.href = "login.html"; // Update this URL as per your project structure
});



// logic for the loginSubmit page

loginSubmit.addEventListener("click", () => {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    if (email && password) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(user => user.email === email && user.password === password);
  
      if (user) {
        alert("Login successful👋!");
        setTimeout(function() {
            alert("Welcome to Shop-cart🙏");
            window.location.href = "/index.html"; 
           
          }, 1000);
      }else{
          alert("! Invalid email & password.\nPlease create your account😊.");
        }
    } else {
      alert("Please fill in both fields to login.");
    }
  });
  
  // Close button functionality
  document.getElementById("closeButton").addEventListener("click", () => {
     
      window.location.href = "/index.html";
    });



  

