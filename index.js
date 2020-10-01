// 1. create variables for the game state to keep track of states in the DOM
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// 2. create variables to store references to the necessary DOM nodes
const message = document.getElementById("message");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const doubleBtn = document.getElementById("doubleBtn");
// var randomNum = 0;

/* 3. Hook up a click event listener to the Roll Dice Button. Log out a random
 number between 1 and 6. Hint: use Math.floor() and Math.random() */
rollBtn.addEventListener("click", function () {
  const randomNum = Math.floor(Math.random() * 6 + 1);

  // Extra feature 01: add randomly displayed double button
  if (Math.random() > 0.5) {
    doubleBtn.style.display = "block";
  } else {
    doubleBtn.style.display = "none";
  }

  // 5. Find out which players turn it is
  // 6. log out the value e.g. "Player 1 rolled 5"
  // 7. Switch the turn back to the other player

  // 8. Display the dice number instead of logging it out
  // 9. Use the 'active' class to show which player's turn it is
  // Hint: use the .classList.remove() and classlist.add() methods
  // 10. Update the "message" DOM node so that it states who's turn it is

  // 11. Update the scores for each player
  // 12. Display the scores in their scoreboards

  if (player1Turn) {
    player1Dice.textContent = randomNum;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
    player1Score += randomNum;
    player1Scoreboard.textContent = player1Score;
  } else {
    player2Dice.textContent = randomNum;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 Turn";
    player2Score += randomNum;
    player2Scoreboard.textContent = player2Score;
  }

  // 13. Check if a player has won. If so, change the message to "Player X has won!"
  // 14. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block

  // 15. Refactor the "dryer" code of rollBtn and resetBtn display status in checking the winner
  // Hint: create a function to contain the repeated codes

  function showDisplayBtn() {
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
    doubleBtn.style.display = "none";
  }

  if (player1Score >= 20) {
    message.textContent = "player 1 has won! 🙆";
    // rollBtn.style.display = "none";
    // resetBtn.style.display = "block";
    showDisplayBtn();
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 has won! WooHoo! 😤";
    showDisplayBtn();
    // rollBtn.style.display = "none";
    // resetBtn.style.display = "block";
  }
  player1Turn = !player1Turn;
});

// Extra feature 01: double the score when the user click on double button
doubleBtn.addEventListener("click", function () {
  const randomNum = Math.floor(Math.random() * 6 + 1) * 2;

  if (player1Turn) {
    player1Dice.textContent = randomNum;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
    player1Score += randomNum;
    player1Scoreboard.textContent = player1Score;
  } else {
    player2Dice.textContent = randomNum;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 Turn";
    player2Score += randomNum;
    player2Scoreboard.textContent = player2Score;
  }

  // 13. Check if a player has won. If so, change the message to "Player X has won!"
  // 14. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block

  // 15. Refactor the "dryer" code of rollBtn and resetBtn display status in checking the winner
  // Hint: create a function to contain the repeated codes

  function showDisplayBtn() {
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
    doubleBtn.style.display = "none";
  }

  if (player1Score >= 20) {
    message.textContent = "player 1 has won! 🙆";
    // rollBtn.style.display = "none";
    // resetBtn.style.display = "block";
    showDisplayBtn();
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 has won! WooHoo! 😤";
    showDisplayBtn();
    // rollBtn.style.display = "none";
    // resetBtn.style.display = "block";
  }
  player1Turn = !player1Turn;
  randomNum = randomNum * 2;
});

// 16. Hook a click event listener up with the Reset Button
// 17. Create a reset() function that resets the game
// 18. Invoke the reset() function when the Reset Button is clicked

resetBtn.addEventListener("click", function () {
  reset();
});

function reset() {
  // console.log("hello from the rest");
  message.textContent = "Player 1 Turn";
  player1Scoreboard.textContent = "0";
  player2Scoreboard.textContent = "0";
  player1Score = 0;
  player2Score = 0;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  rollBtn.style.display = "block";
  resetBtn.style.display = "none";
  player1Turn = true;
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
}
