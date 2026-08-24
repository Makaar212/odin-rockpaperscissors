function getComputerChoice() {
  cpuChoice = Math.random();

  switch (true) {
    case cpuChoice <= 0.33:
      return "rock";
      break;
    case cpuChoice <= 0.66:
      return "scissors";
      break;
    case cpuChoice <= 1:
      return "paper";
      break;
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
  }
}

function playGame() {
  const NUMBER_OF_ROUNDS = 5;
  let currentRounds = 0;
  while (currentRounds < NUMBER_OF_ROUNDS) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    currentRounds++;
  }

  if (humanScore > computerScore) {
    alert("You won! nice job");
  } else {
    alert("You lost, womp womp womp");
  }
}

playGame();
