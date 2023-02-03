// Creates a drums array to store all the drum instruments 
var drums = document.querySelectorAll(".drum");

// Creates a map to match the the key with the sound 
var keySounds = {
    "w": "../sounds/crash.mp3",
    "a": "../sounds/kick-bass.mp3",
    "s": "../sounds/snare.mp3",
    "d": "../sounds/tom-1.mp3",
    "j": "../sounds/tom-2.mp3",
    "k": "../sounds/tom-3.mp3",
    "l": "../sounds/tom-4.mp3"
}

// applies the addSound function to all drums 
drums.forEach(addSound);

// function to add an event listener that makes the page play the sound of the instrument that was clicked 
function addSound(button){
    button.addEventListener("click", function(){
        playSound(button.innerText);
    });
}

// event listener when the user hits a key. It plays the matching sound of the instrument 
document.addEventListener("keydown", function(event){
    playSound(event.key);
})

// playSound function to make the key or mouse click match the instrument sound if any 
function playSound(input){

    // detects what instrument was selected according to the input (which can be a key or mouse click) 
    keyPressed = document.querySelector("." + input);
    
    // error handling if the user clicked an invalid place or pressed an invalid key 
    if (keyPressed == null){
        return;
    }

    // Plays the matching sound and makes that button flash 
    var audio = new Audio(keySounds[keyPressed.innerText]);
    audio.play();
    keyPressed.classList.add("pressed");
    var time = setTimeout(function(){
        keyPressed.classList.remove("pressed");
    }, 300);
}