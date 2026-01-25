// const dot = document.getElementsByClassName("dot")[0];

// setInterval(() => {
// 	dot.textContent = dot.textContent === "▄" ? " " : "▄";
// }, 400);

// // function flashingDot(element) {
// // 	element.textContent = element.textContent.replace("▄", " ");
// // }

// // flashingDot(dot);

const overlay = document.getElementById('overlay');
const logo = document.getElementById('logo');

const pixelSize = 100;

function createOverlay() {
	const cols = Math.ceil(window.innerWidth / pixelSize);
	const rows = Math.ceil(window.innerHeight / pixelSize);
	const total = cols * rows;

	for (let i = 0; i < total; i++) {
		const p = document.createElement('div');
		p.className = 'pixel';
		overlay.appendChild(p);
	}
}

function startAnimation() {
	const pixels = Array.from(document.querySelectorAll('.pixel'));

	const shuffled = pixels.sort(() => Math.random() - 0.5);

	shuffled.forEach((p, i) => {
		setTimeout(() => {
			p.style.opacity = '0';
		}, i * 15);
	});

	setTimeout(() => {
		logo.classList.add('moving');
		setTimeout(() => overlay.remove(), 1000);
	}, (pixels.length * 15) * 0.8);
}

createOverlay();
window.addEventListener('load', startAnimation);