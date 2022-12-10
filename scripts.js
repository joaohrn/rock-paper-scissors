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
    return true;
  } else {
    return false;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection;
  let computerSelection;
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Choose: rock, paper or scissors?");
    computerSelection = getComputerChoice();
    if (playRound(playerSelection, getComputerChoice())) {
      playerScore += 1;
      console.log(`You win ${playerSelection} beats ${computerSelection}`);
    } else {
      computerScore += 1;
      console.log(`You lose ${computerSelection} beats ${playerSelection}`);
    }
  }
  if (playerScore > computerScore) {
    console.log(`You win!!! ${playerScore} against ${computerScore}`);
  } else {
    console.log(`You lose!!! ${playerScore} against ${computerScore}`);
  }
}
