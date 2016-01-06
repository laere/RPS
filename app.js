window.onload = function() {
  //vars scope may change in the future.
  var CHOICE_ROCK = document.querySelector('#rock'),
      CHOICE_PAPER = document.querySelector('#paper'),
      CHOICE_SCISSORS = document.querySelector('#scissors'),
      WINNER_TXT = document.querySelector('#winner'),
      BUTTONS = document.querySelectorAll('input'),
      COMP_IMG = document.querySelector('#compChoice'),
      USER_SCORE_EL = document.querySelector('#user-score'),
      COMP_SCORE_EL = document.querySelector('#computer-score'),
      PLAYER_CHOICE = document.querySelector('#player-choice'),
      USER_SCORE = 0,
      COMPUTER_SCORE = 0,
      LOCAL_STORAGE = [];

  CHOICE_ROCK.addEventListener('click', USER_CHOICE, false);
  CHOICE_PAPER.addEventListener('click', USER_CHOICE, false);
  CHOICE_SCISSORS.addEventListener('click', USER_CHOICE, false);
  // Return user choice value;
  function USER_CHOICE(e) {
    var compChoice = COMPUTER_CHOICE();
    var el = e.target;
    if (el === CHOICE_ROCK) {
      console.log('USER CHOICE: ROCK');
      console.log('COMPS CHOICE: ' + compChoice);
      console.log(USER_SCORE);
      console.log(COMPUTER_SCORE);
      ROCK('rock', compChoice);
      PLAYER_CHOICE.style.color = 'green';
      PLAYER_CHOICE.style.fontWeight = 'bold';
      PLAYER_CHOICE.innerHTML = 'You chose ROCK!';
      USER_SCORE_EL.innerHTML = 'Your Score : ' + USER_SCORE;
      COMP_SCORE_EL.innerHTML = 'Computer Score : ' + COMPUTER_SCORE;
    } else if (el === CHOICE_PAPER) {
      console.log('USER CHOICE: PAPER');
      console.log('COMPS CHOICE: ' + compChoice);
      console.log(USER_SCORE);
      console.log(COMPUTER_SCORE);
      PAPER('paper', compChoice);
      PLAYER_CHOICE.style.color = 'green';
      PLAYER_CHOICE.style.fontWeight = 'bold';
      PLAYER_CHOICE.innerHTML = 'You chose PAPER!';
      USER_SCORE_EL.innerHTML = 'Your Score : ' + USER_SCORE;
      COMP_SCORE_EL.innerHTML = 'Computer Score : ' + COMPUTER_SCORE;
    } else if (el === CHOICE_SCISSORS) {
      console.log('USER CHOICE: SCISSORS');
      console.log('COMPS CHOICE: ' + compChoice);
      console.log(USER_SCORE);
      console.log(COMPUTER_SCORE);
      SCISSORS('scissors', compChoice);
      PLAYER_CHOICE.style.color = 'green';
      PLAYER_CHOICE.style.fontWeight = 'bold';
      PLAYER_CHOICE.innerHTML = 'You chose SCISSORS!';
      USER_SCORE_EL.innerHTML = 'Your Score : ' + USER_SCORE;
      COMP_SCORE_EL.innerHTML = 'Computer Score : ' + COMPUTER_SCORE;
    }
    e.stopPropagation();
  }
  // Return value of computer choice
  function COMPUTER_CHOICE() {
    var num = Math.floor(Math.random() * 3) + 1;
    console.log('COMP CHOICE number: ' + num);
    if (num === 1) {
      COMP_IMG.setAttribute('src', 'images/rock.png');
      return 'rock';
    } else if (num === 2) {
      COMP_IMG.setAttribute('src', 'images/paper.png');
      return 'paper';
    } else if (num === 3) {
      COMP_IMG.setAttribute('src', 'images/scissors.png');
      return 'scissors';
    }
  }
  // Break up into functions
  // compare values of user choice and computer chocie
  function ROCK(USER_CHOICE, COMPUTER_CHOICE) {
    if (USER_CHOICE === CHOICE_ROCK.id && COMPUTER_CHOICE === 'scissors') {
      USER_SCORE ++;
      WINNER_TXT.style.color = 'green';
      WINNER_TXT.innerHTML = 'YOU WIN!';
    } else if (USER_CHOICE === CHOICE_ROCK.id && COMPUTER_CHOICE === 'paper') {
      COMPUTER_SCORE ++;
      WINNER_TXT.style.color = 'red';
      WINNER_TXT.innerHTML = 'COMPUTER WINS!';
    } else if (USER_CHOICE === CHOICE_ROCK.id && COMPUTER_CHOICE === 'rock') {
      WINNER_TXT.innerHTML = 'ITS A TIE!!!!!';
    }
  }
  function PAPER(USER_CHOICE, COMPUTER_CHOICE)  {
    //Paper
    if (USER_CHOICE === CHOICE_PAPER.id && COMPUTER_CHOICE === 'rock') {
      USER_SCORE ++;
      WINNER_TXT.style.color = 'green';
      WINNER_TXT.innerHTML = 'YOU WIN!';
    } else if (USER_CHOICE === CHOICE_PAPER.id && COMPUTER_CHOICE === 'scissors') {
      COMPUTER_SCORE ++;
      WINNER_TXT.style.color = 'red';
      WINNER_TXT.innerHTML = 'COMPUTER WINS!';
    } else if (USER_CHOICE === CHOICE_PAPER.id && COMPUTER_CHOICE === 'paper') {
      WINNER_TXT.innerHTML = 'ITS A TIE!!!!!';
    }
  }
  function SCISSORS(USER_CHOICE, COMPUTER_CHOICE) {
    //scissors
    if (USER_CHOICE === CHOICE_SCISSORS.id && COMPUTER_CHOICE === 'paper') {
      USER_SCORE ++;
      WINNER_TXT.style.color = 'green';
      WINNER_TXT.innerHTML = 'YOU WIN!';
    } else if (USER_CHOICE === CHOICE_SCISSORS.id && COMPUTER_CHOICE === 'rock') {
      COMPUTER_SCORE ++;
      WINNER_TXT.style.color = 'red';
      WINNER_TXT.innerHTML = 'COMPUTER WINS!';
    } else if (USER_CHOICE === CHOICE_SCISSORS.id && COMPUTER_CHOICE === 'scissors') {
      WINNER_TXT.innerHTML = 'ITS A TIE!!!!!';
    }
  }
};
