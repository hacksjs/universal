// @ts-check

/**
 * Mimics the behavior of V8's proprietary `Error.captureStackTrace` API.
 *
 * @param {Error} error Custom error instance to build a stack trace for.
 * @returns {void} No return value.
 */
const captureStackTrace = (error) => {
  const msg = error.message

  const stack = (new Error(msg)).stack ?? ''
  const stack_lines = stack.split('\n')

  // Remove the lines about error object constructors.
  const stack_lines_clean = [stack_lines[0], ...stack_lines.slice(3)].join('\n')

  error.stack = stack_lines_clean
}

/**
 * Merge the stack trace from an original `Error` instance into a new custom
 * `Error` instance that is replacing it.
 *
 * @param {*} replacement_error The new, custom Error instance.
 * @param {Error} original_error The original captured Error instance that's being replaced.
 * @returns {void} No return value.
 */
const mergeStackTraces = (replacement_error, original_error) => {
  // Capture stacks from `Error.prototype.stack`.
  const original_stack = original_error.stack ?? ''
  const replacement_stack = replacement_error.stack

  const original_stack_lines = original_stack.split('\n')
  const replacement_stack_lines = replacement_stack.split('\n')

  // There may be some overlap in the stack trace of the two `Error` instances.
  // For a cleaner stack trace, we remove lines from `replacement_error` that
  // already exist in `original_error`.
  const replacement_stack_lines_unique = []
  replacement_stack_lines.forEach((line) => {
    if (original_stack_lines.includes(line)) {
      return
    }
    replacement_stack_lines_unique.push(line)
  })

  const merged_stack_lines = [...replacement_stack_lines_unique, ...original_stack_lines]
  replacement_error.stack = merged_stack_lines.join('\n')
}

/**
 * Base class for custom error types.
 *
 * This component encapsulates all the logic required to extend JavaScript's
 * built-in `Error` type. It also provides a mechanism for try-catching an
 * error and replacing it with a custom error type, while preserving the stack
 * trace data of the original error.
 *
 * This error type is not intended to be thrown directly. It is meant only as a
 * base class for other error types that ARE thrown.
 *
 * @see {@link https://hacksjs.com/en/docs/packages/universal/v1/errors Online documentation}
 *
 * @example
 * class MyError extends AbstractCustomError
 */
class AbstractCustomError extends Error {
  /**
   * @param {any} [message] Error object or value.
   * @param {Error} [original_error] Original `Error` instance to replace.
   */
  constructor (message, original_error) {

    if (message instanceof Error) {
      original_error = message
      message = original_error.message
    }

    // Pass arguments to parent constructor.
    // https://mzl.la/2MgjT4z
    super(message)

    // Set the `name` property from `constructor.name`.
    //
    // Use `Object.defineProperty()` here to align with the native behavior of
    // `Object.getOwnPropertyDescriptor(Error.prototype, 'name')`.
    Object.defineProperty(this, 'name', {
      configurable: true,
      enumerable: false,
      value: this.constructor.name,
      writable: true,
    })

    // If V8's proprietary `Error.captureStackTrace` API is available, use it to
    // build stack trace information. https://v8.dev/docs/stack-trace-api
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
      if (original_error) {
        mergeStackTraces(this, original_error)
      }

      return
    }

    // Capture stack trace information for other JavaScript engines that don't
    // support `Error.captureStackTrace`.
    captureStackTrace(this)
    if (original_error) {
      mergeStackTraces(this, original_error)
    }
  }
}

export { AbstractCustomError }
