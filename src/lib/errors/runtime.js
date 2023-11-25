// @ts-check

// Parent error class.
import { AbstractCustomError } from './abstract'

/**
 * Error type representing a problem that can be detected only at runtime.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new RuntimeError('Unknown error')
 */
class RuntimeError extends AbstractCustomError {}

export {
  RuntimeError,
}
