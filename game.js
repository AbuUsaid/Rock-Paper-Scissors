console.log('#welcome#\n_________');

let getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  let options = ['rock', 'paper', 'scissors'];
  return options[randomNum];
};

let playerSelection = '';
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    let computerSelection = getComputerChoice();

    console.log(
      `player selection: ${playerSelection}\ncomp selection: ${computerSelection}`
    );
  });
});

//--------------------
/*
 * paper beats rock🪨📃✂️
 * rock beats scissors
 * scissors beats paper
 */

/*
let playRound = (user, comp) => {
  console.log(`The player choice is ${user}, the comp choice is ${comp}`);

  if (comp === 'rock') {
    if (user === 'rock') {
      return "It's a tie for rock!🪨";
    } else if (user === 'paper') {
      return 'You Won ! Paper📃 beats Rock🪨';
    } else if (user === 'scissors') {
      return 'You Lose ! Rock🪨 beats Scissors ✂️';
    }
  } else if (comp === 'paper') {
    if (user === 'rock') {
      return 'You Lose ! Paper📃 beats Rock🪨';
    } else if (user === 'paper') {
      return "It's a tie for paper!📃";
    } else if (user === 'scissors') {
      return 'You Won ! Scissors ✂️ beats Paper📃';
    }
  } else if (comp === 'scissors') {
    if (user === 'rock') {
      return 'You Won ! Rock🪨 beats Scissors ✂️';
    } else if (user === 'paper') {
      return 'You Lose ! Scissors ✂️ beats Paper📃';
    } else if (user === 'scissors') {
      return "It's a tie for scissors!✂️";
    }
  }
}; //playRound() end
*/

/*
//score object
let score = {
  user: 0,
  computer: 0,
  tie: 0,
};
*/

//game of 5 rounds
// for (let i = 0; i < 5; i++) {
// let playerSelection = prompt(
//   "Let's play rock🪨-paper📃-scissors ✂️! \nPlease choose 'rock', 'paper', or 'scissors'."
// ).toLowerCase();

/*
  let result = playRound(playerSelection, computerSelection);
  console.log(result);

  if (
    result === 'You Won ! Paper📃 beats Rock🪨' ||
    result === 'You Won ! Scissors ✂️ beats Paper📃' ||
    result === 'You Won ! Rock🪨 beats Scissors ✂️'
  ) {
    score.user++;
  } else if (
    result === 'You Lose ! Rock🪨 beats Scissors ✂️' ||
    result === 'You Lose ! Paper📃 beats Rock🪨' ||
    result === 'You Lose ! Scissors ✂️ beats Paper📃'
  ) {
    score.computer++;
  } else if (
    result === "It's a tie for rock!🪨" ||
    result === "It's a tie for paper!📃" ||
    result === "It's a tie for scissors!✂️"
  ) {
    score.tie++;
  }
  */

// } // for loop ends

/*
console.log(
  `🏁Final score🏁: User ${score.user} - Computer ${score.computer} - Ties ${score.tie}`
);
*/

//declaring winnner based on the score
/*
if (score.user > score.computer) {
  console.log('You win the game! 🏆');
} else if (score.user < score.computer) {
  console.log('You lose the game! 💤');
} else {
  console.log("It's a tie! 🤝");
}
*/
