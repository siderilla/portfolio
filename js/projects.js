class Project {
	constructor({ title, description, tags, status, link, thumbnail, actions }) {
		this.title = title
		this.description = description
		this.tags = tags
		this.status = status
		this.link = link || null
		this.thumbnail = thumbnail || null
		this.actions = actions || null
	}
}

const projects = [
	// MUNCHY CANDY temporarily removed from the carousel (files kept in projects/candies.* / css/candies.css / js/candies.js)
	new Project({
		title: "UNI-BITE",
		description: "Pixel-art candy run for js13k — unicorns, rainbows, 13kb or bust.",
		tags: ["CANVAS", "JS", "JS13K"],
		status: "LIVE",
		thumbnail: null,
		actions: [
			{ label: "PLAY", href: "https://siderilla.github.io/unibite_js13k_jam/", external: true },
			{ label: "JS13K ENTRY", href: "https://js13kgames.com/games/uni-bite", external: true, secondary: true }
		]
	}),
	new Project({
		title: "BEFORE I GO",
		description: "A short game-jam story about leaving.",
		tags: ["GAME JAM", "JS", "ITCH.IO", "DESKTOP ONLY"],
		status: "LIVE",
		thumbnail: null,
		actions: [
			{ label: "PLAY", href: "https://siderilla.github.io/countdown_itch_jam/", external: true },
			{ label: "ITCH.IO PAGE", href: "https://siderilla.itch.io/beforeigo", external: true, secondary: true }
		]
	}),
	new Project({
		title: "REFUNDMANAGER",
		description: "Full-stack refund tracker — Angular + .NET + Postgres.",
		tags: ["ANGULAR", ".NET", "POSTGRES"],
		status: "IN PROGRESS",
		thumbnail: null,
		actions: [
			{ label: "FRONTEND REPO", href: "https://github.com/siderilla/refund-manager", external: true },
			{ label: "BACKEND REPO", href: "https://github.com/siderilla/RefundManager", external: true },
			{ label: "LIVE", href: null }
		]
	}),
]