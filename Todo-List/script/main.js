import formToObject from "./formSubmit.js";
let toDoList = document.querySelector(".list-of-todos");

function stuff() {
  function refreshList() {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.getItem(localStorage.key(i));
      let todoCard = document.createElement("div");
      todoCard.setAttribute("class", "todoCard");
      // todoCard.setAttribute("id", Math.floor(Math.random() * 1000));
      todoCard.innerHTML = key;
      toDoList.appendChild(todoCard);
    }
  }
  refreshList();
  let deleteButton = document.querySelectorAll(".delete-button");
  deleteButton.forEach((button) => {
    button.addEventListener("click", function () {
      button.parentElement.remove();
      localStorage.removeItem(button.parentElement.id);
    });
  });
}
let form = document.getElementById("toDo");
form.addEventListener("submit", formToObject);

window.onload = stuff;
