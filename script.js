"use strict";

// const number = Math.floor(Math.random() * 20) + 1;
let secretNumber = ~~(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//  Event Handler
const checkNumber = function () {
  const guess = Number(document.querySelector(".guess").value);
  let message = "";

  // WHEN tHERE IS NO INPUT
  if (!guess) {
    message = "⛔ No Number!";
    // WHEN USER WON THE GAME
  } else if (guess === secretNumber) {
    message = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
    highScore += score;
    // WHEN INPUT IS NOT THE GOAL NUMBER
  } else if (guess !== secretNumber && score--) {
    message = "📈 Too High!" ? guess > secretNumber : (message = "📉 Too Low!");
  }

  // WHEN USER LOST THE GAME
  if (score < 1) {
    message = "💥 You lost the game!";
    score = 0;
    highScore = 0;
  }

  // UPDATE UI
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highScore;
  document.querySelector(".message").textContent = message;
};

// addEventListener is the best way.
// 'click' is an Event
document.querySelector(".check").addEventListener("click", checkNumber);

const reset = function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";

  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";

  score = 20;
  document.querySelector(".score").textContent = score;
  const resetSecretNumber = ~~(Math.random() * 20) + 1;
  secretNumber = resetSecretNumber;
};
document.querySelector(".again").addEventListener("click", reset);
