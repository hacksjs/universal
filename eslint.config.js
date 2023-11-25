import globals from 'globals'

import babelParser from '@babel/eslint-parser'
import { rules } from "@hacksjs/eslint-config"

/** @type {import("eslint").Linter.FlatConfig} */
const src_files = {
  'files': [
    'src/**/*.js',
  ],
  'languageOptions': {
    'globals': {
      ...globals.node,
    },
    'parser': babelParser,
    'sourceType': 'module',
  },
  'rules': {
    ...rules.builtin,
  },
}

/** @type {import("eslint").Linter.FlatConfig} */
const test_files = {
  'files': [
    'test/**/*.js',
  ],
  'languageOptions': {
    'globals': {
      ...globals.node,
      // ...globals.browser,
      // ...globals.jest, - Jest variables are explicitly imported into test files.
    },
    'parser': babelParser,
    'sourceType': 'module',
  },
  'rules': {
    ...rules.builtin,
  },
}

export default [
  src_files,
  test_files,
]
