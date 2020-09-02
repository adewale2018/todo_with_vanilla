// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);

//Functions

function addTodo(e) {
  e.preventDefault();
  //add todoDiv
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create li

  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  //Mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='far fa-check-circle'></i>";
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);

  //Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='far fa-trash-alt'></i>";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to the ul
  todoList.appendChild(todoDiv);

  //Clear the input
  todoInput.value = "";
}
