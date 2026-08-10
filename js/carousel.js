let currentIndex = 0;

function updateCarousel() {
	const cardContainer = document.getElementById('card-container')
	cardContainer.innerHTML = cardTemplate(projects[currentIndex])

	cardContainer.querySelector('.card').addEventListener('click', () => {
		window.location.href = projects[currentIndex].link
	})
}

document.querySelector('.arrow-left').addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + projects.length) % projects.length;
	updateCarousel();
});

document.querySelector('.arrow-right').addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % projects.length;
	updateCarousel();
});

updateCarousel();
