const todoInput = document.getElementById("todoInput");
const todos = document.getElementById("todos");
const emptyImg = document.getElementById("emptyImg");

function addTask() {
  if (todoInput.value === "") {
    alert("You Must Right Something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = todoInput.value;
    todos.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    emptyImg.style.display = "none";
  }
  todoInput.value = "";
  todoInput.focus();
  saveData();
}

todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

todos.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    emptyImg.style.display = todos.querySelectorAll("li").length > 0 ? "none" : "block";
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", todos.innerHTML);
}

function showData() {
  todos.innerHTML = localStorage.getItem("data");
}

showData();

emptyImg.style.display = todos.querySelectorAll("li").length > 0 ? "none" : "block";
