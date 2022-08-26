import toDo from "./todoInfo.js"; //keys = name, description, due date, priority
import createCard from "./createCard.js";
export default function formToObject(event) {
  event.preventDefault();
  let nameData = document.getElementById("fname").value;
  let descriptionData = document.getElementById("fdescription").value;
  let priorityData = document.getElementById("fpriority").value;
  const myFormData = new toDo(nameData, descriptionData, priorityData);
  createCard(myFormData);
}
