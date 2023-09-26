// @ts-check

// HOST DEPENDENCIES
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve as resolvePath } from 'node:path'

/**
 * Copy and transform the `package.json` manifest file.
 *
 * @param {Object} config Configuration object.
 * @param {string} config.src_dir Path to the target `src` directory.
 * @param {string} config.dist_dir Path to the target `dist` directory.
 * @param {Object} config.targets Target runtime environments.
 * @param {string[]} config.targets.node List of minimum supported versions of Node.js.
 * @returns {Promise<Object>} Final `package.json` contents as parsed JSON object.
 * @throws `TypeError` if missing or invalid parameters.
 */
const buildManifest = async ({ src_dir, dist_dir, targets }) => {
  if (!src_dir || !dist_dir || !targets) {
    throw new TypeError('Missing input parameters')
  }

  const src_file = resolvePath(src_dir, './package.json')
  const dist_file = resolvePath(dist_dir, './package.json')

  if (!existsSync(src_file)) {
    throw new Error('Missing a manifest file (package.json)')
  }

  // @ts-ignore readFileSync returns string value that can be handled by JSON.parse
  const config = JSON.parse(readFileSync(src_file))

  // Transform Node version targets to a rule like "^16.13.0 || ^18.12.0".
  config.engines.node = targets.node.map(version => `^${version}`).join(' || ')

  writeFileSync(dist_file, JSON.stringify(config, null, 2))

  return config
}

export { buildManifest }
