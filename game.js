console.log('#welcome#\n_________');

let getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  let options = ['rock', 'paper', 'scissors'];
  return options[randomNum];
};

let playRound = (user, comp) => {
  console.log(`The player choice is ${user}, the comp choice is ${comp}`);

  if (comp === 'rock') {
    if (user === 'rock') {
      score.tie++;
      return "It's a tie for rock!🪨";
    } else if (user === 'paper') {
      score.user++;
      return 'You Won! Paper📃 beats Rock🪨';
    } else if (user === 'scissors') {
      score.computer++;
      return 'You Lose! Rock🪨 beats Scissors ✂️';
    }
  } else if (comp === 'paper') {
    if (user === 'rock') {
      score.computer++;
      return 'You Lose! Paper📃 beats Rock🪨';
    } else if (user === 'paper') {
      score.tie++;
      return "It's a tie for paper!📃";
    } else if (user === 'scissors') {
      score.user++;
      return 'You Won! Scissors ✂️ beats Paper📃';
    }
  } else if (comp === 'scissors') {
    if (user === 'rock') {
      score.user++;
      return 'You Won! Rock🪨 beats Scissors ✂️';
    } else if (user === 'paper') {
      score.computer++;
      return 'You Lose! Scissors ✂️ beats Paper📃';
    } else if (user === 'scissors') {
      score.tie++;
      return "It's a tie for scissors!✂️";
    }
  }
}; //playRound() end

let score = {
  //score object
  user: 0,
  computer: 0,
  tie: 0,
};

let roundCount = 0;
let game = () => {
  let playerSelection = '';
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playerSelection = button.id;

      let computerSelection = getComputerChoice();

      console.log(
        `player selection: ${playerSelection}\ncomp selection: ${computerSelection}`
      );
      const content = document.getElementById('content');

      if (roundCount >= 5) return;

      let selectionDiv = document.getElementById('selection');
      selectionDiv.innerHTML = `player selection: ${playerSelection}<br>Computer selection: ${computerSelection}`;

      let result = playRound(playerSelection, computerSelection);
      console.log(result);

      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = result;

      roundCount++;
      console.log(roundCount);

      // const scoreDiv = document.getElementById('score');
      // scoreDiv.innerHTML = `🏁Final score🏁: User ${score.user} - Computer ${score.computer} - Ties ${score.tie}`;
    }); //buttonAddEventListener
  }); //button
}; //game() ends

// for (let i = 1; i <= 5; i++) {
//   if (i <= 5) {
//     game();
//   } else {
//     console.log('End of the 5 round');
//   }
// }
game();
