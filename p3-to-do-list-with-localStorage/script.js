const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAll");

const tasks = [{}];

function addTask(taskText) {

    if (taskText === "" || taskText == null) {
        window.alert("Please enter a task");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    taskList.appendChild(listItem);
    let numId = taskList.children.length;
    listItem.classList.add(`t${numId}`);
}

function clearAll() {
    if (taskList.children.length > 0) {
        taskList.innerHTML = '';
    }
}

function markTask(taskId) {
    const listItem = document.querySelector(`.${taskId}`);
    if (listItem.classList.contains("completed")) {
        listItem.classList.remove("completed");
    } else {
        listItem.classList.add("completed");
    }
}

function clearTask() {

}


addTaskBtn.addEventListener("click", () => {
    let userInput = taskInput.value;
    addTask(userInput);
});

taskList.addEventListener("click", (event) => {;
    const clickedElement = event.target;
    const classList = clickedElement.className.split(" ");
    const taskId = classList.find(c => c.startsWith("t"));
    markTask(taskId);
});

clearAllBtn.addEventListener("click", clearAll);