// @ts-check

// import { object_to_string_map } from '../_/object-to-string-map'

/**
 * Shortcut for `Object.prototype.toString()`.
 *
 * @param {*} subject Test subject.
 * @returns {string}
 */
const objectToString = (subject) => {
  return Object.prototype.toString.call(subject)
  // const value = Object.prototype.toString.call(subject)

  // Find the key of `object_to_string_map` that has the value `value`
  // return Object.keys(object_to_string_map).find(key => object_to_string_map[key] === value) ?? null
}

export {
  objectToString,
}
