console.clear();

const form = document.querySelector('[data-js="form"]');
// const badnessInput  = document.querySelector('[data-js="badness"]');
// const ageInput = document.querySelector('[data-js="age"]');

// ageBadnessSum = badnessInput + ageInput;
// console.log(ageBadnessSum);

form.addEventListener("submit", (event) => {
event.preventDefault();
const formData = new FormData(event.target);
const data = Object.fromEntries(formData);

event.target.reset();
event.target.elements.firstName.focus();
console.log("Data: ", data);
});

// ## Bonus: Calculate and log the age-badness-sum 🤷‍♀️

// The formula is: `age + badness`
// Log to the console _(replace the values between the quotes)_:
// > The age-badness-sum of "firstName" is "age-badness-sum"
