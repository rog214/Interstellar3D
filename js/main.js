var video = document.getElementById("background-video");
video.volume = 0.23;

document.addEventListener("DOMContentLoaded", function () {
	var playAudioButton = document.getElementById("play-audio-button");

	playAudioButton.addEventListener("click", function () {
		video.muted = false;
		playAudioButton.style.display = "none";
	});
});

video.addEventListener("ended", function () {
	if (window.innerWidth > 600) {
		document.body.style.backgroundImage = "url('./assets/img/bg.jpg')";
	} else {
		document.body.style.backgroundImage = "url('./assets/img/bgSmall.jpg')";
	}
	document.body.style.backgroundSize = "cover";
	document.body.style.backgroundPosition = "center";
	document.body.style.width = "100vw";
	document.body.style.height = "100vh";
	document.body.style.backgroundRepeat = "no-repeat";
	video.parentNode.removeChild(video);
	document.getElementById("linkedin-link").style.display = "block";
	document.body.style.zIndex = "999";
});
