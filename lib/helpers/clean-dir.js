// @ts-check

// VENDOR DEPENDENCIES
import { emptyDir } from 'fs-extra'

/**
 * Clean the contents of a given directory.
 *
 * @param {string} dir Path to the target directory.
 * @throws `TypeError` if missing or invalid parameters.
 */
const cleanDir = async (dir) => {
  if (!dir) {
    throw new TypeError('Missing package name')
  }

  await emptyDir(dir)
}

export { cleanDir }
