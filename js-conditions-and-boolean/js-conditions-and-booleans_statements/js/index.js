console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Acces denied");
}

// Part 2: Even / Odd
// - use an if/else statement to log 'even number' if the variable `number` is even, and 'odd number' otherwise
// - use different values for `number` to check if all cases work.

const number = 7;
if (number / 2 == 0) {
  consol.log("Number is even");
} else {
  console.log("Number is odd");
}

// Part 3: Hotdogs
// - for a given `numberOfHotdogs` a person buys, log the respective price that the person has to pay:
// - for less than 5 hotdogs: 2 euro per hotdog
// - for at least 5 but less than 100 hotdogs: 1.50 euro per hotdog
// - for at least 100 but less than 1 000 000 hotdogs: 1 euro per hotdog
// - for at least 1 000 000 hotdogs: 0.10 euro per hotdog
// - change the `numberOfHotdogs` to see if your code works properly

const numberOfHotdogs = 1000001;

if (numberOfHotdogs <= 5) {
  price = numberOfHotdogs * 2;
  console.log(price);
} else if (numberOfHotdogs <= 100) {
  price = numberOfHotdogs * 1.5;
  console.log("Deine Hotdogs kosten:", price);
} else if (numberOfHotdogs <= 1000000) {
  price = numberOfHotdogs * 1;
  console.log("Deine Hotdogs kosten:", price);
} else if (numberOfHotdogs >= 1000000) {
  price = numberOfHotdogs * 0.1;
  console.log("Deine Hotdogs kosten:", price);
}

// Part 4: Daytime
const currentHour = 12;

const statement = "";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
