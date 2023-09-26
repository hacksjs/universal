// @ts-check

// Parent error class.
import { ParameterError } from './parameter'

/**
 * Error type representing a call to a function that passes too many parameters.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new UnexpectedParameterError('Too many parameters')
 */
class UnexpectedParameterError extends ParameterError {}

export { UnexpectedParameterError }
