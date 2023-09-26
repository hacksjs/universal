// @ts-check

/**
 * Shared configuration for the `npm run *` commands.
 */

// HOST DEPENDENCIES
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// Replicate the `__dirname` variable, which is not available in ES modules.
// https://nodejs.org/api/esm.html#esm_no_filename_or_dirname
// https://stackoverflow.com/a/50052194
const __dirname = dirname(fileURLToPath(import.meta.url))

// CONSTANTS

// Path to the `./src` directory.
const SRC_DIR = path.resolve(__dirname, '../src')

// Path to the `./dist` directory.
const DIST_DIR = path.resolve(__dirname, '../dist')

/**
 * @typedef {Object} Config
 * @property {string} Config.src_dir Path to the `src` directory.
 * @property {string} Config.dist_dir Path to the `dist` directory.
 * @property {Object} Config.targets Target runtime environments.
 * @property {string[]} Config.targets.node List of minimum supported versions of Node.js.
 */

/**
 * Shared configuration for all the run-scripts.
 * @type {Config}
 */
const config = {
  src_dir: SRC_DIR,
  dist_dir: DIST_DIR,
  targets: {
    node: ['16.13.0', '18.12.0'],
  },
}

export { config }
