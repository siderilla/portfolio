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
	new Project({
		title: "MUNCHY CANDY",
		description: "Catch the candy before it disappears",
		tags: ["ILLUSTRATION", "ANIMATION", "JS"],
		status: "IN PROGRESS",
		link: "projects/candies.html",
		thumbnail: null
	}),
]