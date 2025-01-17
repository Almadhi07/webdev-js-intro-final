"use strict";
const guessInput = document.getElementById("guess-input");
const guessMessage = document.getElementById("guess-message");
const currentGuess = document.getElementById("current-guess");
const computerGuess = document.getElementById("computer-guess");
const guessHistory = document.getElementById("guess-history");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");



let computerNumber;
let remainingGuesses;
let guessHistoryArray;



function initializeGame() {
    computerNumber = Math.floor(Math.random() * 100) + 1;
    remainingGuesses = 3;
    guessHistoryArray = [];
    guessMessage.textContent = "";
    currentGuess.textContent = "";
    computerGuess.textContent = "";
    guessHistory.textContent = "";
    guessInput.value = "";
    submitBtn.disabled = false;
    restartBtn.disabled = true;
  }



  function handleSubmitGuess() {
    const playerGuess = parseInt(guessInput.value);
    if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100) {
      guessMessage.textContent = "Please enter a valid number between 1 and 100.";
      return;
    }
    currentGuess.textContent = playerGuess;
    guessHistoryArray.push(playerGuess);
    guessHistory.textContent = guessHistoryArray.join(", ");
    if (playerGuess === computerNumber) {
      guessMessage.textContent = "You won! 🎉";
      computerGuess.textContent = computerNumber;
      endGame();
    } else if (playerGuess > computerNumber) {
      guessMessage.textContent = "Too high!";
    } else {
      guessMessage.textContent = "Too low!";
    }
    remainingGuesses--;
    if (remainingGuesses === 0 && playerGuess !== computerNumber) {
      guessMessage.textContent = `You lost! 😢 The number was ${computerNumber}.`;
      computerGuess.textContent = computerNumber;
      endGame();
    }
    guessInput.value = "";
  }


  
  function endGame() {
    submitBtn.disabled = true;
    restartBtn.disabled = false;
  }



  
  submitBtn.addEventListener("click", handleSubmitGuess);
  restartBtn.addEventListener("click", initializeGame);
  
  initializeGame();