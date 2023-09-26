// @ts-check

// Parent error class.
import { ResourceError } from './resource'

/**
 * Error type representing a problem with a database system.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * throw new DatabaseError('Database connection failed')
 */
class DatabaseError extends ResourceError {}

export { DatabaseError }
