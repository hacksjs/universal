// @ts-check

// Parent error class.
import { LogicError } from './logic'

/**
 * Error type representing an unexpected result from a mathematical calculation.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new ArithmeticError('Unexpected sum total')
 */
class ArithmeticError extends LogicError {}

export { ArithmeticError }
