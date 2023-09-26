// @ts-check

// Parent error class.
import { ParameterError } from './parameter'

/**
 * Error type representing invalid input data.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new InvalidParameterError('Expected a number, received a string')
 */
class InvalidParameterError extends ParameterError {}

export { InvalidParameterError }
