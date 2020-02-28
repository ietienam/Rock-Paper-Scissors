'use strict';

// all buttons
var allButtons = document.getElementsByTagName('button');

// user buttons
var userBtn = document.querySelectorAll('.userBtn');

// computer buttons
var compBtn = document.querySelectorAll('.compBtn');

//  page element variables
var startButton = document.querySelector('.startGame');
var resetButton = document.querySelector('.resetGame');
var roundResult = document.querySelector('.result');
var gameWinner = document.querySelector('.roundWinner');
var user = document.querySelector('.userScore').textContent;
var computer = document.querySelector('.computerScore').textContent;
var userScore = 0;
var computerScore = 0;

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

  console.log(selection);
  return selection;
}

// GET user and computer selection and determine winner
/**
 *
*/

function singleRound(playerSelection, computerSelection) {
  if (
    // Player win conditions
    (playerSelection === rockButton.value && computerSelection === 'scissors') ||
    (playerSelection === paperButton.value && computerSelection === 'rock') ||
    (playerSelection === scissorsButton.value && computerSelection === 'paper')
  ) {
    return 'win';
  } else if (
    // Computer win conditions
    (playerSelection === rockButton.value && computerSelection === 'paper') ||
    (playerSelection === paperButton.value && computerSelection === 'scissors') ||
    (playerSelection === scissorsButton.value && computerSelection === 'rock')
  ) {
    return 'lose';
  } else {
    // If there's no win or lose condition passing? Draw!
    return 'draw';
  }
}

function reset() {
  userScore = 0;
  computerScore = 0;
  roundResult.textContent = '';
  gameWinner.textContent = '';
}

function start() {
  gameModeDisplay.forEach(elem => {
    elem.classList.remove('hidden');
  })
}

function announceWinner(userScore, computerScore) {
  userScore > computerScore ? gameWinner.textContent = `You've Won this round!` :
  gameWinner.textContent = `You've Lost this round!`;
}

function canEndGame(userScore, computerScore) {
  return (userScore >= 5 || computerScore >=5) ? true : false;
}

userBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    var computerSelection = computerPlay();
    var userSelection = btn.value;
    var result = singleRound(userSelection, computerSelection);

    if (result === 'win') {
      userScore += 1;
      user = `${userScore}`;
      roundResult.textContent = `You Win! ${userSelection} beats ${computerSelection}!`;
    } else if (result === 'lose') {
      computerScore += 1;
      computer = `${computerScore}`;
      roundResult.textContent = `You Lose! ${computerSelection} beats ${userSelection}!`;
    } else {
      roundResult.textContent = `Draw!`;
    }
  })
})

startButton.addEventListener('click', e => {
  start();
  startButton.classList.add('hidden');
  resetButton.classList.add('hidden');
})

resetButton.addEventListener('click', e => {
  reset();
  startButton.classList.add('hidden');
  resetButton.classList.add('hidden');
})
