// @ts-check

// Parent error class.
import { LogicError } from './logic'

/**
 * Error type representing an unexpected result arising from a loop iterating
 * one time too many or too few.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new OffByOneError('Loop finished too early')
 */
class OffByOneError extends LogicError {}

export { OffByOneError }
