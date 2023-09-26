/*

Jest configuration specifically for running tests on type definition files.
https://github.com/jest-community/jest-runner-tsd
https://jestjs.io/docs/configuration

*/

'use strict'

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  displayName: {
    color: 'blue',
    name: 'TYPES',
  },
  runner: 'jest-runner-tsd',
  testMatch: ['**/test/types/**/[^_](*)+.test-d.ts']
}
