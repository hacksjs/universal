// @ts-check

// HOST DEPENDENCIES
import { exec as execNonPromise } from 'node:child_process'
import { resolve as resolvePath } from 'node:path'
import { promisify } from 'node:util'

const exec = promisify(execNonPromise)

/**
 * Compile TypeScript definition files.
 *
 * @param {Object} config Configuration object.
 * @param {string} config.src_dir Path to the package's `src` directory.
 * @param {string} config.dist_dir Path to the target `dist` directory.
 * @throws `TypeError` if missing or invalid parameters.
 */
const buildTypes = async ({ src_dir, dist_dir }) => {
  if (!src_dir || !dist_dir) {
    throw new TypeError('Missing input parameters')
  }

  /*

  We must execute `tsc` programmatically so we can dynamically set the
  target `outDir`, which cannot be hardcoded into the `tsconfig.json` files
  because it changes depending on the package being built.

  https://www.typescriptlang.org/docs/handbook/esm-node.html

  */

  const out_dir = resolvePath(dist_dir, 'lib')

  try {
    const { stdout, stderr } = await exec(`npx tsc --outDir ${out_dir}`)

    if (stderr) {
      console.error(`stderr: ${stderr}`)
      return
    }
    console.log(`stdout:\n${stdout}`)
  } catch (e) {
    console.error(e)
  }
}

export { buildTypes }
