const randomNumber1 = Math.floor(Math.random() * 6 + 1);

const randomNumber2 = Math.floor(Math.random() * 6 + 1);

var dice1 = document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 +".png");

var dice2 = document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 +".png");

if (randomNumber1 === randomNumber2) {
    document.querySelector(".winner").innerHTML = ("Draw");
} else if (randomNumber1 > randomNumber2) {
    document.querySelector(".winner").innerHTML = ("Player 1 wins");
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".winner").innerHTML = ("Player 2 wins");
}