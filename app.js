/* eslint-disable no-unused-expressions */

let myLibrary = [
  { title: "Book1", author: "Pic", pages: 333, read: true },
  { title: "Book2", author: "Pac", pages: 298, read: false }
];

const createBook = (book) => {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  const bookTitle = document.createElement("div");
  bookTitle.classList.add("book-title");
  const bookAuthor = document.createElement("div");
  bookAuthor.classList.add("book-author");
  const bookPages = document.createElement("div");
  bookPages.classList.add("book-pages");
  document.querySelector(".book-wrap").appendChild(bookDiv);
  bookDiv.append(bookTitle, bookAuthor, bookPages);
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;
}

const renderBooks = (arr) => {
  arr.map((book) => createBook(book));
}

renderBooks(myLibrary);

function Book(title, author, pages, read) {

  this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = () => `${title} by ${author}, ${pages} pages`
};


function addBookToLibrary() {
  // do stuff here
}

/* const form = document.getElementById("book-form");

form.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  console.log("Form Data");
for (let obj of formData) {
  console.log(obj);
}
} */