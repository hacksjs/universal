// @ts-check

// Parent error class.
import { ValidationError } from './validation'

/**
 * Error type representing a problem with a function parameter.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new ParameterError('Parameter destructuring not supported')
 */
class ParameterError extends ValidationError {}

export { ParameterError }
