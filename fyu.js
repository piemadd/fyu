function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

var elems = Array.from(document.body.getElementsByTagName("*"));
for (elem in elems) {
	if (elems[elem].classList.contains('dontNuke')) {
		delete elems[elem];
	}
}

async function shiftHorizontalRandom() { // Shifts each element randomly left or right 4 times per second
	
	while (true) {
		for (elem in elems) {
			elems[elem].style.transform = "none";
			elems[elem].style.transform = `translateX(${getRandomInt(-200, 100)}px)`;
		};
		await sleep(250);
	};
};

async function shiftVerticalRandom() { // Shifts each element randomly up or down 4 times per second
	
	while (true) {
		for (elem in elems) {
			elems[elem].style.transform = "none";
			elems[elem].style.transform = `translateY(${getRandomInt(-200, 100)}px)`;
		};
		await sleep(250);
	};
};

async function shiftRandom() { // Shifts each element randomly around the screen 4 times per second
	shiftHorizontalRandom();
	shiftVerticalRandom();
};

async function rotateRandom() { // Rotates each element randomly 4 times per second
	
	while (true) {
		for (elem in elems) {
			elems[elem].style.transform = `rotate(${getRandomInt(0, 359)}deg)`;
		};
		await sleep(250);
	};
};

async function runAway() { // Makes every element "run away" from the cursor when hovered over
	
	for (elem in elems) {
		elems[elem].addEventListener('mouseover', moveFromMouse);
	};
	while (true) {
		await sleep(250);
	};
};

async function moveFromMouse(e) { // The actual funtion run by runAway()
	e.target.style.transform = "none";
	e.target.style.transform = `translate(${getRandomInt(-100, 50)}px, ${getRandomInt(-100, 50)}px)`;
}

async function colorsRandom() { // Changes every element's color and background color every 2.5 seconds
	
	while (true) {
		for (elem in elems) {
			let currentBack = elems[elem].style.backgroundColor;
			let currentColor = elems[elem].style.color;
			elems[elem].animate([ 
				// keyframes ${getRandomInt(0, 256)}
				{ backgroundColor: currentBack, color: currentColor },
				{ backgroundColor: `rgb(${getRandomInt(0, 256)},${getRandomInt(0, 256)},${getRandomInt(0, 256)})`, color: `rgb(${getRandomInt(0, 256)},${getRandomInt(0, 256)},${getRandomInt(0, 256)})` },{ backgroundColor: currentBack, color: currentColor }
				], {
				// timing options
				duration: 2500,
				easing: 'ease-in-out',
				iterations: 1
			});
		};
		await sleep(2500);
	};
};

async function opacityRandom() { // Changes every element's opacity every 5 seconds
	while (true) {
		for (elem in elems) {
			elems[elem].animate([
				// keyframes
				{ opacity: 1 },
				{ opacity: Math.random() * 2 }, // yes i know this is out of range just shut up i want things to be more opaque than not more often
				{ opacity: 1 }
				], {
				// timing options
				duration: 5000,
				easing: 'ease-in-out',
				iterations: 1
			});
		};
		await sleep(5000);
	};
};

async function makeItHell() {
	shiftRandom();
	runAway();
	colorsRandom();
	opacityRandom();
};