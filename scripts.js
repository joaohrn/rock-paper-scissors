const btns = document.querySelectorAll(".btn");
const resultSection = document.querySelector("#results-section");
let playerScore = 0;
let computerScore = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playRound(e.target.id, getComputerChoice());
  });
});
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
function checkResult(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "draw";
  } else if (
    (playerSelection.toLowerCase() == `rock` &&
      computerSelection == `scissors`) ||
    (playerSelection.toLowerCase() == `scissors` &&
      computerSelection == `paper`) ||
    (playerSelection.toLowerCase() == `paper` && computerSelection == `rock`)
  ) {
    return "win";
  } else {
    return "loss";
  }
}
function playRound(playerSelection, computerSelection) {
  const result = document.createElement("div");
  if (checkResult(playerSelection, computerSelection) == "draw") {
    result.textContent = `It's a draw! ${playerScore} x ${computerScore}`;
  } else if (checkResult(playerSelection, computerSelection) == "win") {
    playerScore += 1;
    result.textContent = `You win ${playerSelection} beats ${computerSelection}; ${playerScore} x ${computerScore}`;
  } else {
    computerScore += 1;
    result.textContent = `You lose ${computerSelection} beats ${playerSelection}; ${playerScore} x ${computerScore}`;
  }
  if (playerScore == 5) {
    result.textContent = `You win ${playerScore} x ${computerScore}`;
    result.style.color = "green";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    result.textContent = `You lose ${playerScore} x ${computerScore}`;
    result.style.color = "red";
    playerScore = 0;
    computerScore = 0;
  }
  resultSection.appendChild(result);
}
