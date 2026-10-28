"use strict";
//////////////////////secretNumber////////////////////////////
const secretNumber = Math.trunc(Math.random() * 20) + 1;
////////////////////////////////////////////////////////////////
let score = 20;
let highscore = 0;

///////////

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
////////////////////////check click////////////////////////////////////////
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //////////no number//////////////////////////
  if (!guess) {
    /* document.querySelector(".message").textContent = "No Number";*/
    displayMessage("no number");
  }

  ///////geuss is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      /*  document.querySelector(".message").textContent =
        geuss > secretNumber ? "Too high" : " too low";*/
      displayMessage(guess > secretNumber ? "Too high" : " too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "you lost the
      // game";
      displayMessage("you lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  ////////////////geuss>number////////////////////////
  /*
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
*/
  ////////////////////////////////geuss<number///////////////////////////
  /*
  } else if (guess < secretNumber) {
    score--;

    if (score > 1) {
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Too Low";
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }*/
  /////////////////guess===number/////////////////////////////////
  else if (guess === secretNumber) {
    /* document.querySelector(".message").textContent = "currec number";*/
    displayMessage("currect number");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
});
//////////////////////////////////////////////////////////////////////

//////////////////////again////////////////////////
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector(".message").textContent = "start guessing...";
  displayMessage("start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
