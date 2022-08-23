// Book.prototype = {
//   info() {
//     return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
//   },
// };
let libContainer = document.querySelector(".library");
let newBookButton = document.querySelector(".new-book");
let bookForm = document.querySelector('.add-book')
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
};

newBookButton.addEventListener("click", newBookForm);

const createCard = (book) => {
  let newCard = document.createElement("div");
  newCard.setAttribute("class", "book-card");
  newCard.innerHTML = `Name: ${book.title} <br> Author: ${book.author} <br> # of pages: ${book.pages} <br> Have I read it?: ${book.read}`;
  libContainer.appendChild(newCard);
  let deletebutton = document.createElement("button");
  deletebutton.innerText = "Delete Book";
  newCard.appendChild(deletebutton);
  deletebutton.addEventListener("click", function () {
    newCard.remove();
  });
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
