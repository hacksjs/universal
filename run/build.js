// @ts-check

/**
 * Handler for the `npm run build` command.
 */

// HOST DEPENDENCIES
import { resolve as resolvePath } from 'node:path'

// LOCAL DEPENDENCIES
import { config } from './config.js'
import {
  buildDocs,
  buildModules,
  buildManifest,
  buildTypes,
  cleanDir,
  findPackages
} from '../lib/index.js'

;(async () => {
  // const available_packages = await findPackages(config.src_dir)

  // // Get list of packages from CLI arguments.
  // // Otherwise build all packages.
  // let pkgs = process.argv.slice(2)
  // if (!pkgs.length) {
  //   pkgs = available_packages
  // }

  // await Promise.all(pkgs.map(async (package_name) => {
    // if (!available_packages.includes(package_name)) {
    //   throw new Error(`Unrecognized package name: ${package_name}`)
    // }

    console.log('Building package')

    // const src_dir = resolvePath(config.src_dir, package_name)
    // const dist_dir = resolvePath(config.dist_dir, package_name)

    const src_dir = resolvePath(config.src_dir)
    const dist_dir = resolvePath(config.dist_dir)

    await cleanDir(dist_dir)

    const pkg = await buildManifest({
      src_dir,
      dist_dir,
      targets: config.targets
    })

    await buildModules({
      src_dir,
      dist_dir,
      node_version: config.targets.node[0]
    })

    await buildTypes({
      src_dir,
      dist_dir
    })

    await buildDocs({
      src_dir,
      dist_dir,
      files: pkg.files
    })

    console.log('DONE')
    console.log('')
  // }))

})().catch(console.error)
