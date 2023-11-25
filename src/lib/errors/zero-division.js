// @ts-check

// Parent error class.
import { ArithmeticError } from './arithmetic'

/**
 * Error type representing a mistake passing a zero value as the second argument
 * for a division or modulo operation.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new ZeroDivisionError('Zero value provided for division')
 */
class ZeroDivisionError extends ArithmeticError {}

export {
  ZeroDivisionError,
}
