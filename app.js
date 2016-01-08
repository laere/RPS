window.onload = function() {
  //vars scope may change in the future.
  var CHOICE_ROCK = document.querySelector('#rock'),
      CHOICE_PAPER = document.querySelector('#paper'),
      CHOICE_SCISSORS = document.querySelector('#scissors'),
      IMG_ROCK = document.querySelector('#rock-img'),
      IMG_PAPER = document.querySelector('#paper-img'),
      IMG_SCISSORS = document.querySelector('#scissors-img'),
      WINNER_TXT = document.querySelector('#winner'),
      COMP_IMG = document.querySelector('#compChoice'),
      PLAYER_CHOICE = document.querySelector('#player-choice'),
      TWEET = document.querySelector('#tweet'),
      TWEET_TAGLINE = document.querySelectorAll('#scoreboard div')[2],
      USER_SCORE = 0,
      COMPUTER_SCORE = 0,
      GAME_SCORE = {
        USER: 0,
        COMPUTER: 0
        }, // add pt to each per win, stringify to local Storage
      key = 'scores';

      TWEET_TAGLINE.style.fontSize = '.55em';


  CHOICE_ROCK.addEventListener('click', USER_CHOICE, false);
  CHOICE_PAPER.addEventListener('click', USER_CHOICE, false);
  CHOICE_SCISSORS.addEventListener('click', USER_CHOICE, false);

  IMG_ROCK.addEventListener('click', USER_CHOICE, false);
  IMG_PAPER.addEventListener('click', USER_CHOICE, false);
  IMG_SCISSORS.addEventListener('click', USER_CHOICE, false);
  //tweet your score
  TWEET.addEventListener('click', function() {
    var message = 'Checkout this awesome Rock, Paper and Scissors game!';
    message += ' https://laere.github.io/RPS - ';
    message += ' My score was ' + USER_SCORE + '.  The computers score was ' + COMPUTER_SCORE + ' .';
    // message += ' Think you can beat me?';
    // message += ' I bet you cant!';
    window.open('https://twitter.com/intent/tweet?text=' + message);
  }, false );

  // Return user choice value;
  function USER_CHOICE(e) {
    var compChoice = COMPUTER_CHOICE(),
        el = e.target,
        USER_SCORE_EL = document.querySelector('#user-score'),
        COMP_SCORE_EL = document.querySelector('#computer-score');
    if (el === CHOICE_ROCK || el === IMG_ROCK) {
      // console.log('USER CHOICE: ROCK');
      // console.log('COMPS CHOICE: ' + compChoice);
      // console.log(USER_SCORE);
      // console.log(COMPUTER_SCORE);
      ROCK('rock', compChoice);
      PLAYER_CHOICE_STYLE('ROCK!');
      USER_SCORE_EL.innerHTML = 'Your Score : ' + USER_SCORE;
      COMP_SCORE_EL.innerHTML = 'Computer Score : ' + COMPUTER_SCORE;
    } else if (el === CHOICE_PAPER || el === IMG_PAPER) {
      // console.log('USER CHOICE: PAPER');
      // console.log('COMPS CHOICE: ' + compChoice);
      // console.log(USER_SCORE);
      // console.log(COMPUTER_SCORE);
      PAPER('paper', compChoice);
      PLAYER_CHOICE_STYLE('PAPER!');
      USER_SCORE_EL.innerHTML = 'Your Score : ' + USER_SCORE;
      COMP_SCORE_EL.innerHTML = 'Computer Score : ' + COMPUTER_SCORE;
    } else if (el === CHOICE_SCISSORS || el === IMG_SCISSORS) {
      // console.log('USER CHOICE: SCISSORS');
      // console.log('COMPS CHOICE: ' + compChoice);
      // console.log(USER_SCORE);
      // console.log(COMPUTER_SCORE);
      SCISSORS('scissors', compChoice);
      PLAYER_CHOICE_STYLE('SCISSORS!');
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
      COMP_IMG.setAttribute('src', 'http://i.imgur.com/OHt2rjH.png');
      COMP_IMG.style.border = '1px solid black';
      return 'rock';
    } else if (num === 2) {
      COMP_IMG.setAttribute('src', 'http://i.imgur.com/H86s3q4.png');
      COMP_IMG.style.border = '1px solid black';
      return 'paper';
    } else if (num === 3) {
      COMP_IMG.setAttribute('src', 'http://i.imgur.com/rAkxkWc.png');
      COMP_IMG.style.border = '1px solid black';
      return 'scissors';
    }
  }
  // Break up into functions
  // compare values of user choice and computer chocie
  function ROCK(USER_CHOICE, COMPUTER_CHOICE) {
    if (USER_CHOICE === CHOICE_ROCK.id && COMPUTER_CHOICE === 'scissors') {
      //user wins
      USER_SCORE ++;
      WINNER_TXT.style.color = 'green';
      WINNER_TXT.innerHTML = 'YOU WIN!';
    } else if (USER_CHOICE === CHOICE_ROCK.id && COMPUTER_CHOICE === 'paper') {
      //comp wins
      COMPUTER_SCORE ++;
      WINNER_TXT.style.color = 'red';
      WINNER_TXT.innerHTML = 'COMPUTER WINS!';
    } else if (USER_CHOICE === CHOICE_ROCK.id && COMPUTER_CHOICE === 'rock') {
      WINNER_TXT.style.color = 'blue';
      WINNER_TXT.innerHTML = 'ITS A TIE!!!!!';
    }
  }
  function PAPER(USER_CHOICE, COMPUTER_CHOICE)  {
    //Paper
    if (USER_CHOICE === CHOICE_PAPER.id && COMPUTER_CHOICE === 'rock') {
      //user wins
      USER_SCORE ++;
      WINNER_TXT.style.color = 'green';
      WINNER_TXT.innerHTML = 'YOU WIN!';
    } else if (USER_CHOICE === CHOICE_PAPER.id && COMPUTER_CHOICE === 'scissors') {
      //comp wins
      COMPUTER_SCORE ++;
      WINNER_TXT.style.color = 'red';
      WINNER_TXT.innerHTML = 'COMPUTER WINS!';
    } else if (USER_CHOICE === CHOICE_PAPER.id && COMPUTER_CHOICE === 'paper') {
      WINNER_TXT.style.color = 'blue';
      WINNER_TXT.innerHTML = 'ITS A TIE!!!!!';
    }
  }
  function SCISSORS(USER_CHOICE, COMPUTER_CHOICE) {
    //scissors
    if (USER_CHOICE === CHOICE_SCISSORS.id && COMPUTER_CHOICE === 'paper') {
      //user wins
      USER_SCORE ++;
      WINNER_TXT.style.color = 'green';
      WINNER_TXT.innerHTML = 'YOU WIN!';
    } else if (USER_CHOICE === CHOICE_SCISSORS.id && COMPUTER_CHOICE === 'rock') {
      //comp wins
      COMPUTER_SCORE ++;
      WINNER_TXT.style.color = 'red';
      WINNER_TXT.innerHTML = 'COMPUTER WINS!';
    } else if (USER_CHOICE === CHOICE_SCISSORS.id && COMPUTER_CHOICE === 'scissors') {
      WINNER_TXT.style.color = 'blue';
      WINNER_TXT.innerHTML = 'ITS A TIE!!!!!';
    }
  }

  function PLAYER_CHOICE_STYLE(choice) {
    PLAYER_CHOICE.innerHTML = 'You chose: ' + choice;
    PLAYER_CHOICE.style.fontWeight = 'bold';
    PLAYER_CHOICE.style.backgroundColor = '#555';
    PLAYER_CHOICE.style.color = 'white';
    PLAYER_CHOICE.style.borderBottom = '3px solid #444';
    PLAYER_CHOICE.style.borderRadius = '30px';
    PLAYER_CHOICE.style.padding ='10px';
  }

  // Add Local Storage
  // function RENDER_SCORES() {
  //
  // }
  //
  // //Store scores
  // function STORE_SCORE(LOCAL_STORAGE, key) {
  //   var score = JSON.stringify(LOCAL_STORAGE);
  //   LOCAL_STORAGE.setItem(key, score);
  // }
  //fetch scores
  // function fetch(key, callback) {
  //   var LOCAL_STORAGE = JSON.pase(LOCAL_STORAGE.getItem(key));
  //   callback(LOCAL_STORAGE);
  // }
  //
  // function render(data) {
  //   if (data !== null && data.hasOwnProperty('forEach')) {
  //     data.forEach(function(current){
  //       RENDER_SCORES(current);
  //     });
  //   }
  // }
};
