const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAll");
const darkToggle = document.getElementById("darkModeToggle");

let tasks = [];

let taskCounter = 0;

function addTask(taskText) {
    if (!taskText) {
        window.alert("Please enter a task");
        return;
    }

    // list items and text span
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    taskList.appendChild(listItem);
    listItem.appendChild(span);
    span.textContent = taskText;

    // delete-btn
    const deleteBtn = document.createElement("button");
    listItem.appendChild(deleteBtn);
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "❌";

    // task id number
    let numId = taskList.children.length;
    listItem.classList.add(`t${numId}`);

    // input textholder clear
    taskInput.value = "";

    //task id counter
    taskCounter++;

    // create a new object
    let newTask = {id: `t${taskCounter}`, text: taskText, status: "pending"};
    tasks.push(newTask);
    //console.log(tasks);
    
    // converted into string
    saveTasks();

    //taskCouunter
    updateTaskSummary();
}

// mark tasks individually when clicked
function markTask(taskId) {
    const listItem = document.querySelector(`.${taskId}`);
    const textSpan = listItem.querySelector("span");
    if (textSpan.classList.contains("completed")) {
        textSpan.classList.remove("completed");
        tasks.forEach(task => {
            if (task.id === taskId) {
                task.status = "pending";
            }
        });
    } else {
        textSpan.classList.add("completed");
        tasks.forEach(task => {
            if (task.id === taskId) {
                task.status = "completed";
            }
        })
    }
    saveTasks();
    updateTaskSummary();
}

// deletes tasks individually
function deleteTask(taskId) {
    const listItem = document.querySelector(`.${taskId}`);
    listItem.remove();
    // remove task inside the array
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    //console.log(tasks); 
    updateTaskSummary();
}

function clearAll() {
    if (taskList.children.length > 0) {
        taskList.innerHTML = '';
        localStorage.removeItem("tasks");
        tasks = [];
    }
    updateTaskSummary();
}
// helper function save
function saveTasks() {
    const taskString = JSON.stringify(tasks);
    localStorage.setItem("tasks", taskString);
}

//helper function loads
function loadTasks() {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.innerHTML = "";
    tasks.forEach(task => {
        // list items and text span
        const listItem = document.createElement("li");
        const span = document.createElement("span");
        taskList.appendChild(listItem);
        listItem.appendChild(span);
        span.textContent = task.text;
        // delete-btn
        const deleteBtn = document.createElement("button");
        listItem.appendChild(deleteBtn);
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "❌";
        // task id number
        listItem.classList.add(task.id);
        //completed status
        if (task.status === "completed") {
            span.classList.add("completed");
        }
        //console.log(task.status);
    });
    if (tasks.length > 0) {
        const lastTask = tasks[tasks.length - 1];
        taskCounter = Number(lastTask.id.replace("t", ""));
    } else {
        taskCounter = 0;
    }
    updateTaskSummary();
}

// helper function task counter
function updateTaskSummary() {
    const completed = tasks.filter(task => task.status === "completed").length;
    const total = tasks.length;
    document.getElementById("completedCount").textContent = completed;
    document.getElementById("totalCount").textContent = total;
}

//EVENT LISTENERS//
// add task
addTaskBtn.addEventListener("click", () => {
    addTask(taskInput.value.trim());
});

// add task with enter
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask(taskInput.value.trim());
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

// on load
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

// dark toggle local storage 
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        darkToggle.checked = true;
    }
});

// dark toggle
darkToggle.addEventListener("change", () => {
    if (darkToggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }
});
