var video = document.getElementById("background-video");
document.addEventListener("DOMContentLoaded", function () {
	var playAudioButton = document.getElementById("play-audio-button");

	video.volume = 0.25;

	playAudioButton.addEventListener("click", function () {
		video.muted = false;
		playAudioButton.style.display = "none";
	});
});

video.addEventListener("ended", function () {
	document.body.style.backgroundImage = "url('../assets/img/bg.jpg')";
	document.body.style.backgroundSize = "cover";
	document.body.style.backgroundPosition = "center";
	document.body.style.backgroundRepeat = "no-repeat";
	video.parentNode.removeChild(video);
	document.getElementById("linkedin-link").style.display = "block";
	document.body.style.zIndex = "999";
});
