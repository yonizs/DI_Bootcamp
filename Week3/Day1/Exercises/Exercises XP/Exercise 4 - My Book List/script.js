const allBooks = [
    {
        title: "Harry Potter",
        author: "JK Rowling",
        image: "Harrypotter.jpeg",
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "JRR Tolkien",
        image: "Thehobbit.jpeg",
        alreadyRead: false
    }
];

const div = document.getElementsByClassName("listBooks")[0];
const table = document.createElement("table");
div.appendChild(table);

for (let i = 0; i < allBooks.length; i++) {
    const book = allBooks[i];
    const row = document.createElement("tr");
    const textCell = document.createElement("td");
    textCell.textContent = book.title + " written by " + book.author;
    if (book.alreadyRead) {
        textCell.style.color = "red";
    }
    const imgCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px";
    imgCell.appendChild(img);
    row.appendChild(textCell);
    row.appendChild(imgCell);
    table.appendChild(row);
}