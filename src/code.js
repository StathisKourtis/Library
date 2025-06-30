const closeSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alpha-x-circle</title><path d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" /></svg>';

const myLibrary = [];
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
    myLibrary[i] = document.createElement("div");
    container.appendChild(myLibrary[i]);
    myLibrary[i].classList.add(
      "size-60",
      "border-1",
      "border-amber-950",
      "bg-amber-100",
      "rounded-3xl",
      "p-4",
    );
    let tittle = document.createElement("div");
    myLibrary[i].appendChild(tittle);
    tittle.textContent = "Title: " + myLibrary[i].title;
    let arthor = document.createElement("div");
    myLibrary[i].appendChild(arthor);
    arthor.textContent = "Arthor: " + myLibrary[i].arthor;
    let pages = document.createElement("div");
    myLibrary[i].appendChild(pages);
    pages.textContent = "Pages: " + myLibrary[i].pages;
    let read = document.createElement("div");
    myLibrary[i].appendChild(read);
    if (myLibrary[i].haveRead) {
      read.textContent = "Read";
    } else {
      read.textContent = "Not Read";
    }
    myLibrary[i].insertAdjacentHTML("beforeend", closeSvg);
    const close = myLibrary[i].lastElementChild;
    close.classList.add("h-7", "w-7");
    close.addEventListener("click", () => {
      console.log(i);
      console.log(myLibrary[i]);
      myLibrary[i].remove();
      myLibrary.splice(i, 1);
      buildLibrary();
      console.log(card);
    });
  }
}
function clearLibrary() {
  document.querySelector(".container").textContent = "";
}
let book1 = new Book("Hobbit", "Tolkien", 300, true);
let book2 = new Book("lotr", "Tolkien", 300, false);
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
  let haveRead = document.getElementById("haveRead").checked;

  addBookToLibrary(myLibrary, new Book(title, author, pages, haveRead));
  buildLibrary();
  dialog.close();
  clearForm();
});
buildLibrary();
