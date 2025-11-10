const clock = document.getElementById("clock");
const colorBtn = document.getElementById("colorBtn");
const bodyElement = document.body;

function time() {
    let currentTime = new Date();

    const formatter = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    const formattedTime = formatter.format(currentTime);
    clock.textContent = formattedTime;
}

setInterval(time, 1000);

function colors() {
    const randomHex = Math.floor(Math.random() * 16777215). toString(16);
    let randomColor = "#" + randomHex.padStart(6, '0');
    bodyElement.style.backgroundColor = randomColor;
    colorBtn.style.color = randomColor;
    clock.style.color = randomColor;
    localStorage.setItem("color", randomColor);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        colors();
    }
});

colorBtn.addEventListener("click", colors)

document.addEventListener("DOMContentLoaded", () => {
    const savedColor = localStorage.getItem("color");
    if (savedColor) {
        bodyElement.style.backgroundColor = savedColor;
        colorBtn.style.color = savedColor;
        clock.style.color = savedColor;
    } else {
        colors();
    }
});