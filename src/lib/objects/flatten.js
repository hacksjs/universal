// @ts-check

/**
 * Transform a nested object structure to a flattened object with
 * dot-noted properties at the top-level.
 *
 * See also `deepen()`, which performs the opposite operation.
 *
 * @since 1.0.0
 * @category objects
 *
 * @param {Object} object The object to flatten.
 * @returns {Object} An new `Object` instance with new values in a flattened structure.
 *
 * @example
 *
 * const target = {
 *   "ab": {
 *     "cd": {
 *       "e": "foo",
 *       "f": "bar"
 *     },
 *     "g": "baz"
 *   }
 * }
 *
 * flatten(target)
 * // →
 * // {
 * //   'ab.cd.e': 'foo',
 * //   'ab.cd.f': 'bar',
 * //   'ab.g': 'baz'
 * // }
 */
const flatten = (object) => {
  const output = {}

  const step = (object, prev, currentDepth) => {
    currentDepth = currentDepth || 1

    Object.keys(object).forEach((key) => {
      const value = object[key]
      const type = Object.prototype.toString.call(value)

      const is_array = Array.isArray(value)
      const is_object = (
        type === '[object Object]' ||
        type === '[object Array]'
      )

      const newKey = prev
        ? prev + '.' + key
        : key

      if (!is_array && is_object && Object.keys(value).length) {
        return step(value, newKey, currentDepth + 1)
      }

      output[newKey] = value
    })
  }

  step(object)

  return output
}

export { flatten }
