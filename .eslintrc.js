module.exports = {
	root: true,
	// This tells ESLint to load the config from the package `eslint-config-custom`
	extends: ['@joekarow/eslint-config-netwerkr'],
	settings: {
		next: {
			rootDir: ['apps/*/'],
		},
	},
}
