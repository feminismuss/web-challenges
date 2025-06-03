console.clear();

// Convert the text in the input field to uppercase when the button is clicked.

// - [ ] Assign the input element to a variable.
// - [ ] Assign the button element to a variable.
// - [ ] Add an event listener to the button that converts the input value to uppercase when the button is clicked.

// Hint: Access the input value by using `.value` on the input element.

const input = document.querySelector (`[data-js="first-input"]`);
const buttonUpperCase = document.querySelector (`[data-js="button-uppercase"]`);

buttonUpperCase.addEventListener("click", () =>{
    input.value = input.value.buttonUppercase();
    console.log(firstInput);
});