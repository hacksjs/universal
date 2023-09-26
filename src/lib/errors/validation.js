// @ts-check

// Parent error class.
import { AbstractCustomError } from './abstract'

/**
 * Error type representing a generic validation error.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new ValidationError('Expected a number, received a string')
 */
class ValidationError extends AbstractCustomError {}

export { ValidationError }
