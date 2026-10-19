function cardTemplate(project) {
	const tags = project.tags
		.map(tag => `<span class="tag">[ ${tag} ]</span>`)
		.join('')

	const thumbnail = project.thumbnail
		? `<img src="${project.thumbnail}" alt="${project.title}">`
		: `<div class="card-thumbnail-placeholder">[ NO SIGNAL ]</div>`

	const actionsHtml = project.actions
		? `<div class="card-actions">${project.actions.map(action => action.href
			? `<a class="project-link${action.secondary ? ' secondary' : ''}" href="${action.href}"${action.external ? ' target="_blank" rel="noopener"' : ''}>[ ${action.label} ]</a>`
			: `<span class="project-link pending">${action.label} [ COMING SOON ]</span>`
		).join('')}</div>`
		: `<button class="project-link">[ ENTER_LOG ]</button>`

	return `
		<div class="card"${project.link ? ` data-link="${project.link}"` : ''}>
			<div class="card-status">// ${project.status}</div>
			<div class="card-thumbnail">${thumbnail}</div>
			<h3 class="card-title">${project.title}</h3>
			<p class="card-description">${project.description}</p>
			<div class="card-tags">${tags}</div>
			${actionsHtml}
		</div>
	`
}