/**
 * Remove element(s) from array by value or by filter function
 *
 * @param  {Function|mixed}  value   Value to remove
 * @param  {Array}           source  Source array
 *
 * @return {Array}
 *
 * @tag Array
 * @signature (value: Function|mixed) => (source: Array): Array
 *
 * @example
 * remove(3)([1, 2, 3])
 * // => [1, 2]
 * remove(_ => _ === 3)([1, 2, 3])
 * // => [1, 2]
 */
module.exports = value => source => {
  const result = []

  for (let i = 0, length = source.length; i < length; i++) {
    const isMatch =
      typeof value === "function"
        ? value.call(null, source[i]) === true
        : value === source[i]

    !isMatch && result.push(source[i])
  }

  return result
}