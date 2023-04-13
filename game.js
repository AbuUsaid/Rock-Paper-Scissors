console.log('#welcome#\n_________');

let getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  let options = ['rock', 'paper', 'scissors'];
  return options[randomNum];
};

// function getComputerChoice() {
//   let randomNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
//   let options = ['rock', 'paper', 'scissors'];
//   return options[randomNum];
// }

// console.log(getComputerChoice());

let playerSelection = prompt(
  "Let's play rock-paper-scissors! Please choose 'rock', 'paper', or 'scissors'."
).toLowerCase();

function playRound(user, comp) {
  //   console.log(`The player choice is ${user}, the comp choice is ${comp()}`);

  if (user === 'rock' && comp() === 'paper') {
    return 'You Lose! Paper beats Rock';
  }
}

console.log(playRound(playerSelection, getComputerChoice));

//The above function is working fine
