const myLibrary = [];

function Book(title, author, pages, read) {

    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read))
}

// Add default books



addBookToLibrary("Alice in Wonderland", "Lewis Carroll", 198, true);

const createBook = (book) => {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  bookDiv.setAttribute("id", myLibrary.indexOf(book));

  const bookTitle = document.createElement("div");
  bookTitle.classList.add("book-title");

  const bookAuthor = document.createElement("div");
  bookAuthor.classList.add("book-author");

  const bookPages = document.createElement("div");
  bookPages.classList.add("book-pages");
  
  const delButton = document.createElement("div");
  delButton.classList.add("del-button");
  
  document.querySelector(".book-wrap").appendChild(bookDiv);
  bookDiv.append(bookTitle, bookAuthor, bookPages, delButton);

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = `${book.pages} pages`;
  delButton.textContent = "X";

  delButton.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(book),1);
    renderBooks();
  })
}

const renderBooks = () => {
  document.querySelector(".book-wrap").innerHTML = "";
  myLibrary.map((book) => createBook(book));
}


// Get new book data from form

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
  form.reset();
  renderBooks();
}

renderBooks();
