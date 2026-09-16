const overlay = document.getElementById('overlay');
const logo = document.getElementById('logo');
const background = document.getElementById('background');
const pressAny = document.getElementById('press-any');
const mainContent = document.getElementById('main-content');

const pixelSize = 100;

// localstorage:
function checkIntroStatus() {
	const introIsDone = sessionStorage.getItem('siderilla_intro_done');

	if (introIsDone === 'true') {
		overlay.remove();
		background.remove();
		logo.remove();
		pressAny.remove();

		mainContent.style.opacity = "1";
		mainContent.style.visibility = "visible";
		return true;
	}
	return false;
}

function createOverlay() {
	const cols = Math.ceil(window.innerWidth / pixelSize);
	const rows = Math.ceil(window.innerHeight / pixelSize);

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			const p = document.createElement('div');
			p.className = 'pixel';

			const isLastCol = c === cols - 1;
			const remainW = window.innerWidth - (cols - 1) * pixelSize;
			p.style.width = isLastCol ? remainW + 'px' : pixelSize + 'px';

			const isLastRow = r === rows - 1;
			const remainH = window.innerHeight - (rows - 1) * pixelSize;
			p.style.height = isLastRow ? remainH + 'px' : pixelSize + 'px';

			overlay.appendChild(p);
		}
	}
}

function exitIntro() {
	//push the purple div + texts to the right
	background.classList.add('slide-right');
	logo.classList.add('exit');
	pressAny.classList.add('exit');

	//set visibility to the main content
	mainContent.style.opacity = "1";
	mainContent.style.visibility = "visible";

	//save status: intro is done!
	sessionStorage.setItem('siderilla_intro_done', 'true');

	document.removeEventListener('click', exitIntro);
	document.removeEventListener('keydown', exitIntro);

	// setTimeout(() => {
	// 	background.remove();
	// 	overlay.remove();
	// }, 1200);
}

function startAnimation() {
	const pixels = Array.from(document.querySelectorAll('.pixel'));
	const shuffled = pixels.sort(() => Math.random() - 0.5);

	shuffled.forEach((p, i) => {
		setTimeout(() => {
			p.style.opacity = '0';
		}, i * 15);
	});

	const timeForPixelsToDie = (pixels.length * 15) * 0.8;

	setTimeout(() => {
		logo.classList.add('moving');
		setTimeout(() => overlay.remove(), 800);

		setTimeout(() => {
			pressAny.classList.add('visible');

			document.addEventListener('click', exitIntro);
			document.addEventListener('keydown', exitIntro);

		}, 1000);

	}, timeForPixelsToDie);
}

if (!checkIntroStatus()) {
	createOverlay();
	window.addEventListener('load', startAnimation);
}