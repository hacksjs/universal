// @ts-check

// Parent error class.
import { AbstractCustomError } from './abstract'

/**
 * Error type representing a problem with some business logic.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new LogicError('Unexpected result from sum calculation')
 */
class LogicError extends AbstractCustomError {}

export {
  LogicError,
}
