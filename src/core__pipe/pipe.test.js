const test = require( "tape" )
const { pipe } = require( "./pipe" )

/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity, the remaining functions must be unary.
 *
 * @param  {Array}  fns  The functions
 *
 * @return {Any}
 */
test( "pipe ( ...fns: Function[] ) ( ...input: mixed[] )", t => {
  const inc = input => input + 1
  const sum = ( a, b ) => a + b

  t.deepEqual(
    pipe(
      inc,
      inc,
    )( 2 ),
    4,
    "first input arity 1" )

  t.deepEqual(
    pipe(
      sum,
      inc,
    )( 2, 2 ),
    5,
    "first input arity 2" )

  t.end()
} )
