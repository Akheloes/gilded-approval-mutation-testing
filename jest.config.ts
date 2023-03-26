module.exports = {
  preset: "./jest-preset.js",
  testEnvironment: "node",
  testMatch: ['**/?(*.)+(spec|test).+(ts)'],
  transform: {
    '^.+\\.(ts)$': 'babel-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  testPathIgnorePatterns: ["node_modules"],
  coveragePathIgnorePatterns: ["node_modules"],
  globals: {
    'babel-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  moduleDirectories: ['node_modules', 'src'],
  coverageReporters: [
    'text',
    'lcov'
  ]
}
