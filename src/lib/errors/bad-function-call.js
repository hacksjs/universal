// @ts-check

// Parent error class.
import { ValidationError } from './validation'

/**
 * Error type representing a defect in the invocation logic of a function or
 * object constructor.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new BadFunctionCallError('Function requires non-global context')
 */
class BadFunctionCallError extends ValidationError {}

export {
  BadFunctionCallError,
}
