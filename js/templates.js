function cardTemplate(project) {
	const tags = project.tags
		.map(tag => `<span class="tag">[ ${tag} ]</span>`)
		.join('')

	const thumbnail = project.thumbnail
		? `<img src="${project.thumbnail}" alt="${project.title}">`
		: `<div class="card-thumbnail-placeholder">[ NO SIGNAL ]</div>`

	return `
		<div class="card" data-link="${project.link}">
			<div class="card-status">// ${project.status}</div>
			<div class="card-thumbnail">${thumbnail}</div>
			<h3 class="card-title">${project.title}</h3>
			<p class="card-description">${project.description}</p>
			<div class="card-tags">${tags}</div>
			<button class="project-link">[ ENTER_LOG ]</button>
		</div>
	`
}