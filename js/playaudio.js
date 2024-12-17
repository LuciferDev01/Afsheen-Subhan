var audio = new Audio('music/music.mp3'); // Ensure the path is correct

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        document.getElementById("audioButton").innerText = "Pause Music";
    } else {
        audio.pause();
        document.getElementById("audioButton").innerText = "Play Music";
    }
}