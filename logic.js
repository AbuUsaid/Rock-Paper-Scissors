console.log('#welcome#\n_________');

let getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  let options = ['rock', 'paper', 'scissors'];
  return options[randomNum];
};

let computer = getComputerChoice();

let user = 'paper';

function playRound(user, computer) {
  console.log(`The player choice is ${user}, the comp choice is ${computer}\n`);

  if (user === computer) {
    return `It\'s a tie! you both chose:${user}`;
  } else if (user === 'paper' && computer === 'scissors') {
    return `User choice is ${user} and Computer choice is ${computer}\n You Lose!`;
  } else if (user === 'scissors' && computer === 'paper') {
    return `User choice is ${user} and Computer choice is ${computer}\n You Win!`;
  } else if (user === 'rock' && computer === 'scissors') {
    return `User choice is ${user} and Computer choice is ${computer}\n You Win!`;
  } else if (user === 'scissors' && computer === 'rock') {
    return `User choice is ${user} and Computer choice is ${computer}\n You Lose!`;
  } else if (user === 'paper' && computer === 'rock') {
    return `User choice is ${user} and Computer choice is ${computer}\n You Win!`;
  } else if (user === 'rock' && computer === 'paper') {
    return `User choice is ${user} and Computer choice is ${computer}\n You Lose!`;
  }
} // playRound()
console.log(playRound(user, computer));
