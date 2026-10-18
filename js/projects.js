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
	new Project({
		title: "UNI-BITE",
		description: "Pixel-art candy run for js13k — unicorns, rainbows, 13kb or bust.",
		tags: ["CANVAS", "JS", "JS13K"],
		status: "LIVE",
		link: "projects/unibite.html",
		thumbnail: null
	}),
	new Project({
		title: "BEFORE I GO",
		description: "A short game-jam story about leaving.",
		tags: ["GAME JAM", "JS", "ITCH.IO"],
		status: "LIVE",
		link: "projects/beforeigo.html",
		thumbnail: null
	}),
	new Project({
		title: "REFUNDMANAGER",
		description: "Full-stack refund tracker — Angular + .NET + Postgres.",
		tags: ["ANGULAR", ".NET", "POSTGRES"],
		status: "IN PROGRESS",
		link: "projects/refundmanager.html",
		thumbnail: null
	}),
]