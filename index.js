function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function changeImage(player, diceNumber) {
  $(".img" + player).attr("src", "./images/dice" + diceNumber + ".png");
}

function game() {
  var player1 = getRandomNumber();
  changeImage("1", player1);
  var player2 = getRandomNumber();
  changeImage("2", player2);

  if (player1 > player2) {
    $("h2").text("Player 1 Win!");
    $(".dice .p1").text("🏆 Player 1");
    $(".dice .p2").text("Player 2");
  } else if (player2 > player1) {
    $("h2").text("Player 2 Win!");
    $(".dice .p1").text("Player 1");
    $(".dice .p2").text("🏆 Player 2");
  } else {
    $("h2").text("Draw 🤝🏼");
    $(".dice .p1").text("Player 1");
    $(".dice .p2").text("Player 2");
  }
}

game();
