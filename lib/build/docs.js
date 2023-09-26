// @ts-check

// HOST DEPENDENCIES
import { resolve as resolvePath } from 'node:path'

// VENDOR DEPENDENCIES
import fs from 'fs-extra'

/**
 * Copy documentation and other "verbatim" files.
 *
 * @param {Object} config Configuration object.
 * @param {string} config.src_dir Path to the target `src` directory.
 * @param {string} config.dist_dir Path to the target `dist` directory.
 * @param {string[]} config.files List of relative file paths to copy over.
 * @throws `TypeError` if missing or invalid parameters.
 */
const buildDocs = async ({ src_dir, dist_dir, files }) => {
  if (!src_dir || !dist_dir || !files) {
    throw new TypeError('Missing input parameters')
  }

  const promises = []
  files.forEach((file) => {
    const src_file = resolvePath(src_dir, './', file)
    const dist_file = resolvePath(dist_dir, './', file)

    // Docs files are optional.
    if (!fs.existsSync(src_file)) {
      return
    }

    promises.push(new Promise((resolve, reject) => {
      fs.copySync(src_file, dist_file)
      resolve(dist_file)
    }))

  })

  await Promise.all(promises)
}

export { buildDocs }
