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