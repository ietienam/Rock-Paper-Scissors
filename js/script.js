'use strict';

// all buttons
var allButtons = document.getElementsByTagName('button');

// user buttons
var userBtn = document.querySelectorAll('.userBtn');

//  page element variables
var startButton = document.querySelector('.startGame');
var resetButton = document.querySelector('.resetGame');
var roundResult = document.querySelector('.result');
var gameWinner = document.querySelector('.roundWinner');
var userScore = document.querySelector('.userScore');
var computerScore = document.querySelector('.computerScore');

// all selections
var gameModeDisplay = document.querySelectorAll('.onStart');

// user selections
var rockButton = document.querySelector('.userChoice .rock');
var paperButton = document.querySelector('.userChoice .paper');
var scissorsButton = document.querySelector('.userChoice .scissors');

// computer selections
var crockButton = document.querySelector('.computerChoice .rock');
var cpaperButton = document.querySelector('.computerChoice .paper');
var cscissorsButton = document.querySelector('.computerChoice .scissors');

// Computer randomly selects either rock, paper or scissors
function computerPlay() {
  var options = ['rock', 'paper', 'scissors'];
  var selection = options[Math.floor(Math.random() * 3)];

  if (selection === crockButton.value) {
    if (crockButton.classList.contains('hidden')) {
      crockButton.classList.remove('');
    }
    cpaperButton.classList.add('hidden');
    cscissorsButton.classList.add('hidden');
  } else if (selection = cpaperButton.value) {
    if (cpaperButton.classList.contains('hidden')) {
      cpaperButton.classList.remove('');
    }
    crockButton.classList.add('hidden');
    cscissorsButton.classList.add('hidden');
  } else {
    if (cscissorsButton.classList.contains('hidden')) {
      cscissorsButton.classList.remove('');
    }
    crockButton.classList.add('hidden');
    cpaperButton.classList.add('hidden');
  }

  console.log(selection);
  return selection;
}

// GET user and computer selection and determine winner
/**
 * 
*/

function singleRound(playerSelection, computerSelection = computerPlay()) {
  if (
    // Player win conditions
    (playerSelection === rockButton.value && computerSelection === 'scissors') ||
    (playerSelection === paperButton.value && computerSelection === 'rock') ||
    (playerSelection === scissorsButton.value && computerSelection === 'paper')
  ) {
    roundResult.textContent = `You Win! ${playerSelection.value} beats ${computerSelection}.`;
    console.log(roundResult.textContent);
    return 'win';
  } else if (
    // Computer win conditions
    (playerSelection === rockButton.value && computerSelection === 'paper') ||
    (playerSelection === paperButton.value && computerSelection === 'scissors') ||
    (playerSelection === scissorsButton.value && computerSelection === 'rock')
  ) {
    roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection.value}.`;
    console.log(roundResult.textContent);
    return 'lose';
  } else {
    // If there's no win or lose condition passing? Draw!
    roundResult.textContent = `Draw! ${playerSelection.value} and ${computerSelection} the same.`;
    console.log(roundResult.textContent);
    return 'draw';
  }
}

function reset() {
  userScore.textContent = '0';
  computerScore.textContent = '0';
  roundResult.textContent = '';
  gameWinner.textContent = '';
}

function start() {
  gameModeDisplay.forEach(elem => {
    elem.classList.remove('hidden');
  })
}

/**
 * Return the winner after 5 rounds
 * and show each of their scores.
 * The one with the highest wins.
 */
userBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    var result = singleRound(btn.value);

    if (result === 'win') {
      userScore.textContent = Number(userScore.textContent) + 1;
    } else if (result === 'lose') {
      computerScore.textContent = Number(computerScore.textContent) + 1;
    } else {
      return;
    }

    if (userScore.textContent == 5) {
      userBtn.classList.add('hidden');
      gameWinner.textContent = 'You Win!';
    } else if (computerScore.textContent == 5) {
      userList.classList.add('hidden');
      gameWinner.textContent = 'You Lose!';
    }
  })
})

startButton.addEventListener('click', start);
resetButton.addEventListener('click', reset);
// create an event listener the uses for each click event, increment count by 1
// reset button should return count to 0 and remove hidden class from selections