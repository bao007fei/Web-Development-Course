var player1_Dice = Math.floor(Math.random() * 6) + 1;
var player2_Dice = Math.floor(Math.random() * 6) + 1;

console.log(player1_Dice);
console.log(player2_Dice);

image1 = document.querySelectorAll("img")[0];
image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", "images/dice" + player1_Dice + ".png");
image2.setAttribute("src", "images/dice" + player2_Dice + ".png");

if (player1_Dice > player2_Dice) {
    document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins!";
} else if (player1_Dice < player2_Dice) {
    document.querySelector(".container h1").innerHTML = "🚩 Player 2 Wins!";
} else {
    document.querySelector(".container h1").innerHTML = "Draw!";
}

