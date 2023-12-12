const createNotesButton = document.querySelector(".btn");

const notesContainer = document.getElementById("notes-container");
let notes = document.querySelectorAll(".input-box");

notesContainer.innerHTML = localStorage.getItem("notes") || '';

createNotesButton.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.innerHTML = "";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "./images/delete.png";
    img.alt = "Delete Note";

    let noteContainer = document.createElement("div");
    noteContainer.className = "note-container";

    noteContainer.appendChild(inputBox)
    noteContainer.appendChild(img);
    

    notesContainer.appendChild(noteContainer);
    updateStorage();
});



notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll(".input-box");
        updateStorage(); // Update storage when the content of a note changes
    }
});

function updateStorage() {
    notes = document.querySelectorAll(".input-box");
    localStorage.setItem("notes", notesContainer.innerHTML);
}



