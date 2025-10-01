const soundButtons = document.querySelectorAll(".btn");
console.log(soundButtons);
const stopButton = document.querySelector(".stop");

let currAudio = null;

function playSound(soundFile) {

    if(currAudio) {
        currAudio.pause();
        currAudio.currentTime = 0;
    }
    
    currAudio = new Audio(soundFile);
    currAudio.play();
    console.log(currAudio);
}


soundButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const soundFile = button.getAttribute("data-sound");
        playSound(soundFile);
    })
})

stopButton.addEventListener("click", () => {
    console.log(currAudio);
    if(currAudio) {
        console.log("audio is paused");
        currAudio.pause();
        currAudio.currentTime = 0; //restart the song
    }
})

