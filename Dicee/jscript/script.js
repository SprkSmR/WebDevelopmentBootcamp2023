var images = ["../images/dice1.png", "../images/dice2.png", "../images/dice3.png", "../images/dice4.png", "../images/dice5.png", "../images/dice6.png"];

var playerOneNumber = Math.floor(Math.random() * 6);
var playerTwoNumber = Math.floor(Math.random() * 6);

document.querySelector("img.player-one").setAttribute("src", images[playerOneNumber]);
document.querySelector("img.player-two").setAttribute("src", images[playerTwoNumber]);

if (playerOneNumber > playerTwoNumber){
    document.querySelector("h1.main-header").innerHTML = "Player 1 Wins! <i class='fa-solid fa-flag'></i> ";
}
else if (playerOneNumber === playerTwoNumber){
    document.querySelector("h1.main-header").innerHTML = "It's a tie! <i class='fa-solid fa-user-tie'></i> ";    
}
else{
    document.querySelector("h1.main-header").innerHTML = "Player 2 Wins! <i class='fa-solid fa-flag'></i> ";    
}