let currentIndex = 0;

function updateCarousel() {
	const cardContainer = document.getElementById('card-container')
	const project = projects[currentIndex]
	cardContainer.innerHTML = cardTemplate(project)

	if (project.link) {
		cardContainer.querySelector('.card').addEventListener('click', () => {
			window.location.href = project.link
		})
	}
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
