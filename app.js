window.onload = function() {

  //vars scope may change in the future.
  var CHOICE_ROCK = document.querySelector('#rock'),
      CHOICE_PAPER = document.querySelector('#paper'),
      CHOICE_SCISSORS = document.querySelector('#scissors'),
      WINNER_TXT = document.querySelector('#winner');

  //user's choice received through input field
  var USER_CHOICE = function() {
    //get value of user input
    //if input == rock
    //else if input == paper
    //else if input == scissors
  };
  //Determine computer choice (maybe use a switch?)
  var COMPUTER_CHOICE = function() {
    var num = Math.floor(Math.random() * 3) + 1;
    var choice = '';
    if (num === 1) {
      choice = 'rock';
    } else if (num === 2) {
      choice = 'paper';
    } else {
      choice = 'scissors';
    }
    return choice;
  };
  // switch (num) {
  //   case 1:
  //     choice = 'rock';
  //     break;
  //   case 2:
  //     choice = 'paper';
  //   break;
  //   case 3:
  //     choice ='scissors';
  //   break;
  //   default :
  // }
  var TIE = function(USER_CHOICE, COMPUTER_CHOICE) {
    return USER_CHOICE === COMPUTER_CHOICE ? true : false;
  };
  //Break up into functions
  function ROCK(USER_CHOICE, COMPUTER_CHOICE) {
    //Rock
    if (USER_CHOICE === 'rock' && COMPUTER_CHOICE === 'scissors') {
      if (USER_CHOICE === 'rock' && COMPUTER_CHOICE === 'paper') {
         winner.innerHTML = 'PAPER WINS!';
      } else {
         winner.innerHTML = 'ROCK WINS!';
      }
    }
  }
  function PAPER(USER_CHOICE, COMPUTER_CHOICE)  {
    //Paper
    if (USER_CHOICE === 'paper' && COMPUTER_CHOICE === 'rock') {
      if (USER_CHOICE === 'paper' && COMPUTER_CHOICE === 'scissors') {
        winner.innerHTML = 'SCISSORS WINS!';
      } else {
        winner.innerHTML = 'PAPER WINS!';
      }
    }
    function SCISSORS(USER_CHOICE, COMPUTER_CHOICE) {
      //scissors
      if (USER_CHOICE === 'scissors' && COMPUTER_CHOICE === 'paper') {
        if (USER_CHOICE === 'scissors' && COMPUTER_CHOICE === 'rock') {
          winner.innerHTML = 'SCISSORS WINS!';
        } else {
          winner.innerHTML = 'ROCK WINS!';
        }
      }
    }
  }
};
