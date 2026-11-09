const tasks = [];
let nextTaskId = 0;

const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const listTasks = document.querySelector(".listTasks");

function addTask(event) {
    event.preventDefault();

    const text = input.value.trim();
    if (text === "") {
        return;
    }

    const newTask = { task_id: nextTaskId, text: text, done: false  };
    tasks.push(newTask);
    const task = document.createElement("div");
    task.className = "task";
    task.dataset.taskId = nextTaskId;
    nextTaskId++;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    deleteBtn.addEventListener("click", deleteTask);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", doneTask)

    const label = document.createElement("label");
    label.textContent = text;

    task.appendChild(deleteBtn);
    task.appendChild(checkbox);
    task.appendChild(label);
    listTasks.appendChild(task);

    input.value = "";
}

form.addEventListener("submit", addTask);

function doneTask(event) {
    const task = event.target.parentElement;
    const id = Number(task.dataset.taskId);

    for (const t of tasks) {
        if (t.task_id === id) {
            t.done = true;
        }
    }

    task.classList.add("done");
}

function deleteTask(event) {
    const task = event.currentTarget.parentElement;
    const id = Number(task.dataset.taskId);

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].task_id === id) {
            tasks.splice(i, 1);
            break;
        }
    }

    task.remove();
}