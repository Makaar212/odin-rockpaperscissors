console.log("Hello World!");

function getComputerChoice() {
  cpuChoice = Math.random();

  switch (true) {
    case cpuChoice <= 0.33:
      return "Rock";
      break;
    case cpuChoice <= 0.66:
      return "Scissors";
      break;
    case cpuChoice <= 1:
      return "Paper";
      break;
  }
}

function getHumanChoice() {
  let userMove = prompt("Enter your choice of move");

  return userMove;
}
