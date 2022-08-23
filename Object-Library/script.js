// Book.prototype = {
//   info() {
//     return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
//   },
// };

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
    return myLibrary[i];
  }
};

let libContainer = document.querySelector(".library");

const createCard = (book) => {
  let newCard = document.createElement("div");
  newCard.setAttribute("class", "book-card");
  newCard.innerText = `Name: ${book.title} Author: ${book.author} # of pages: ${book.pages} Have I read it?: ${book.read}`;
  libContainer.appendChild(newCard);
};
