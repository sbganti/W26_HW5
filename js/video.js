var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;

    // Initialize volume display
    updateVolume();

    // Play Button
    document.querySelector("#play").addEventListener("click", function() {
        video.play();
        updateVolume();
    });

    // Pause Button
    document.querySelector("#pause").addEventListener("click", function() {
        video.pause();
    });

    // Slow Down - decrease playback rate by 10% (multiply by 0.9)
    document.querySelector("#slower").addEventListener("click", function() {
        video.playbackRate = video.playbackRate * 0.9;
        console.log("Playback rate: " + video.playbackRate);
    });

    // Speed Up - increase playback rate by reverse of slow down (divide by 0.9 = multiply by 1/0.9)
    document.querySelector("#faster").addEventListener("click", function() {
        video.playbackRate = video.playbackRate / 0.9;
        console.log("Playback rate: " + video.playbackRate);
    });

    // Skip Ahead - advance 10 seconds, wrap to start if past end
    document.querySelector("#skip").addEventListener("click", function() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current time: " + video.currentTime);
    });

    // Mute - toggle mute and update button text
    document.querySelector("#mute").addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            this.textContent = "Mute";
        } else {
            video.muted = true;
            this.textContent = "Unmute";
        }
    });

    // Volume Slider - update video volume and display
    document.querySelector("#slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        updateVolume();
    });

    // Old School - add oldSchool class
    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    // Original - remove oldSchool class
    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
});

function updateVolume() {
    var volumeSpan = document.querySelector("#volume");
    volumeSpan.textContent = Math.round(video.volume * 100) + "%";
}