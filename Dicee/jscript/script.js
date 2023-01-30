var images = ["../images/dice1.png", "../images/dice2.png", "../images/dice3.png", "../images/dice4.png", "../images/dice5.png", "../images/dice6.png"];

var playerOneNumber = Math.floor(Math.random() * 6);
var playerTwoNumber = Math.floor(Math.random() * 6);

console.log(playerOneNumber);
console.log(playerTwoNumber);

console.log(document.querySelector("img.player-one"));

// document.querySelector("img.#player-one").setAttribute("src", images[playerOneNumber]);
// document.querySelector("img.#player-two").setAttribute("src", images[playerTwoNumber]);