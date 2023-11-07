let selector = (ele) => document.querySelector(ele);
let allSelector = (ele) => document.querySelectorAll(ele);
const notesContainer = selector(".notes-container");
const createBtn = selector(".btn");
let notes = allSelector(".input-box");

function showNotes() {
	notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage() {
	localStorage.setItem("notes", notesContainer.innerHTML);
}
createBtn.addEventListener("click", creator);
function creator() {
	let inputBox = document.createElement("p");
	let img = document.createElement("img");
	inputBox.className = "input-box";
	inputBox.setAttribute("contenteditable", true);
	img.src = "asset/CSS/images/delete.png";
	notesContainer.appendChild(inputBox).appendChild(img);
}
notesContainer.addEventListener("click", (e) => {
	if (e.target.tagName === "IMG") {
		e.target.parentElement.remove();
		updateStorage();
	} else if (e.target.tagName == "P") {
		notes = allSelector(".input-box");
		notes.forEach((nt) => {
			nt.onkeyup = function () {
				updateStorage();
			};
		});
	}
});
document.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		document.execCommand("insertLineBreak");
		e.preventDefault();
	}
});
