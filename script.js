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

function getHumanChoice() {
  let userMove = prompt("Enter your choice of move");

  return userMove.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // Rock conditions
  if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
    console.log("You lose! paper beats rock");
    computerScore++;
  } else if (
    humanChoice.toLowerCase() === "rock" &&
    computerChoice === "scissors"
  ) {
    console.log("You win! rock beats scissors");
    humanScore++;
    // Scissor conditions
  } else if (
    humanChoice.toLowerCase() === "scissors" &&
    computerChoice === "paper"
  ) {
    console.log("You win! scissors beats paper");
    humanScore++;
  } else if (
    humanChoice.toLowerCase() === "scissors" &&
    computerChoice === "rock"
  ) {
    console.log("You lose! rock beats scissors");
    computerScore++;

    // Paper conditions
  } else if (
    humanChoice.toLowerCase() === "paper" &&
    computerChoice === "scissors"
  ) {
    console.log("You lose! scissors beats paper");
    computerScore++;
  } else if (
    humanChoice.toLowerCase() === "paper" &&
    computerChoice === "rock"
  ) {
    console.log("You win! paper beats rock");
    humanScore++;
  } else {
    console.log("Draw!");
  }
}

function playGame(numberOfRounds) {
  const NUMBER_OF_ROUNDS = numberOfRounds;
  let currentRounds = 0;
  while (currentRounds < NUMBER_OF_ROUNDS) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    if (humanChoice === computerChoice) {
      currentRounds--;
    }

    currentRounds++;
  }

  if (humanScore > computerScore) {
    alert("You won! nice job");
  } else {
    alert("You lost, womp womp womp");
  }
}
const form = document.querySelector("#number");
const inputField = document.querySelector("#roundCounter");
const buttons = document.querySelectorAll("button");
let numberOfRounds = 0;

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
