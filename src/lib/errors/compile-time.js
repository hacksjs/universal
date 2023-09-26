// @ts-check

// Parent error class.
import { AbstractCustomError } from './abstract'

/**
 * Error type representing any kind of error that can be easily detected at
 * compile-time, before the program is executed.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new CompileTimeError('Static type checks failing')
 */
class CompileTimeError extends AbstractCustomError {}

export { CompileTimeError }
