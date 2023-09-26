/*

Jest configuration.

https://jestjs.io/docs/configuration

*/

'use strict'

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {

  // Differentiate "functional" tests from tests from "types" tests.
  // This shows up as a label in the CLI output.
  displayName: {
    color: 'blue',
    name: 'FUNCTIONAL',
  },

  // Collect coverage from JS/TS files that match the following path patterns.
  // This means that sources files without corresponding tests will
  // show up in the coverage metrics. Every JavaScript file in the src directory
  // counts, unless the file name is prefixed with an underscore.
  // https://jestjs.io/docs/configuration#collectcoveragefrom-array
  collectCoverageFrom: ['src/**/[^_](*)+.js'],

  // A list of Istanbul report formats to use for code coverage generation.
  // https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-reports/lib
  coverageReporters: ['text', 'lcov'],

  // The minimum acceptable thresholds for various coverage metrics. Jest will
  // fail the tests if coverage falls below these thresholds.
  // https://jestjs.io/docs/configuration#coveragethreshold-object
  coverageThreshold: {
    global: {
      branches: 99,    // 99% branch coverage
      functions: 99,   // 99% function coverage
      lines: 99,       // 99% line coverage
      statements: -10, // max 10 uncovered statements
    },
  },

  // The file extensions used by our JavaScript modules.
  moduleFileExtensions: ['js'],

  // The glob patterns Jest should use to detect test files. We use the
  // `.spec` extension for end-to-end behavior-driven tests, and the `.test`
  // extension for lower-level unit and component tests. The `.test-d.ts`
  // files are run by Jest but are used in combination with `tsd` to verify
  // the correctness of `*.d.ts` type definition files. Test files that are
  // prefixed with an underscore are ignored.
  testMatch: ['**/test/(unit|integration)/**/[^_](*)+(.spec|.test).js'],

  // Skip any tests in these paths.
  testPathIgnorePatterns: ['/__TODO__/', '/node_modules/'],

  // Load Jest plugins to enable transformation of test scripts before they are
  // executed. Because Jest's built-in support for ECMAScript Modules is still
  // experimental (https://jestjs.io/docs/ecmascript-modules), we must use Babel
  // to transform the test scripts dynamically before the tests are run. A
  // special Babel configuration, optimized for test environments, will be used.
  // https://github.com/jestjs/jest#using-babel
  // https://www.npmjs.com/package/babel-jest
  transform: {
    '^.+\\.js$': ['babel-jest', {
      configFile: './babel.config.test.cjs'
    }]
  },

}
