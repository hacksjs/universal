// @ts-check

/**
 * Find a value, deeply nested within an object structure.
 *
 * Equivalent to Lodash's `_.get()`.
 *
 * This function provides a convenient way to access nested properties without needing to accommodate the possibility of
 * in-between properties being undefined. This is now possible using modern ES syntax, a combination of optional chaining
 * (`?.`) and the nullish coalescing operator (`??`) to provide a fallback.
 *
 * @since 1.0.0
 * @category objects
 *
 * @param {Object} object The object to query.
 * @param {string|string[]} path Array or dot-noted string representing the path to a nested own property of `object`.
 * @param {*} [fallback] Default value if path cannot be resolved.
 * @returns {*} The resolved value, else the `fallback` value.
 *
 * @example
 *
 * const target = { 'a': [{ 'b': { 'c': 100 } }] }
 *
 * find(target, 'a[0].b.c')
 * // → 100
 *
 * find(target, ['a', '0', 'b', 'c'])
 * // → 100
 */
const find = (object, path, fallback) => {
  if (typeof path === 'string') {
    path = path.split(/[.\[\]\"]+/).filter(x => x)
  }

  if (path.length === 0) {
    return fallback
  }

  const [head, ...tail] = path
  if (!(head in object)) {
    return fallback
  }

  return find(object[head], tail, fallback)
}

export { find }
