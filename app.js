window.onload = function() {

  //vars scope may change in the future.
  var CHOICE_ROCK = document.querySelector('#rock'),
      CHOICE_PAPER = document.querySelector('#paper'),
      CHOICE_SCISSORS = document.querySelector('#scissors'),
      WINNER_TXT = document.querySelector('#winner'),
      BUTTONS = document.querySelectorAll('input'),
      COMP_TXT = document.querySelector('#compChoice');

      CHOICE_ROCK.addEventListener('click', USER_CHOICE, false);
      CHOICE_PAPER.addEventListener('click', USER_CHOICE, false);
      CHOICE_SCISSORS.addEventListener('click', USER_CHOICE, false);
    //click event set up
  //  document.querySelector('#container').addEventListener ('click', function(e) {

  //user's choice received through input field
  function USER_CHOICE(e) {
    var el = e.target;
    if (el === CHOICE_ROCK) {
      WINNER_TXT.innerHTML = "This is Rock";
      COMP_TXT.innerHTML = COMPUTER_CHOICE() + ' is the computers choice!';
      console.log('I am rock');
    } else if (el === CHOICE_PAPER) {
      WINNER_TXT.innerHTML = "This is Paper";
      COMP_TXT.innerHTML = COMPUTER_CHOICE() + ' is the computers choice!';
      console.log('I am paper');
    } else if (el === CHOICE_SCISSORS) {
      WINNER_TXT.innerHTML = "This is Scissors";
      COMP_TXT.innerHTML = COMPUTER_CHOICE() + ' is the computers choice!';
      console.log('I am scissors');
    }
  e.stopPropagation();
}
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
    if (USER_CHOICE === CHOICE_ROCK && COMPUTER_CHOICE === 'scissors') {
      if (USER_CHOICE === CHOICE_ROCK && COMPUTER_CHOICE === 'paper') {
         winner.innerHTML = 'PAPER WINS!';
      } else {
         winner.innerHTML = 'ROCK WINS!';
      }
    }
  }
  function PAPER(USER_CHOICE, COMPUTER_CHOICE)  {
    //Paper
    if (USER_CHOICE === CHOICE_PAPER && COMPUTER_CHOICE === 'rock') {
      if (USER_CHOICE === CHOICE_PAPER && COMPUTER_CHOICE === 'scissors') {
        winner.innerHTML = 'SCISSORS WINS!';
      } else {
        winner.innerHTML = 'PAPER WINS!';
      }
    }
    function SCISSORS(USER_CHOICE, COMPUTER_CHOICE) {
      //scissors
      if (USER_CHOICE === CHOICE_SCISSORS && COMPUTER_CHOICE === 'paper') {
        if (USER_CHOICE === CHOICE_SCISSORS && COMPUTER_CHOICE === 'rock') {
          winner.innerHTML = 'SCISSORS WINS!';
        } else {
          winner.innerHTML = 'ROCK WINS!';
        }
      }
    }
  }
};
