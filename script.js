"use strict";
let player1nameEl = document.querySelector("#name--0");
let player1scoreEl = document.querySelector("#score--0");
let current1El = document.querySelector("#current--0");
let player2nameEl = document.querySelector("#name--1");
let player2scoreEl = document.querySelector("#score--1");
let current2El = document.querySelector("#current--1");
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");
let diceEl = document.querySelector(".dice");
let newbtnEl = document.querySelector(".btn--new");
let rollbtnEl = document.querySelector(".btn--roll");
let holdbtnEl = document.querySelector(".btn--hold");
// let = document.querySelector('#');
// let = document.querySelector('#');
let currentscore = 0;
let activePlayer = 0;
let scores = [0, 0];

// console.log(player1scoreEl);
player1scoreEl.textContent = 0;
player2scoreEl.textContent = 0;
diceEl.classList.add("hidden");
let changeUser = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log(activePlayer);
  currentscore = 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};
let rolldice = () => {
  let randomnumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randomnumber);
  diceEl.src = `dice-${randomnumber}.png`;
  diceEl.classList.remove("hidden");
  if (randomnumber !== 1) {
    currentscore += randomnumber;
    // current1El.textContent = currentscore;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentscore;
  } else {
    changeUser();
  }
};
let hold = () => {
  scores[activePlayer] += currentscore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  changeUser();
};
rollbtnEl.addEventListener("click", rolldice);
holdbtnEl.addEventListener("click", hold);
