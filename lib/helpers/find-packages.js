// @ts-check

// HOST DEPENDENCIES
import { lstatSync, readdirSync } from 'node:fs'
import { resolve as resolvePath } from 'node:path'

/**
 * Find all packages within the `src` directory. Underscore-prefixed directories,
 * which encapsulate early prototypes, are ignored.
 *
 * @param {string} src_dir Root `src` directory to search.
 * @returns {Promise<string[]>} List of package names, eg ['node', 'universal', 'util'].
 */
const findPackages = async (src_dir) => {
  const root_dir = resolvePath(src_dir)

  const pkgs =
     readdirSync(root_dir)
    .filter((file) => file.indexOf('_') !== 0)
    .filter((file) => lstatSync(resolvePath(root_dir, file)).isDirectory())

  return pkgs
}

export { findPackages }
