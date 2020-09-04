// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
let completedButton = "";
let trashButton = "";

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Functions

function addTodo(e) {
  e.preventDefault();
  if (todoInput.value.length > 0 && todoInput.value.trim() !== "") {
    //add todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li

    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    //Mark Button
    completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='far fa-check-circle'></i>";
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);

    //Trash Button
    trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='far fa-trash-alt'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to the ul
    todoList.appendChild(todoDiv);

    //Clear the input
    todoInput.value = "";
  }
}
function deleteCheck(e) {
  const item = e.target;
  // delete
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  //Check mark
  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
