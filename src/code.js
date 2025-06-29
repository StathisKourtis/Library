const myLibrary = [];
let card = [];
const container = document.querySelector(".container");

function Book(title, arthor, pages, haveRead) {
  this.title = title;
  this.arthor = arthor;
  this.pages = pages;
  this.haveRead = haveRead;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(library, book) {
  library.push(book);
}
function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("haveRead").value = false;
}
function buildLibrary() {
  clearLibrary();
  for (let i = 0; i < myLibrary.length; i++) {
    card[i] = document.createElement("div");
    container.appendChild(card[i]);
    card[i].classList.add(
      "size-60",
      "border-1",
      "border-amber-950",
      "bg-amber-100",
      "rounded-3xl",
      "p-4",
    );
    let tittle = document.createElement("div");
    card[i].appendChild(tittle);
    tittle.textContent = "Title: " + myLibrary[i].title;
    let arthor = document.createElement("div");
    card[i].appendChild(arthor);
    arthor.textContent = "Arthor: " + myLibrary[i].arthor;
    let pages = document.createElement("div");
    card[i].appendChild(pages);
    pages.textContent = "Pages: " + myLibrary[i].pages;
    let read = document.createElement("div");
    card[i].appendChild(read);
    if (myLibrary[i].haveRead) {
      read.textContent = "Read";
    }
    {
      read.textContent = "Not Read";
    }
  }
}
function clearLibrary() {
  document.querySelector(".container").textContent = "";
}
let book1 = new Book("Hobbit", "Tolkien", 300, true);
let book2 = new Book("lotr", "Tolkien", 300, true);
addBookToLibrary(myLibrary, book1);
addBookToLibrary(myLibrary, book2);

const openForm = document.querySelector(".openform");
const dialog = document.querySelector(".dialog");

openForm.addEventListener("click", () => {
  dialog.showModal();
});

document.querySelector("#addbook").addEventListener("click", () => {});
const form = document.querySelector("#addbookform");
const addbookbutton = document.querySelector("#addbook");
addbookbutton.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let haveRead = document.getElementById("haveRead").value;
  addBookToLibrary(myLibrary, new Book(title, author, pages, haveRead));
  buildLibrary();
  dialog.close();
  clearForm();
});
buildLibrary();
