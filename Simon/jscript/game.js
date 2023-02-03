// Constant for the color names
const buttonColours = ["green", "red", "yellow", "blue"];

// Booleans to check game status
var checkStart = true;
var checkShowing = true;

//Arrays with the game and user patterns in the current game
var gamePattern = [];
var userPattern = [];

//Map of the color and the matching sound file
var buttonSounds = {
    "green": "../sounds/green.mp3",
    "red": "../sounds/red.mp3",
    "yellow": "../sounds/yellow.mp3",
    "blue": "../sounds/blue.mp3",
}

//Function to generate a new color randomly
function nextSequence(){
    return Math.floor(Math.random() * 4);
}

// Function to check whether the user is wrong or not
// As soon as the player makes a mistake, a false value is raised. Otherwise, the game keeps going.
function checkSequence(player, game){
    for (let i = 0; i < player.length; i++) {
        if (game[i] != player[i]){
            return false;
        }
    }
    return true;
}

// Function to generate a new game
function createGame(){
    //Generates a game size and clears the gamePattern and userPattern arrays for a new game
    var randomChosenColor;
    var gameSize = nextSequence() + 1;
    gamePattern = [];
    userPattern = [];

    //Fills the array with random colors
    for (let i = 0; i < gameSize; i++) {
        randomChosenColor = buttonColours[nextSequence()];
        gamePattern.push(randomChosenColor);
    }
}

// Function to end the game as result of a mistake
function gameOver(){
    //Tells the player it has failed and plays a sound
    $("#level-title").text("Game over! Press A key to restart");
    var audio = new Audio("../sounds/wrong.mp3");
    audio.play(); 

    //Flashes the background red
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 300);

    //Restarts the games status control booleans
    checkStart = true;
    checkShowing = true;
}

//Function to end the game as result of victory
function gameWin(){
    //Congratulates the player and restarts game status control booleans
    $("#level-title").text("Congrats! Press A key to play again");
    checkStart = true;
    checkShowing = true;
}

// Checks when the page has finished loading the DOM tree 
$(document).ready(function () {
    // Event listener for when the player hits any key 
    $(document).on("keydown", function (key) {
            // If the game has already started, it does nothing
            if (!checkStart){
                return;
            }

            // If any key other than A has been hit, it does nothing 
            if (key.key != "a"){
                return;
            }

            // If A has been hit, starts the game. Changes the title and generates a new game
            $("#level-title").text("Pay attention");
            createGame();
            // checkStart becomes false so it no longer receives key inputs
            checkStart = false;
            // Shows the player the  generated sequence 
            for (let i = 0; i < gamePattern.length; i++) {
                // it programs a delay so that the first (0) element takes 0 ms, the second (1) takes 1000 and so on
                setTimeout(function () {
                    // Flashes the color button and plays its matching sound
                    $("#" + gamePattern[i]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                    var audio = new Audio(buttonSounds[gamePattern[i]]);
                    audio.play();
                }, i * 1000);
            }
            //a delay is set so that the following code executes 1000ms after the sequence has finished
            setTimeout(function () {
                //tells the user to begin playing
                $("#level-title").text("Try to replicate it.");
                //checkShowing is set to false since the game has finished showing the sequence and it's the player's turn
                checkShowing = false;
            }, gamePattern.length * 1000)
        }
    )
    
    // Event listener for when the player clicks any button 
    $(".btn").on("click", function () {
        // If the game is still showing the pattern, it does nothing 
        if (checkShowing){
            return;
        }
        // saves the currently clicked button as a variable as to not lose it during execution
        var buttonClicked = this;

        // adds the clicked button to the userPattern array to record the player's actions
        userPattern.push($(buttonClicked).attr("id"));

        // plays the matching sound of that button
        var audio = new Audio(buttonSounds[$(buttonClicked).attr("id")]);
        audio.play();
        
        // Flashes the button pressed
        $(buttonClicked).addClass("pressed");
        setTimeout(function () {
            $(buttonClicked).removeClass("pressed");
        }, 300);

        // if the player makes any mistake, the game is over 
        if (!checkSequence(userPattern, gamePattern)){
            gameOver();
            return;
        }

        // If the userPattern array is the same size as the gamePattern array, and the execution got this far, that
        // means the player succesfully finished the game
        if (userPattern.length == gamePattern.length){
            gameWin();
            return;
        }
    })
});