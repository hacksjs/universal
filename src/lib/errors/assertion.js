// @ts-check

// Parent error class.
import { ValidationError } from './validation'

/**
 * Error type representing failed assertions.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new AssertionError('Expected a number, received a string')
 */
class AssertionError extends ValidationError {}

export { AssertionError }
