// variables
var start = document.querySelector

// Computer randomly selects either rock, paper or scissors
function computerPlay() {
  var options = ['rock', 'paper', 'scissors'];
  var selection = options[Math.floor(Math.random() * 3)];

  return selection;
}

// GET user and computer selection and determine winner
/**
 * TODO: Make user input case insensitive and assign playerSelection a
 * default param value gotten from the input in HTML
*/
function singleRound(playerSelection, computerSelection = computerPlay()) {
  if (
    // Player win conditions
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else if (
    // Computer win conditions
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  } else {
    // If there's no win or lose condition passing? Draw!
    return `Draw! ${playerSelection} and ${computerSelection} the same.`;
  }
}

/**
 * Return the winner after 5 rounds
 * and show each of their scores.
 * The one with the highest wins.
 */
function game() {

}
