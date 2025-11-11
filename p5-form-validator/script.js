const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const emailErrorMsg = document.getElementById("eSmall");
const passwordErrorMsg = document.getElementById("pSmall")
const errorMsg = document.querySelector(".error-msg");
const successMsg = document.getElementById("successMsg");

function validator(email, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
    
    if (emailRegex.test(email)) {
        errorMsg.classList.remove("error");
        successMsg.classList.add("success");
    } 
    else  {
        successMsg.classList.remove("success");
        errorMsg.classList.add("error");
        emailErrorMsg.textContent = "Invalid email";
    }

    if (passwordRegex.test(password)){
        errorMsg.classList.remove("error");
        successMsg.classList.add("success");
    } else {
        successMsg.classList.remove("success");
        errorMsg.classList.add("error");
        passwordErrorMsg.textContent = "Invalid password";
    } 

    if (emailRegex.test(email) && passwordRegex.test(password)) {
        successMsg.textContent = "Valid User";
    }
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    errorMsg.textContent = "";
    emailErrorMsg.textContent = "";
    passwordErrorMsg.textContent = "";
    successMsg.textContent = "";

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    validator(email, password);
});