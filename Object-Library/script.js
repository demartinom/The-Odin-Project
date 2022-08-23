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

const hobbit = new Book("The Hobbit", "JR Tolken", "100", "read");

addBookToLibrary(hobbit);
console.log(displayLibrary());
