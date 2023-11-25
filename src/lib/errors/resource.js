// @ts-check

// Parent error class.
import { AbstractCustomError } from './abstract'

/**
 * Error type representing a problem with an external resource.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new ResourceError('Unix command `awk` unavailable')
 */
class ResourceError extends AbstractCustomError {}

export {
  ResourceError,
}
