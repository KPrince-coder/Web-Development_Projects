/**
 * Saturday, November 12, 2022
 */
'use strict';

/**
 * Declaring variables
 * @param secretNumber holds the random generated number
 * @param displaySecretNumber displays the secret number to the user once he guesses right
 *
 */
const displaySecretNumber = function (number) {
  document.querySelector('.header--questMark').textContent = number;
};

let secretNumber = Math.round(Math.random() * 20);

let scoreValue = 20;
let highScoreValue = 0;

/**
 * @param guessMessage to hold message to display to the user
 * Informing him about the output of the guess
 */
const guessMessage = function (message) {
  document.querySelector('.guess').textContent = message;
};

// event listener and handler for clicking the check button when the user guess
document.querySelector('[type=submit]').addEventListener('click', function () {
  const userGuess = Number(document.querySelector('[type=number]').value);

  // comparing the user guessed number with the secret generated number
  if (!userGuess) {
    guessMessage('☹️ No Guess made!');
  } else if (userGuess === secretNumber) {
    displaySecretNumber(secretNumber);

    guessMessage('🎉 You guessed right!');

    document.querySelector('.wrapper').style.backgroundColor = 'rgb(5, 184, 5)';

    document.querySelector('.header--questMark').style.color = 'rgb(5, 184, 5)';

    document.querySelector('.header--questMark').style.width = '9rem';
    document.querySelector('.header--questMark').style.fontSize = '3.3rem';

    // assigning high score value
    if (scoreValue > highScoreValue) {
      highScoreValue = scoreValue;

      document.querySelector('.highscore-value').textContent = highScoreValue;
    }
  } else if (userGuess !== secretNumber) {
    if (scoreValue > 1) {
      userGuess > secretNumber
        ? guessMessage('😔 Guessed too high!')
        : guessMessage('🤦‍♀️ Guessed too low!');

      // wrong guess cause minus one of the score value
      scoreValue--;

      document.querySelector('.score-value').textContent = scoreValue;
    } else {
      guessMessage('💀 You lost the game!');

      document.querySelector('.score-value').textContent = 0;
    }
  }
});

// when the again button is pressed
// resetting the game
document.querySelector('.header--reset').addEventListener('click', function () {
  displaySecretNumber('?');

  guessMessage('Start guessing...');

  scoreValue = 20;

  secretNumber = Math.round(Math.random() * 20);

  document.querySelector('[type=number').value = '';
  document.querySelector('.score-value').textContent = scoreValue;

  document.querySelector('.wrapper').style.backgroundColor = 'rgb(34, 34, 34)';

  document.querySelector('.header--questMark').style.width = '8rem';
  document.querySelector('.header--questMark').style.fontSize = '2.3rem';
  document.querySelector('.header--questMark').style.color = 'rgb(34, 34, 34)';
});
