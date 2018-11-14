const isMatch = require("../is-match/is-match")

/**
 * Count the number of objects that match a criteria
 *
 * @param   {Object}    matchObject  Match object
 * @param   {Object[]}  source       Source input
 *
 * @return  {number}
 *
 * @tag Array
 * @signature (matchObject: Object)(source: Object[]): number
 *
 * @example
 * const scores = [{
 *  name   : "Bob",
 *  score  : 1,
 *  subject: "Math"
 * }, {
 *  name   : "Alice",
 *  score  : 10,
 *  subject: "Math"
 * }, {
 *  name   : "Hatter",
 *  score  : 10,
 *  subject: "Nature"
 * }]
 *
 * countBy({
 *  "subject": "Math"
 * })(scores)
 * // => 2
 */
module.exports = matchObject => source => {
  let result = 0

  for (let i = 0, length = source.length; i < length; i++) {
    if (isMatch(matchObject)(source[i])) {
      result = result + 1
    }
  }

  return result
}