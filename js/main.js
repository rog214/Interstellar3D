var backgroundVideo = document.getElementById("background-video");
backgroundVideo.volume = 0.1;

backgroundVideo.addEventListener('loadedmetadata', function() {
    backgroundVideo.play();
});