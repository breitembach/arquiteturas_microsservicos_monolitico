
module.exports = {
  // globalSetup: '<rootDir>/tests/setup.ts', // dontWorking
  globalTeardown: '<rootDir>/teardown.ts',
  // 'collectCoverage': true,
  rootDir: 'tests',
  // roots: [
  //   'tests'
  // ],
  setupFiles: [
    '<rootDir>/setup.ts'
  ],
  coverageDirectory: 'coverage',
  // collectCoverageFrom: ['src'],
  // setupFilesAfterEnv: [
  //   '<rootDir>/setup2.ts'
  // ],
  testEnvironment: 'node',
  // testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  'transform': {
    '^.+\\.ts?$': 'ts-jest'
  }
}
