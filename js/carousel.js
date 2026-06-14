let currentIndex = 0;

function renderCard(project) {
	const tags = project.tags
		.map(tag => `<span class="tag">[ ${tag} ]</span>`)
		.join('')

	return `
			<div class="card" data-link="${project.link}">
			<div class="card-status">// ${project.status}</div>
			<div class="card-thumbnail">
				${project.thumbnail
			? `<img src="${project.thumbnail}" alt="${project.title}">`
			: `<div class="card-thumbnail-placeholder">[ NO SIGNAL ]</div>`
		}
			</div>
			<h3 class="card-title">${project.title}</h3>
			<p class="card-description">${project.description}</p>
			<div class="card-tags">${tags}</div>
			<button class="project-link">[ ENTER_LOG ]</button>
		</div>
	`

}

function updateCarousel() {
	const cardContainer = document.getElementById('card-container');
	cardContainer.innerHTML = renderCard(projects[currentIndex]);

	//click sulla card o sul bottone -> naviga
	cardContainer.querySelector('.card').addEventListener('click', () => {
		window.location.href = projects[currentIndex].link;
	});
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
