var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);
var randomDiceImageSource1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelectorAll("h1")[1].innerHTML = "🎉Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelectorAll("h1")[1].innerHTML = "Player 2 Wins! 🎉";
} else {
  document.querySelectorAll("h1")[1].innerHTML = "Draw!";
}
