export default function createCard(object) {
  const container = document.createElement("div");
  container.setAttribute("id", Math.floor(Math.random() * 1000));
  container.setAttribute("class", "toDoCard");
  toDoTitle(container, object.name);
  toDoDescription(container, object.description);
  toDoPriority(container, object.priority);
  deleteButton(container);
  document.body.appendChild(container);
  saveToStorage(container.id, container.innerHTML);
}

const toDoTitle = (div, title) => {
  const name = document.createElement("h2");
  name.innerText = `Name: ${title}`;
  name.setAttribute("class", "todo-name");
  div.appendChild(name);
};

const toDoDescription = (div, title) => {
  const description = document.createElement("p");
  description.innerText = `Description ${title}`;
  description.setAttribute("class", "todo-description");
  div.appendChild(description);
};

const toDoPriority = (div, title) => {
  const priority = document.createElement("p");
  priority.innerText = `Priority: ${title}`;
  priority.setAttribute("class", "todo-priority");
  div.appendChild(priority);
};

const deleteButton = (div) => {
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete-button");
  deleteButton.setAttribute("type", "button");
  deleteButton.innerText = "Delete Task";
  deleteButton.addEventListener("click", function () {
    deleteButton.parentElement.remove();
    localStorage.removeItem(deleteButton.parentElement.id);
  });
  div.appendChild(deleteButton);
};
function saveToStorage(key, div) {
  localStorage.setItem(key, div);
}
