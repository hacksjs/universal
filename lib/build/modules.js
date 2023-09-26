// @ts-check

// HOST DEPENDENCIES
import { open } from 'node:fs/promises'
import { existsSync, mkdirSync } from 'node:fs'
import { dirname, resolve as resolvePath } from 'node:path'

// VENDOR DEPENDENCIES
// https://www.npmjs.com/package/glob
import { Glob } from 'glob'
// @babel/core API - https://babeljs.io/docs/babel-core
import { transformFileAsync } from '@babel/core'

/**
 * Transpile source JavaScript to a format suitable for Hacks.js's target
 * production environments. Uses Babel.
 *
 * @param {Object} config Configuration object.
 * @param {string} config.src_dir Path to the package's `src` directory.
 * @param {string} config.dist_dir Path to the target `dist` directory.
 * @param {string} config.node_version Minimum supported Node version.
 * @throws `TypeError` if missing or invalid parameters.
 */
const buildModules = async ({ src_dir, dist_dir, node_version }) => {
  if (!src_dir || !dist_dir || !node_version) {
    throw new TypeError('Missing input parameters')
  }

  /** @typedef {import("glob").GlobOptions} GlobOptions */
  /** @type {GlobOptions} */
  const glob_options = {
    cwd: src_dir
  }

  // Babel will automatically load the `babel.config.js` file, in this
  // repository's root directory. Optionally, those defaults can be overridden
  // here. https://babeljs.io/docs/config-files
  const babel_config = {}

  const src_pattern = '**/*.js'
  const glob = new Glob(src_pattern, glob_options)

  for await (const file of glob) {
    const src_path = resolvePath(src_dir, /** @type {string} */ (file))
    const result = await transformFileAsync(src_path, babel_config)

    if (!result || !result.code) {
      throw new Error(`Failed to parse contents of ${file}`)
    }

    const dist_path = resolvePath(dist_dir, /** @type {string} */ (file))
    const dist_path_dir = dirname(dist_path)

    if (! existsSync(dist_path_dir)) {
      mkdirSync(dist_path_dir, { recursive: true });
    }

    const file_handle = await open(dist_path, 'w')
    await file_handle.writeFile(result.code)
    await file_handle?.close()
  }
}

export { buildModules }
