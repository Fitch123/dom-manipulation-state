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
    //list items and text span
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    taskList.appendChild(listItem);
    listItem.appendChild(span);
    span.textContent = taskText;
    //delete-btn
    const deleteBtn = document.createElement("button");
    listItem.appendChild(deleteBtn);
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "❌";
    //task id number
    let numId = taskList.children.length;
    listItem.classList.add(`t${numId}`);
    //input textholder clear
    taskInput.value = "";
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

function deleteTask(taskId) {
    const listItem = document.querySelector(`.${taskId}`);
    listItem.remove();    
}


// add task
addTaskBtn.addEventListener("click", () => {
    let userInput = taskInput.value;
    addTask(userInput);
});
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let userInput = taskInput.value;
        addTask(userInput);
    }
});
// mark or delete task
taskList.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const parentElement = clickedElement.closest("li");
    const classArray = Array.from(parentElement.classList);
    const taskId = classArray.find(c => c.startsWith("t"));

    if (!taskId) return; // nothing to do

    if (clickedElement.classList.contains("delete-btn")) {
        deleteTask(taskId);
    } else {
        markTask(taskId);
    }
});
// clears task list
clearAllBtn.addEventListener("click", clearAll);