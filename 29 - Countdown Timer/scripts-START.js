const displayLeft = document.querySelector('.display__time-left');
const displayEnd = document.querySelector('.display__end-time');

const buttons = document.querySelectorAll('.timer__button');
const customInput = document.querySelector('.custom');

// My shot

let start = false;
let countDown;

function startCountDown() {
	start = true;
	// let time = new Date();
	// time.setSeconds(time.getSeconds( + this.dateset.time));
	countDown = this.dataset.time;
	display();
	// console.log(countDown);
}

// buttons.forEach(button => button.addEventListener('click', startCountDown));

function display() {
	if (!start) return;

	let secondsLeft = countDown;
	const hours = Math.floor(secondsLeft / 3600);
	secondsLeft = secondsLeft % 3600;
	const minutes = Math.floor(secondsLeft / 60);
	secondsLeft = (secondsLeft % 60);

	let text;

	if (hours > 0 ) {
		text = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + 
		':' + (secondsLeft < 10 ? '0' + secondsLeft : secondsLeft);
	} else {
		text = (minutes < 10 ? '0' + minutes : minutes) + 
		':' + (secondsLeft < 10 ? '0' + secondsLeft : secondsLeft);
	}

	displayLeft.textContent = text;

	countDown --;

	if (countDown === 0 ) {
		displayLeft.textContent = "";
		start = false;
	}

	console.log(hours, minutes, secondsLeft);
}

// Not a good use here since interval might stop at some situation
setInterval(display, 1000);


// Wesbos's solution

let countdown;

function timer(seconds) {
	// Clear any existing timer
	clearInterval(countdown);

	const now = Date.now();
	const then = now + seconds * 1000;

	displayTimeLeft(seconds);
	displayEndTime(then);

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		if (secondsLeft < 0 ) {
			clearInterval(countdown);
			return;
		}
		displayTimeLeft(secondsLeft);
	}, 1000);
}


function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const secondsLeft = (seconds % 60);
	const display = `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;

	displayLeft.textContent = display;
}

function displayEndTime(timestamp) {
	const end = new Date(timestamp);
	const hours = end.getHours();
	const minutes = end.getMinutes();
	displayEnd.textContent = `Be back at ${hours > 12 ? hours - 12 : hours}:${minutes}`;
}

function startTimer() {
	timer(parseInt(this.dataset.time));
}

function startCustomizedtimer(e) {
	e.preventDefault();
	const mins = this.minutes.value;
	timer(mins * 60);

	this.reset();

}

buttons.forEach(button => button.addEventListener('click', startTimer));
// Element with a name can be directly selected
document.customForm.addEventListener('submit', startCustomizedtimer);
