/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */

const myLibrary = [
  { title: "Book1", author: "Pic", pages: 333, read: true },
  { title: "Book2", author: "Pac", pages: 298, read: false }
];

function Book(title, author, pages, read) {

  this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = () => `${title} by ${author}, ${pages} pages`
};


function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read))
}

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
  bookPages.textContent = `${book.pages} pages`;
}

const renderBooks = () => {
  document.querySelector(".book-wrap").innerHTML = "";
  myLibrary.map((book) => createBook(book));
}

const form = document.getElementById("book-form");

form.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const newBook = {};
  formData.forEach((value, key) => (newBook[key] = value));
  addBookToLibrary(
    newBook.title,
    newBook.author,
    newBook.pages,
    newBook.read
  );
  renderBooks();
}

renderBooks();