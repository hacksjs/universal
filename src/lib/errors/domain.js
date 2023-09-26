// @ts-check

// Parent error class.
import { ValidationError } from './validation'

/**
 * Error type representing an input argument that is of the expected type but
 * whose value is outside the bounds of expected values — ie outside the type's
 * data domain.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new DomainError('Outside range of expected values')
 */
class DomainError extends ValidationError {}

export { DomainError }
