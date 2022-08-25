export default function createCard(object) {
  const container = document.createElement("div");
  container.setAttribute("class", "toDoCard");
  toDoTitle(container, object.name);
  toDoDescription(container, object.description);
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
