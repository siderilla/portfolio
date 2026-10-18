class Project {
	constructor({ title, description, tags, status, link, thumbnail }) {
		this.title = title
		this.description = description
		this.tags = tags
		this.status = status
		this.link = link
		this.thumbnail = thumbnail || null
	}
}

const projects = [
	// MUNCHY CANDY temporarily removed from the carousel (files kept in projects/candies.* / css/candies.css / js/candies.js)
]