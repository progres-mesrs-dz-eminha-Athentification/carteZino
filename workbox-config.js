module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,html,css,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};