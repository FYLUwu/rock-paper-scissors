let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  switch (randomChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "rock";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Please enter a choice");
  return userChoice;
}

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    return "Its a tie!!!";
  }

  if (humanChoice === "rock") {
    return computerChoice === "paper" ? "Computer wins" : "Player wins";
  } else if (humanChoice === "paper") {
    return computerChoice === "scissors" ? "Computer wins" : "Player wins";
  } else if (humanChoice === "scissors") {
    return computerChoice === "rock" ? "Computer wins" : "Player wins";
  }
}

function playGame() {
  for (i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

playGame();