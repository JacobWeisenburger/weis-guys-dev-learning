// @ts-nocheck
console.log( 'Lesson: shortCircuitEvaluation' )
/* --------------- Short-circuit evaluation --------------- */

function returnTrue () {
    console.log( `called returnTrue` )
    return true
}
function returnFalse () {
    console.log( `called returnFalse` )
    return false
}
const returnVoid = () => console.log( `called returnVoid` )

// if ( returnTrue() || returnFalse() ) console.log( `returnTrue() || returnFalse()` )
// if ( returnFalse() || returnTrue() ) console.log( `returnFalse() || returnTrue()` )
// if ( returnVoid() || returnTrue() ) console.log( `returnVoid() || returnTrue()` )

// if ( returnTrue() && returnFalse() ) console.log( `returnTrue() && returnFalse()` )
// if ( returnFalse() && returnTrue() ) console.log( `returnFalse() && returnTrue()` )
// if ( returnVoid() && returnTrue() ) console.log( `returnVoid() && returnTrue()` )

// if ( returnTrue() || returnFalse() && returnFalse() ) console.log( `returnTrue() || returnFalse() && returnFalse` )

// if ( true || false && false ) console.log( `true || false && false` )
// if ( false && false || true ) console.log( `false && false || true` )
// if ( ( true || false ) && false ) console.log( `(true || false) && false` )