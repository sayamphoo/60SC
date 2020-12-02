var x = document.getElementById("myAudio");

var playAudio = document.getElementById("AudioPlay");

if (playAudio) {
    playAudio.addEventListener("click", myPlay, false)
}

let point = 0
function myPlay() {
    if (point === 0) {
        playAudio.src = "img/pause-button.png";
        x.play();
        point = 1
    } else {
        playAudio.src = "img/play-button.png";
        x.pause();
         point = 0;
    }
}
