function getComputerChoice() {
  cpuChoice = Math.random();

  switch (true) {
    case cpuChoice <= 0.33:
      return "rock";
    case cpuChoice <= 0.66:
      return "scissors";
    case cpuChoice <= 1:
      return "paper";
  }
}

const form = document.querySelector("#number");
const inputField = document.querySelector("#roundCounter");
const buttons = document.querySelectorAll("button");
const roundResult = document.querySelector("#round-result");
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
let numberOfRounds = 0;
let humanScore = 0;
let computerScore = 0;
let currNumberOfRounds = 0;

// Custom event
const endGameEvent = new CustomEvent("endgame");

function playRound(humanChoice, computerChoice) {
  // Rock conditions
  if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
    roundResult.textContent = "You lose! paper beats rock";
    computerScore++;
  } else if (
    humanChoice.toLowerCase() === "rock" &&
    computerChoice === "scissors"
  ) {
    roundResult.textContent = "You win! rock beats Scissors";
    humanScore++;
    // Scissor conditions
  } else if (
    humanChoice.toLowerCase() === "scissors" &&
    computerChoice === "paper"
  ) {
    roundResult.textContent = "You win! scissors beats paper";
    humanScore++;
  } else if (
    humanChoice.toLowerCase() === "scissors" &&
    computerChoice === "rock"
  ) {
    roundResult.textContent = "You lose! rock beats scissors";
    computerScore++;

    // Paper conditions
  } else if (
    humanChoice.toLowerCase() === "paper" &&
    computerChoice === "scissors"
  ) {
    roundResult.textContent = "You lose! scissors beats paper";
    computerScore++;
  } else if (
    humanChoice.toLowerCase() === "paper" &&
    computerChoice === "rock"
  ) {
    roundResult.textContent = "You win! paper beats rock";
    humanScore++;
  } else {
    roundResult.textContent = "Draw!";
  }
  computerScoreDisplay.textContent = "Computer score: " + computerScore;
  humanScoreDisplay.textContent = "Your score: " + humanScore;
  currNumberOfRounds++;

  if (currNumberOfRounds >= numberOfRounds) {
    form.dispatchEvent(endGameEvent);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  numberOfRounds = parseInt(inputField.value);
  inputField.value = "";

  // make form disapear and buttons appear
  buttons.forEach((button) => {
    button.style.display = "block";
  });
  form.style.display = "none";

  // playGame(numberOfRounds);
});

form.addEventListener("endgame", (e) => {
  // show game result
  roundResult.textContent =
    computerScore > humanScore
      ? "Computer Won! You lost"
      : computerScore < humanScore
        ? "You Won! Computer Lost!"
        : "Draw! No One Won!";
  buttons.forEach((button) => {
    button.style.display = "none";
  });

  // show form again
  form.style.display = "flex";
  inputField.placeholder = "Play Again?";
  computerScore = 0;
  humanScore = 0;
  currNumberOfRounds = 0;
});

const buttonContainer = document.querySelector("#button-container");

buttonContainer.addEventListener("click", (e) => {
  target = e.target;
  switch (target.id) {
    case "paper":
      playRound("paper", getComputerChoice());
      break;
    case "scissors":
      playRound("scissors", getComputerChoice());
      break;
    case "rock":
      playRound("rock", getComputerChoice());
      break;
  }
});
