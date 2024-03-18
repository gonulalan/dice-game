function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function changeImage(player, diceNumber) {
  document
    .querySelector(".img" + player)
    .setAttribute("src", "./images/dice" + diceNumber + ".png");
}

function game() {
  var player1 = getRandomNumber();
  changeImage("1", player1);
  var player2 = getRandomNumber();
  changeImage("2", player2);

  if (player1 > player2) {
    document.querySelector("h2").textContent = "Player 1 Win!";
    document.querySelector(".dice .p1").textContent = "🏆 Player 1";
    document.querySelector(".dice .p2").textContent = "Player 2";
  } else if (player2 > player1) {
    document.querySelector("h2").textContent = "Player 2 Win!";
    document.querySelector(".dice .p1").textContent = "Player 1";
    document.querySelector(".dice .p2").textContent = "🏆 Player 2";
  } else {
    document.querySelector("h2").textContent = "Draw 🤝🏼";
    document.querySelector(".dice .p1").textContent = "Player 1";
    document.querySelector(".dice .p2").textContent = "Player 2";
  }
}

game();
