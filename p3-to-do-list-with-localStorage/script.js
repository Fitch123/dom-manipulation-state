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

    const newList = document.createElement("li");
    newList.textContent = taskText;
    //newList.classList.add("");
    taskList.appendChild(newList);
}

function clearAll() {

    if (taskList.children.length > 0) {
        taskList.innerHTML = '';
    } 
}

function markTask(taskId) {

}

function clearTask() {

}


addTaskBtn.addEventListener("click", () => {
    let userInput = taskInput.value;
    addTask(userInput);
});

clearAllBtn.addEventListener("click", clearAll)
