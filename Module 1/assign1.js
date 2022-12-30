const r1 = require("readline-sync");

let validInputs = ["a", "s", "m", "d", "e", "A", "S", "M", "D", "E"];
while (true) {
  console.log("Welcome to fun with math!");
  console.log("Choose which mathematical operation you want to perform.");
  console.log("Enter a for addition");
  console.log("Enter s for substraction");
  console.log("Enter m for multiplication");
  console.log("Enter d for division");
  console.log("Enter e to exit");

  let operator;
  let input = r1.question("Enter operator symbol: ");
  if (validInputs.includes(input)) {
    if (input === "e" || input === "E") {
      console.log("GoodBye! Thanks for playing!");
      break;
    }
    operator = input;
  } else {
    console.warn("Invalid input for operator");
    continue;
  }

  let first;
  input = parseInt(r1.question("Enter first number: "));
  if (!isNaN(input)) first = input;
  else {
    console.warn("Invalid input for first number!");
    continue;
  }

  let second;
  input = parseInt(r1.question("Enter second number: "));
  if (!isNaN(input)) second = input;
  else {
    console.warn("Invalid input for second number!");
    continue;
  }

  let answer;
  switch (operator) {
    case "a":
    case "A":
      answer = first + second;
      break;
    case "s":
    case "S":
      answer = first - second;
      break;
    case "m":
    case "M":
      answer = first * second;
      break;
    case "d":
    case "D":
      if (second === 0) {
        console.warn("Can not divide by zero!");
        continue;
      } else answer = first / second;
  }

  console.log("Answer is:", answer);
}
