'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//check event handler
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!!');
    //when player wins
  } else if (guess === Secretnumber) {
    //document.querySelector('.message').textContent =
    //'Correct Number!hurrayyyy🥳';
    displayMessage('Correct Number!hurrayyyy🥳');
    document.querySelector('.number').textContent = Secretnumber;

    document.querySelector('body').style.backgroundColor = 'hwb(165 10% 16%)';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //whent he guess is too high
  } else if (guess !== Secretnumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      displayMessage(guesss > Secretnumber ? 'Too high📈' : 'Too Low📉');
      score--;
      document.querySelector('.score').textContent = score;
      //when player lose
    } else {
      //document.querySelector('.message').textContent =
      // 'YOU LOST!!BETTER LUCK NEXT TIME';
      displayMessage('YOU LOST!!BETTER LUCK NEXT TIME');
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > Secretnumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     //when player lose
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'YOU LOST!!BETTER LUCK NEXT TIME';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //when the guess is too low
  // } else if (guess < Secretnumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'YOU LOST!!BETTER LUCK NEXT TIME';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
//again event handler
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
