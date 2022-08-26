export default function createCard(object) {
  const container = document.createElement("div");
  container.setAttribute("class", "toDoCard");
  toDoTitle(container, object.name);
  toDoDescription(container, object.description);
  toDoPriority(container, object.priority);
  document.body.appendChild(container);
}

const toDoTitle = (div, name) => {
  const title = document.createElement("h2");
  title.innerText = name;
  title.setAttribute("class", "todo-title");
  div.appendChild(title);
};

const toDoDescription = (div, title) => {
  const description = document.createElement("p");
  description.innerText = title;
  description.setAttribute("class", "todo-description");
  div.appendChild(description);
};

const toDoPriority = (div, title) => {
  const priority = document.createElement("p");
  priority.innerText = title;
  priority.setAttribute("class", "todo-priority");
  div.appendChild(priority);
};
