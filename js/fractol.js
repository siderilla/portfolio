const canvas = document.getElementById('mandelbrot');
const ctx = canvas.getContext('2d');
let currentZoomLevel = 1;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const view = {
	xMin: -2.5,
	xMax: 1,
	yMin: -1.2,
	yMax: 1.2
};

function mandelbrot(cx, cy) {
	let zx = 0;
	let zy = 0;
	let i = 0;
	const maxIterations = 150;

	while (zx * zx + zy * zy <= 4 && i < maxIterations) {
		let tmp = zx * zx - zy * zy + cx;
		zy = 2 * zx * zy + cy;
		zx = tmp;
		i++;
	}
	return i;
}

function draw() {
	const imageData = ctx.createImageData(canvas.width, canvas.height);
	const data = imageData.data;
	const maxIterations = 150;

	for (let px = 0; px < canvas.width; px++) {
		for (let py = 0; py < canvas.height; py++) {

			const cx = view.xMin + (px / canvas.width) * (view.xMax - view.xMin);
			const cy = view.yMin + (py / canvas.height) * (view.yMax - view.yMin);

			const i = mandelbrot(cx, cy);
			const index = (py * canvas.width + px) * 4;

			if (i === maxIterations) {
				data[index] = 0;
				data[index + 1] = 0;
				data[index + 2] = 0;
				data[index + 3] = 255;
			} else {
				const t = i / maxIterations;
				data[index] = Math.floor(9 * (1 - t) * t * t * t * 255);
				data[index + 1] = Math.floor(15 * (1 - t) * (1 - t) * t * t * 255);
				data[index + 2] = Math.floor(8.5 * (1 - t) * (1 - t) * (1 - t) * t * 255);
				data[index + 3] = 255;
			}
		}
	}
	ctx.putImageData(imageData, 0, 0);
}

canvas.addEventListener('click', (event) => {
	const mouseX = event.clientX;
	const mouseY = event.clientY;

	const clickX = view.xMin + (mouseX / canvas.width) * (view.xMax - view.xMin);
	const clickY = view.yMin + (mouseY / canvas.height) * (view.yMax - view.yMin);

	const zoomFactor = 2.5;
	currentZoomLevel *= zoomFactor; // Teniamo traccia di quanto abbiamo zoomato

	const currentWidth = view.xMax - view.xMin;
	const currentHeight = view.yMax - view.yMin;

	const newWidth = currentWidth / zoomFactor;
	const newHeight = currentHeight / zoomFactor;

	view.xMin = clickX - newWidth / 2;
	view.xMax = clickX + newWidth / 2;
	view.yMin = clickY - newHeight / 2;
	view.yMax = clickY + newHeight / 2;

	// DINAMICO: Più entri dentro, più aumentiamo i dettagli (fino a un massimo gestibile)
	// Nota: cambialo anche dentro la funzione draw() se usi una variabile globale!
	maxIterations = Math.floor(150 + Math.log(currentZoomLevel) * 50);

	draw();
});

// Primo avvio
draw();