const decreaseNum = document.getElementById("decrease");
const resetNum = document.getElementById("reset");
const increaseNum = document.getElementById("increase");
const counter = document.getElementById("counter");


let numCounter = Number(counter.textContent);

function colors(num) {
    if (num > 0) {
        counter.style.color = "green";
    } else if  (num < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
}

function decrease() {
    numCounter -= 1;
    counter.textContent = numCounter;
    colors(numCounter);
}

function reset() {
    numCounter = 0;
    counter.textContent = numCounter;
    colors(numCounter);
}

function increase() {
    numCounter += 1;
    counter.textContent = numCounter;
    colors(numCounter);
}


document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" || event.key === "+" || event.key === "ArrowRight") {
        increase();
    } else if (event.key === "ArrowDown" || event.key === "-" || event.key === "ArrowLeft") {
        decrease();
    } else if (event.key === "r" || event.key === "R") {
        reset();
    }
});

decreaseNum.addEventListener("click", decrease);
resetNum.addEventListener("click", reset);
increaseNum.addEventListener("click", increase);
