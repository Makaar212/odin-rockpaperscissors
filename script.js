console.log("Hello World!");

function getComputerChoice() {
  cpuChoice = Math.random();

  switch (cpuChoice) {
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
