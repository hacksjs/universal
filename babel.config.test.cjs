/*

Babel configuration for test builds.

This alternative Babel configuration file is referenced from `jest.config.js`
and is used to dynamically further transform the built JavaScript artifacts
when the tests are run. This is required to create JavaScript code that is
compatible both with Jest and the local-installed version of Node.

https://babeljs.io/docs/en/config-files

*/

'use strict'

module.exports = function (api) {
  api.cache(true)

  const presets = [
    [

      // Make necessary changes to the `@babel/preset-env` configuration, so
      // the JavaScript files are compiled to a format that is compatible with
      // both Jest and the current version of Node installed locally.
      // https://babeljs.io/docs/en/babel-preset-env

      '@babel/preset-env',
      {
        // Jest does not yet fully support native ES Modules. So, when running
        // the tests only, we must transform the source JS files to the CommonJS
        // module format.
        // https://jestjs.io/docs/ecmascript-modules
        modules: 'cjs',

        // When running the tests, obviously the tests will be run in the
        // current version of Node that is installed locally.
        // https://babeljs.io/docs/en/babel-preset-env#targets
        targets: {
          node: 'current',
        },
      },

    ],
  ]

  const plugins = []

  return {
    presets,
    plugins,
  }
}
