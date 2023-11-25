// @ts-check

// Parent error class.
import { ArithmeticError } from './arithmetic'

/**
 * Error type representing a rounding error in a mathematical calculation.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new RoundingError('Total out-of-range of expected rounding margin')
 */
class RoundingError extends ArithmeticError {}

export {
  RoundingError,
}
