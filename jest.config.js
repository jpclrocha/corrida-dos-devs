const config = {
	verbose: true,
	transformIgnorePatterns: ['"node_modules/(?!axios)/"'],
	moduleNameMapper: {
		'^.+\\.(css|less|scss)$': 'babel-jest',
		'^.+\\.svg$': 'jest-svg-transformer',
	},
	testEnvironment: 'jsdom',
}

module.exports = config
