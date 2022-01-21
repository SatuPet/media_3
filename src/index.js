console.log('Hello console!');
console.log('Hello console!');

const min = 1;
const max = 100;
var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const computerPlayer = document.querySelector('.computerPlayer');

let guessCount = 1;
let resetButton;

let starTime;

let playCount = 0;
let averageGuessCount = 0;

checkGuess = () => {
  let returnValue;
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
    startTime = Date.now();
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
    returnValue = 1;
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
      returnValue = 2;
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
      returnValue = 0;
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
  return returnValue;
};

// computer start playing 1000 times
// gets number value from checkGuess functions (0,1 & 2)
addComputerPlayer = () => {

  playCount = 0;
  while (playCount != 1000) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    guessCount = 0;
    let guessValue = max / 2;
    let lastValue = 0;
    guessField.value = guessValue;
    let returnValue = checkGuess();
    
    playCount++;

    // if answer is not correct -> it's start cheking numbers using math
    while (returnValue != 1) {
      if (guessCount > 20)
        break;
      let lastNumberSubstract = Math.abs(guessValue - lastValue);
      lastValue = guessValue;
      let guessAdditionalNumber = lastNumberSubstract / 2;

      if (returnValue == 0) {
        guessValue = Math.floor(guessValue - guessAdditionalNumber);
        guessField.value = guessValue;
      }
      else if (returnValue == 2) {
        guessValue = Math.ceil(guessValue + guessAdditionalNumber);
        guessField.value = guessValue;
      }

      returnValue = checkGuess();
    };
    returnValue = 5;
    averageGuessCount = (averageGuessCount + guessCount) / 2;
  }
  console.log(averageGuessCount);
};


guessSubmit.addEventListener('click', checkGuess);
computerPlayer.addEventListener('click', addComputerPlayer);

setGameOver = () => {
  const endTime = Date.now();
  let diff = (startTime - endTime) / 1000;
  diff = Math.abs(Math.floor(diff));
  lastResult.textContent += ' Your playing time = ' + diff + 's';
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
};

resetGame = () => {
  guessCount = 1;
  playCount++;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
};
