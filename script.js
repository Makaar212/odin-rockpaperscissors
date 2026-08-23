console.log("Hello World!");

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

function playRound(humanChoice, computerChoice) {}
