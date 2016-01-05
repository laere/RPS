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
  // Return user choice value;
  function USER_CHOICE(e) {
    var compChoice = COMPUTER_CHOICE();
    var el = e.target;
    if (el === CHOICE_ROCK) {
      COMP_TXT.innerHTML = compChoice + ' is the computers choice!';
      console.log('USER CHOICE: ROCK');
      console.log('COMPS CHOICE: ' + compChoice);
      ROCK('rock', compChoice);
    } else if (el === CHOICE_PAPER) {
      COMP_TXT.innerHTML = compChoice + ' is the computers choice!';
      console.log('I am paper');
      PAPER('paper', compChoice);
    } else if (el === CHOICE_SCISSORS) {
      COMP_TXT.innerHTML = compChoice + ' is the computers choice!';
      console.log('I am scissors');
      SCISSORS('scissors', compChoice);
    }
  e.stopPropagation();
}
  // Return value of computer choice
  function COMPUTER_CHOICE() {
    var num = Math.floor(Math.random() * 3) + 1;
    console.log('COMP CHOICE number: ' + num);
    if (num === 1) {
      return 'rock';
    } else if (num === 2) {
      return 'paper';
    } else if (num === 3) {
      return 'scissors';
    }
  }
  // Break up into functions
  // compare values of user choice and computer chocie
  function ROCK(USER_CHOICE, COMPUTER_CHOICE) {
    if (USER_CHOICE === CHOICE_ROCK.id && COMPUTER_CHOICE === 'scissors') {
      WINNER_TXT.innerHTML = 'ROCK WINS!';
    } else if (USER_CHOICE === CHOICE_ROCK.id && COMPUTER_CHOICE === 'paper') {
      WINNER_TXT.innerHTML = 'PAPER WINS!';
    } else if (USER_CHOICE === CHOICE_ROCK.id && COMPUTER_CHOICE === 'rock') {
      WINNER_TXT.innerHTML = 'ITS A TIE!!!!!';
    }
  }
  function PAPER(USER_CHOICE, COMPUTER_CHOICE)  {
    //Paper
    if (USER_CHOICE === CHOICE_PAPER.id && COMPUTER_CHOICE === 'rock') {
      console.log('paper wins');
        WINNER_TXT.innerHTML = 'PAPER WINS!';
      } else if (USER_CHOICE === CHOICE_PAPER.id && COMPUTER_CHOICE === 'scissors') {
          WINNER_TXT.innerHTML = 'SCISSORS WIN!';
          console.log(WINNER_TXT);
      } else if (USER_CHOICE === CHOICE_PAPER.id && COMPUTER_CHOICE === 'paper') {
        WINNER_TXT.innerHTML = 'ITS A TIE!!!!!';
      }
    }
    function SCISSORS(USER_CHOICE, COMPUTER_CHOICE) {
      //scissors
      if (USER_CHOICE === CHOICE_SCISSORS.id && COMPUTER_CHOICE === 'paper') {
        console.log('scissors win');
          WINNER_TXT.innerHTML = 'SCISSORS WINS!';
      } else if (USER_CHOICE === CHOICE_SCISSORS.id && COMPUTER_CHOICE === 'rock') {
              WINNER_TXT.innerHTML = 'ROCK WINS!';
      } else if (USER_CHOICE === CHOICE_SCISSORS.id && COMPUTER_CHOICE === 'scissors') {
        WINNER_TXT.innerHTML = 'ITS A TIE!!!!!';
      }
    }
};
