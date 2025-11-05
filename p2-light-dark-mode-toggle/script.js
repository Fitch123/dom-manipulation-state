const toggle = document.getElementById("toggleTheme");
const bodyElement = document.body;

const savedTheme = localStorage.getItem("theme"); 

    if (savedTheme) {
        console.log("yes, a theme was found:", savedTheme);
    } else {
        console.log("no, a theme was not found or was empty");
    }

document.addEventListener('DOMContentLoaded', () => {
    if (savedTheme === "dark") {
        bodyElement.classList.add("dark-mode");
        toggle.innerText = "Light Mode ☀️";
    } else {
        toggle.innerText = "Dark Mode 🌙";
    }
});

toggle.addEventListener("click", () => {
    if (bodyElement.classList.contains("dark-mode")) {
        //switch to light mode
        bodyElement.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
        toggle.innerText = "Dark Mode 🌙";
    } else {
        bodyElement.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
        toggle.innerText = "Light Mode ☀️";
    }
});