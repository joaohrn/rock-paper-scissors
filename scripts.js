function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return `It's a draw`;
  } else if (
    (playerSelection.toLowerCase() == `rock` &&
      computerSelection == `scissors`) ||
    (playerSelection.toLowerCase() == `scissors` &&
      computerSelection == `paper`) ||
    (playerSelection.toLowerCase() == `paper` && computerSelection == `rock`)
  ) {
    return `You win ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose ${computerSelection} beats ${playerSelection}`;
  }
}
