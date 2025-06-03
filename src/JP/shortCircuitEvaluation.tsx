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
function returnVoid () {
    console.log( `called returnVoid` )
}


/* --------------- Exercises --------------- */

// if ( true || false ) console.log( `passed` )
// if ( true && false ) console.log( `passed` )

// if ( true || false && false ) console.log( `passed` )
// if ( false && false || true ) console.log( `passed` )
// if ( ( true || false ) && false ) console.log( `passed` )

// if ( returnTrue() || returnFalse() ) console.log( `passed` )
// if ( returnFalse() || returnTrue() ) console.log( `passed` )
// if ( returnVoid() || returnTrue() ) console.log( `passed` )

// if ( returnTrue() && returnFalse() ) console.log( `passed` )
// if ( returnFalse() && returnTrue() ) console.log( `passed` )
// if ( returnVoid() && returnTrue() ) console.log( `passed` )

// if ( returnFalse() || returnTrue() || returnFalse() && returnFalse() ) console.log( `passed` )