// Book.prototype = {
//   info() {
//     return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
//   },
// };
let libContainer = document.querySelector(".library");
let newBookButton = document.querySelector(".new-book");
let bookForm = document.querySelector(".add-book");
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBookToLibrary = (book) => {
  myLibrary.push(book);
};

const displayLibrary = () => {
  for (let i = 0; i < myLibrary.length; i++) {
    createCard(myLibrary[i]);
  }
};

const newBookForm = () => {
  bookForm.innerHTML = `<input type="text" id='title' placeholder="Book Title" />
  <input type="text" id='author' placeholder="Author" />
  <input type="text" id='pages' placeholder="# of pages" />
  <input type="text" id='read' placeholder="read?" />
  <button type="submit">Add Book</button>`;
};

newBookButton.addEventListener("click", newBookForm);
bookForm.addEventListener("submit", function (e) {
  e.preventDefault;
});
const createCard = (book) => {
  let newCard = document.createElement("div");
  newCard.setAttribute("class", "book-card");
  // let readToggle = document.createElement("input");
  // readToggle.setAttribute("type", "checkbox");
  // readToggle.setAttribute("class", "read-toggle");
  newCard.innerHTML = `Name: ${book.title} <br> Author: ${book.author} <br> # of pages: ${book.pages} <br> Have I read it?: ${book.read}`;
  // newCard.appendChild(readToggle);
  libContainer.appendChild(newCard);
  let deletebutton = document.createElement("button");
  deletebutton.setAttribute("class", "delete-button");
  deletebutton.innerText = "Delete Book";
  newCard.appendChild(deletebutton);
  deletebutton.addEventListener("click", function () {
    newCard.remove();
  });
  // let switchButton = document.querySelectorAll(".read-toggle");
  // switchButton.forEach((click) => {
  //   click.addEventListener("click", function () {
  //     if (click.checked) {
  //       book.read = "read";
  //       console.log(book.read);
  //     } else {
  //       book.read = "not read";
  //       console.log(book.read);
  //     }
  //   });
  // });
};

const hobbit = new Book("The Hobbit", "Tolkein", "100", "read");
addBookToLibrary(hobbit);
const braveNewWorld = new Book(
  "Brave New World",
  "Aldous Huxley",
  "150",
  "read"
);
addBookToLibrary(braveNewWorld);
displayLibrary();
