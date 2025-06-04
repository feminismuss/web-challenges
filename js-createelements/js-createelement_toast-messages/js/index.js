console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const addNewToast = document.createElement("li");
  addNewToast.classList.add("toast-container__message");
  addNewToast.textContent = "I'am a new Toastie";
  toastContainer.append(addNewToast);
});



clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
