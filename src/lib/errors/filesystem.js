// @ts-check

// Parent error class.
import { ResourceError } from './resource'

/**
 * Error type representing a problem performing an operation on the local
 * filesystem, or a remote filesystem.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new FilesystemError('Could not write cache files')
 */
class FilesystemError extends ResourceError {}

export {
  FilesystemError,
}
