// @ts-check

/**
 * Transform dot-noted properties to nested object structures.
 *
 * See also `flatten()`, which performs the opposite operation.
 *
 * @since 1.0.0
 * @category objects
 *
 * @param {Object} object The object to deepen.
 * @returns {Object} An new `Object` instance with new values in a deepened structure.
 *
 * @example
 *
 * const target = {
 *   'ab.cd.e': 'foo',
 *   'ab.cd.f': 'bar',
 *   'ab.g': 'baz'
 * }
 *
 * deepen(target)
 * // →
 * // {
 * //   "ab": {
 * //     "cd": {
 * //       "e": "foo",
 * //       "f": "bar"
 * //     },
 * //     "g": "baz"
 * //   }
 * // }
 */
const deepen = (object) => {
  const output = {}

  for (const objectPath in object) {
    const parts = objectPath.split('.')

    let target = output
    while (parts.length > 1) {
      const part = parts.shift()
      target = target[part] = target[part] || {}
    }

    target[parts[0]] = object[objectPath]
  }

  return output
}

export { deepen }
