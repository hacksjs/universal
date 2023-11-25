// @ts-check

// Parent error class.
import { ParameterError } from './parameter'

/**
 * Error type representing a call to a function that omits a required parameter.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new MissingParameterError('Missing `type` parameter')
 */
class MissingParameterError extends ParameterError {}

export {
  MissingParameterError,
}
