function doesUserWantToPlayAgain() {
  return confirm("do you want to play again");
}

function isValidInput(rangeStart, rangeEnd, userInput) {
  return (rangeStart <= userInput && userInput <= rangeEnd);
}

function getSuggestion(userInput, computerChoice) {
  if (userInput < computerChoice) {
    return userInput + " Too low! Try a higher number.";
  }

  return userInput + " Too high! Try a smaller number.";
}

function getRemainingChances(maxAttempts) {
  return "Take a guess!" + ("Remaining attempts: " + maxAttempts);
}

function getComputerChoice(rangeStart, rangeEnd) {
  const range = rangeEnd - rangeStart;

  return Math.round(Math.random() * range) + rangeStart;
}

function getUserChoice(rangeStart, rangeEnd) {
  const userInput = +prompt("enter number :");
  if (!isValidInput(rangeStart, rangeEnd, userInput)) {
    console.log("Invalid input! Please enter a number ");
    return getUserChoice(rangeStart, rangeEnd);
  }

  return userInput;
}

function givenInstructions(rangeStart, rangeEnd, maxAttempts) {
  return "The secret number is between " + rangeStart + " and "
    + rangeEnd + " You have " + maxAttempts + " attempts to find it.";
}

function welcomeMessage() {
  return "----Welcome to Guess the Number!----";
}

function showGameResult(rangeStart, rangeEnd, maxAttempts, computerChoice) {
  if (maxAttempts === 0) {
    return "Oh no! You've used all your attempts. Better luck next time!";
  }

  console.log(getRemainingChances(maxAttempts));
  const userInput = getUserChoice(rangeStart, rangeEnd);

  if (userInput === computerChoice) {
    return "Bravo! You've nailed it. The number was " + userInput;
  }
  console.log(getSuggestion(userInput, computerChoice));

  return showGameResult(rangeStart, rangeEnd, maxAttempts - 1, computerChoice);
}


function playGame(rangeStart, rangeEnd, maxAttempts) {
  console.log(welcomeMessage());
  console.log(givenInstructions(rangeStart, rangeEnd, maxAttempts));

  const computerChoice = getComputerChoice(rangeStart, rangeEnd);
  console.log(showGameResult(rangeStart, rangeEnd, maxAttempts, computerChoice));

  if (!doesUserWantToPlayAgain()) {
    return "thanks for playing";
  }

  return playGame(rangeStart, rangeEnd, maxAttempts);
}

console.log(playGame(10, 12, 6));
