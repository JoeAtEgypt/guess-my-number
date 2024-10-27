"use strict";

// console.log(document.querySelector(".message").textContent);

let message = document.querySelector(".message").textContent;

const numberValue = 13;

let score = document.querySelector(".score").textContent;
score = 20;

const checkNumber = function () {
  let guessInput = Number(document.querySelector(".guess").value);

  if (guessInput && score > 0) {
    console.log(guessInput, score, numberValue);
    if (guessInput === numberValue) {
      document.querySelector(".message").textContent = "🎉 Correct Number!";
      document.querySelector(".number").textContent = "13";
    }
  }
};
