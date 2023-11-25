// @ts-check

// Parent error class.
import { ValidationError } from './validation'

/**
 * Error type representing an unexpected result returned from a function, service,
 * or any other discrete software component.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new UnexpectedResultError('Expected string, received null')
 */
class UnexpectedResultError extends ValidationError {}

export {
  UnexpectedResultError,
}
