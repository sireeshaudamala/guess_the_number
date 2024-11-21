// Assume rangeStart and rangeEnd are always greater than 0.
// rangeStart is always less than rangeEnd.
function askForPlay() {
  return confirm("do you want to play again");
}

function suggestion(rangeStart, rangeEnd, maxAttempts, guessNumber, number) {
  if (guessNumber < number) {
    console.log(guessNumber + " Too low! Try a higher number.");
    return startGame(rangeStart, rangeEnd, maxAttempts - 1, number);
  }

  console.log(guessNumber + " Too high! Try a smaller number.");
  return startGame(rangeStart, rangeEnd, maxAttempts - 1, number);
}

function startGame(rangeStart, rangeEnd, maxAttempts, number) {
  if (maxAttempts === 0) {
    console.log("Oh no! You've used all your attempts. Better luck next time!");
    return "\n\n------------------***-----------------------";
  }

  console.log("Take a guess!" + ("Remaining attempts: " + maxAttempts));
  const guessNumber = +prompt("enter number :");

  if (guessNumber === number) {
    console.log("Bravo! You've nailed it. The number was " + number);
    return "\n\n------------------***-----------------------";
  }

  return isValidInput(rangeStart, rangeEnd, maxAttempts, guessNumber, number);
}

function isValidInput(rangeStart, rangeEnd, maxAttempts, guessNumber, number) {
  if (rangeStart <= guessNumber && guessNumber <= rangeEnd) {
    return suggestion(rangeStart, rangeEnd, maxAttempts, guessNumber, number);
  }

  console.log("Invalid input! Please enter a number ");
  return startGame(rangeStart, rangeEnd, maxAttempts, number);
}

function range(rangeStart, rangeEnd, maxAttempts) {
  const range = rangeEnd - rangeStart;
  const number = Math.round(Math.random() * range) + rangeStart;

  return startGame(rangeStart, rangeEnd, maxAttempts, number);
}

function greetings(rangeStart, rangeEnd, maxAttempts) {
  console.log("----Welcome to Guess the Number!----");
  console.log("The secret number is between " + rangeStart + " and "
    + rangeEnd + " You have " + maxAttempts + " attempts to find it");
  console.log(range(rangeStart, rangeEnd, maxAttempts));

  if (askForPlay()) {
    console.clear();
    return greetings(rangeStart, rangeEnd, maxAttempts);
  }

  return "Goodbye!";
}

console.clear();
console.log(greetings(10, 13, 2));
