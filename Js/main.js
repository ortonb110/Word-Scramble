const wordText = document.querySelector(".content-word");
const wordHint = document.querySelector(".hint span");
const resfreshBtn = document.querySelector(".refresh-word"),
  checkWordBtn = document.querySelector(".check-word"),
  inputTextField = document.querySelector("input");

let correctWord;

const initGame = () => {
  let randomObject = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObject.word.split("");
  //Shuffling and swiping wordArray letters randomly
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.textContent = wordArray.join("");
  wordHint.textContent = randomObject.hint;
  correctWord = randomObject.word;
  inputTextField.value = "";
  inputTextField.setAttribute("maxlength", correctWord.length)
};

initGame();

const checkWord = () => {
  let userWord = inputTextField.value.toLocaleLowerCase();
  if (!userWord) {
    return alert(`Please enter a word!`);
  }
  if (userWord !== correctWord) {
    alert(`Oops ${userWord} is not the correct word!`);
  } else {
    alert(`Congrats! ${userWord.toUpperCase()} is the correct word!`);
    
    initGame();
  }
};

resfreshBtn.addEventListener("click", initGame);
checkWordBtn.addEventListener("click", checkWord);
