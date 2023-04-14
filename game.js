console.log('#welcome#\n_________');

let getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  let options = ['rock', 'paper', 'scissors'];
  return options[randomNum];
};

let computerSelection = getComputerChoice();

let playerSelection = prompt(
  "Let's play rock🪨-paper📃-scissors✂️! \nPlease choose 'rock', 'paper', or 'scissors'."
).toLowerCase();

function playRound(user, comp) {
  console.log(
    `The player choice is ${user}, the comp choice is ${computerSelection}`
  );

  /*
   * paper beats rock🪨📃✂️
   * rock beats scissors
   * scissors beats paper
   */

  if (comp === 'rock') {
    if (user === 'rock') {
      return "It's a tie for rock!🪨";
    } else if (user === 'paper') {
      return 'You Won ! Paper📃 beats Rock🪨';
    } else if (user === 'scissors') {
      return 'You Lose ! Rock🪨 beats Scissors✂️';
    }
  } else if (comp === 'paper') {
    if (user === 'rock') {
      return 'You Lose ! Paper📃 beats Rock🪨';
    } else if (user === 'paper') {
      return "It's a tie for paper!📃";
    } else if (user === 'scissors') {
      return 'You Won ! Scissors✂️ beats Paper📃';
    }
  } else if (comp === 'scissors') {
    if (user === 'rock') {
      return 'You Won ! Rock🪨 beats Scissors✂️';
    } else if (user === 'paper') {
      return 'You Lose ! Scissors✂️ beats Paper📃';
    } else if (user === 'scissors') {
      return "It's a tie for scissors!✂️";
    }
  }
} //playRound()

console.log(playRound(playerSelection, computerSelection));

//The above function is working fine
