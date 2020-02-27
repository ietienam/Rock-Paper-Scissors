// GET user and computer selection and determine winner
/**
 *
*/
function singleRound(playerSelection, computerSelection = computerPlay()) {
  if (
    // Player win conditions
    (playerSelection === rockButton.value && computerSelection === 'scissors') ||
    (playerSelection === paperButton.value && computerSelection === 'rock') ||
    (playerSelection === scissorsButton.value && computerSelection === 'paper')) {
    roundResult.textContent = `You Win! ${playerSelection.value} beats ${computerSelection}.`;
    console.log(roundResult.textContent);
    return 'win';
  }
  else if (
    // Computer win conditions
    (playerSelection === rockButton.value && computerSelection === 'paper') ||
    (playerSelection === paperButton.value && computerSelection === 'scissors') ||
    (playerSelection === scissorsButton.value && computerSelection === 'rock')) {
    roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection.value}.`;
    console.log(roundResult.textContent);
    return 'lose';
  }
  else {
    // If there's no win or lose condition passing? Draw!
    roundResult.textContent = `Draw! ${playerSelection.value} and ${computerSelection} the same.`;
    console.log(roundResult.textContent);
    return 'draw';
  }
}
