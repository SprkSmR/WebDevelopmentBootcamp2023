var drums = document.querySelectorAll(".drum");

var keySounds = {
    "w": "../sounds/crash.mp3",
    "a": "../sounds/kick-bass.mp3",
    "s": "../sounds/snare.mp3",
    "d": "../sounds/tom-1.mp3",
    "j": "../sounds/tom-2.mp3",
    "k": "../sounds/tom-3.mp3",
    "l": "../sounds/tom-4.mp3"
}

drums.forEach(addSound);

function addSound(button){
    button.addEventListener("click", function(){
        playSound(button.innerText);
    });
}

document.addEventListener("keydown", function(event){
    playSound(event.key);
})

function playSound(input){
    keyPressed = document.querySelector("." + input);
    if (keyPressed == null){
        return;
    }
    keyPressed.classList.add("pressed");
    var audio = new Audio(keySounds[keyPressed.innerText]);
    audio.play();
    var time = setTimeout(function(){
        keyPressed.classList.remove("pressed");
    }, 300);
}