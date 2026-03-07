let humanScore = 0;
let computerScore = 0;

document.querySelectorAll('.choice-button').forEach((b) =>
  b.addEventListener('click', (e) => {
    const playerChoice = e.target.value;
    playRound(playerChoice);
  }),
);

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

function playRound(playerChoice) {
  let computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    return "Its a tie!!!";
  }

  if (playerChoice === "rock") {
    alertWinner(computerChoice === "paper" ? "Computer wins" : "Player wins");
  } else if (playerChoice === "paper") {
    alertWinner(computerChoice === "scissors" ? "Computer wins" : "Player wins");
  } else if (playerChoice === "scissors") {
    alertWinner(computerChoice === "rock" ? "Computer wins" : "Player wins");
  }
}

function alertWinner(winningMessage) {
  alert(winningMessage);
}
