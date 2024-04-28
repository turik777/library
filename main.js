const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function AddBookToLibrary() {
    myLibrary.push(new Book(userTitle, userAuthor, userPages, userRead));
}