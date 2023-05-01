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
      return "It's a tie for rock!🪨";
    } else if (user === 'paper') {
      return 'You Won! Paper📃 beats Rock🪨';
    } else if (user === 'scissors') {
      return 'You Lose! Rock🪨 beats Scissors ✂️';
    }
  } else if (comp === 'paper') {
    if (user === 'rock') {
      return 'You Lose! Paper📃 beats Rock🪨';
    } else if (user === 'paper') {
      return "It's a tie for paper!📃";
    } else if (user === 'scissors') {
      return 'You Won! Scissors ✂️ beats Paper📃';
    }
  } else if (comp === 'scissors') {
    if (user === 'rock') {
      return 'You Won! Rock🪨 beats Scissors ✂️';
    } else if (user === 'paper') {
      return 'You Lose! Scissors ✂️ beats Paper📃';
    } else if (user === 'scissors') {
      return "It's a tie for scissors!✂️";
    }
  }
}; //playRound() end

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
    // const startMsg = document.createElement('p');
    // const startMsgText = document.createTextNode('HI This is text node');
    // startMsg.appendChild(startMsgText);
    // content.appendChild(startMsg);

    let selectionDiv = document.getElementById('selection');
    selectionDiv.innerHTML = `player selection: ${playerSelection}<br>Computer selection: ${computerSelection}`;

    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result;

    // const resultP = document.createElement('p');
    // const resultPText = document.innerHTML(result);
    // resultP.appendChild(resultPText);
    // resultDiv.appendChild(resultP);
  });
});
