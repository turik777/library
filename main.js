document.body.onload = displayBooks;

const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 295,
        read: false
    },
    {
        title: "Uzumaki",
        author: "Junji Ito",
        pages: 656,
        read: true
    },
    {
        title: "House of Leaves",
        author: "Mark Z. Danielewski",
        pages: 736,
        read: false
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function AddBookToLibrary() {
    myLibrary.push(new Book(userTitle, userAuthor, userPages, userRead));
}

function displayBooks() {
    myLibrary.forEach(book => {
        const table = document.querySelector("table");
        const tbody = document.createElement("tbody");
        const title = document.createElement("td");
        const author = document.createElement("td");
        const pages = document.createElement("td");
        const read = document.createElement("td");

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.read ? "read" : "not read";
        
        table.appendChild(tbody);
        tbody.appendChild(title);
        tbody.appendChild(author);
        tbody.appendChild(pages);
        tbody.appendChild(read);
    });
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const addBook = document.querySelector('input[type="submit"]');
const closeButton = document.querySelector("dialog button");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

showButton.addEventListener("click", () => {
    dialog.showModal();
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
});

addBook.addEventListener("click", (event) => {
    if (!title.value || !author.value) return event.preventDefault();
    dialog.close();

    userTitle = title.value;
    userAuthor = author.value;
    userPages = pages.value;
    userRead = read.checked;
    AddBookToLibrary();
    const tbody = document.querySelectorAll("tbody");
    tbody.forEach(book => book.remove());
    displayBooks();
    event.preventDefault();
})

closeButton.addEventListener("click", () => {
    dialog.close();
});