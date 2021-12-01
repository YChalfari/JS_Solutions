let isGameOver = false;
const wrongLettersArr = [];
const message = document.querySelector(".message");
const letter = document.querySelector(".letter");
const wrongLetters = document.querySelector(".wrong-letters");
const resetBtn = document.querySelector(".reset-btn");
//random generator
let winningLetter;
const randLetterGenerator = () => {
  winningLetter = String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  console.log(winningLetter);
};

const youWon = () => {
  isGameOver = true;
  message.classList.remove("red-text");
  message.classList.add("green-text");
  message.textContent = "CONGRATULATIONS! You finally guessed correctly";
  resetBtn.style.visibility = "visible";
  resetBtn.focus();
};

const reset = (e) => {
  wrongLettersArr.splice(0, wrongLettersArr.length);
  sendMessage("");
  wrongLetters.textContent = "";
  resetBtn.style.visibility = "hidden";
  message.classList.remove("green-text");
  message.classList.add("red-text");
  isGameOver = false;
  randLetterGenerator();
};
const fadeOut = () => {
  message.classList.toggle("fade-out");
  setTimeout(() => {
    message.textContent = "";
    message.classList.toggle("fade-out");
  }, 900);
};

const sendMessage = (msg) => {
  message.textContent = `${msg}`;
  fadeOut();
};

function compareLetter(e) {
  if (!isGameOver) {
    const userInput = e.key.toLowerCase();
    if (!/[a-zA-Z]/.test(userInput)) {
      sendMessage("Come on, we both know thats not a letter");
    } else if (wrongLettersArr.includes(userInput)) {
      sendMessage("YOU ALREADY GUESSED THIS LETTER");
    } else if (userInput !== winningLetter) {
      sendMessage("Oops, Guess again!");
      wrongLettersArr.push(userInput);
      wrongLetters.textContent = wrongLettersArr;
    } else {
      youWon();
    }
  }
}
resetBtn.addEventListener("click", reset);
window.addEventListener("keypress", compareLetter);
randLetterGenerator();
