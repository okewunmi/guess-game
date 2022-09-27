'use strict';
let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number guess';
    displayMessage('No number guess');
  } else if (guess === secreteNumber) {
    document.querySelector('.number').textContent = secreteNumber;
    displayMessage('correct number!');
    // document.querySelector('.message').textContent = 'correct number!';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secreteNumber ? 'number is too high!' : 'number is too low!';
      score--;
      displayMessage(
        guess > secreteNumber ? 'number is too high!' : 'number is too low!'
      );
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game!');
      //   document.querySelector('.message').textContent = 'you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   else if (guess > secreteNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'number is too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   else if (guess < secreteNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'number is too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
