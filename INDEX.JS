const inputField = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

function addTask() {
  const taskText = inputField.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.className = "list-group-item d-flex justify-content-between align-items-center";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "btn btn-info btn-sm me-2";
  editButton.onclick = () => {
    const newTask = prompt("Edit your task:", taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      taskSpan.textContent = newTask.trim();
    }
  };

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "btn btn-warning btn-sm";
  deleteButton.onclick = () => listItem.remove();

  const buttonGroup = document.createElement("div");
  buttonGroup.appendChild(editButton);
  buttonGroup.appendChild(deleteButton);

  listItem.appendChild(taskSpan);
  listItem.appendChild(buttonGroup);
  todoList.appendChild(listItem);

  inputField.value = "";
}

addButton.addEventListener("click", addTask);

inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
