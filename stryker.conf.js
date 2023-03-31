
module.exports = {
    testRunner: 'jest',
    packageManager: 'npm',
    reporters: ['html', 'clear-text', 'progress'],
    coverageAnalysis: 'perTest',
    tsconfigFile: 'tsconfig.json',
    mutate: [
        'src/**/*.ts',
        '!src/**/*.spec.ts',
    ],
    disableTypeChecks: 'src/**/*.ts',
    jest: {
        configFile: 'jest.config.ts',
    },
    timeoutMS: 100000,
}
