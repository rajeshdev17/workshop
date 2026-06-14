const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");
const clearBtn = document.getElementById("clearBtn");

let taskCount = 0;

function updateCounter() {
    counter.textContent = `Total Tasks: ${taskCount}`;
}

addBtn.addEventListener("click", addTask);

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");

    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    const date = document.createElement("span");
    date.classList.add("date");
    date.textContent = `Added: ${new Date().toLocaleString()}`;

    taskInfo.appendChild(taskName);
    taskInfo.appendChild(date);

    const actionBtns = document.createElement("div");
    actionBtns.classList.add("action-btns");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";
    completeBtn.classList.add("complete-btn");

    completeBtn.addEventListener("click", () => {
        taskName.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        li.remove();
        taskCount--;
        updateCounter();
    });

    actionBtns.appendChild(completeBtn);
    actionBtns.appendChild(deleteBtn);

    li.appendChild(taskInfo);
    li.appendChild(actionBtns);

    taskList.appendChild(li);

    taskCount++;
    updateCounter();

    taskInput.value = "";
}

clearBtn.addEventListener("click", () => {
    taskList.innerHTML = "";
    taskCount = 0;
    updateCounter();
});