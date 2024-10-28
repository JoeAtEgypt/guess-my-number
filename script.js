"use strict";

// const number = Math.floor(Math.random() * 20) + 1;
const secretNumber = ~~(Math.random() * 20) + 1;
let score = 20;
console.log(secretNumber);

//  Event Handler
const checkNumber = function () {
  const guess = Number(document.querySelector(".guess").value);
  let message = "";

  if (!guess) {
    message = "⛔ No Number!";
  } else if (guess === secretNumber) {
    message = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (guess > secretNumber && score--) {
    message = "📈 Too High!";
  } else if (guess < secretNumber && score--) {
    message = "📉 Too Low!";
  }
  if (score < 1) {
    message = "💥 You lost the game!";
    score = 0;
  }
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = message;
};

// addEventListener is the best way.
// 'click' is an Event
document.querySelector(".check").addEventListener("click", checkNumber);

const reset = function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").textContent = "";

  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".score").textContent = score;
};
document.querySelector(".again").addEventListener("click", reset);
