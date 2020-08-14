// Get elements 
const playerButton = document.querySelector('.player__button.toggle');
// Can reduce to one
// const playerSliderVolume = document.querySelector('.player__slider[name="volume"]');
// const playerSliderRate = document.querySelector('.player__slider[name="playbackRate"]');
const playerSlider= document.querySelectorAll('.player__slider');
const playerButtonSkip = document.querySelectorAll('.player__button[data-skip]');
console.log(playerButton);
console.log(playerButtonSkip);

const vid = document.querySelector('.player__video');


const progress = document.querySelector('.progress__filled');
progress.style['flex-basis'] = "0%";

//progress bar
const bar = document.querySelector('.progress');

// Build out functions

function play(e) {
	if (vid.paused) {
		vid.play();
	} else {
		vid.pause();
	}

	// An alternative way
	// const method = Video.paused ? 'play' : 'pause';
	// video[method]();
}

// This two can combine to one
// function changeVolume() {
// 	vid.volume = this.value;
// 	console.log(this.value);

// }
 
// function changeRate() {
// 	vid.playbackRate = this.value;
// 	console.log(this.value);
// }

function changeRange() {
	vid[this.name] = this.value;
}

function skipVideo()  {
	let currentTime = vid.currentTime + parseFloat(this.dataset.skip);
	if (currentTime <= 0) {
		vid.currentTime = 0;
	} else if (currentTime >= vid.duration) {
		vid.currentTime = vid.duration;
	} else {
		vid.currentTime = currentTime;
	}
	console.log(vid.currentTime);
}

function showProgress() {
	const filled = (vid.currentTime / vid.duration) * 100;
	progress.style['flex-basis'] = filled + "%";
	// Or this way
	// progress.style.flexBasis = `${filled}%`;
}

function changeButon() {
	const icon = this.paused ? '►' : '❚ ❚'; 
	playerButton.innerText = icon;
}

function scrub(e) {
	const scrubTime = (e.offsetX / bar.offsetWidth) * vid.duration;
	vid.currentTime = scrubTime;
}

// Hook up the event listeners 
playerButton.addEventListener('click', play);
vid.addEventListener('click', play)
vid.addEventListener('play', changeButon);
vid.addEventListener('pause', changeButon);
vid.addEventListener('timeupdate', showProgress);
playerSlider.forEach(range => range.addEventListener('mousemove', changeRange));
playerButtonSkip.forEach(button => button.addEventListener('click', skipVideo)); 

// Make sure bar filled part can change with you mousedown move
let mousedown = false;
bar.addEventListener('click', scrub); 
bar.addEventListener('mousemove', (e) => {mousedown && scrub(e)});
bar.addEventListener('mousedown', () => mousedown = true);
bar.addEventListener('mouseup', () => mousedown = false);


// Audio/Video DOM reference
// https://www.w3schools.com/tags/ref_av_dom.asp
