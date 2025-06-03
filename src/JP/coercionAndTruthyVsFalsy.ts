// @ts-nocheck
console.log( 'Lesson: coercionAndTruthyVsFalsy' )

/* --------------- Coercion --------------- */
// coercion is the process of converting a value from one type to another

const toString = [
    `${ 123 }`, // '123': string
    String( 123 ), // '123': string
    ( 123 ).toString(), // '123': string

    ( 123 ).toFixed( 2 ), // '123.00': string
    ( 123 ).toFixed( 10 ), // '123.0000000000': string
    ( 123.456 ).toFixed( 2 ), // '123.46': string

    `${ [ 1, 2, 3 ] }`, // '1,2,3': string
    `${ [ 1, 2, 3 ].join( '~' ) }`, // '1~2~3': string

    `${ { key: 'foo' } }`, // '[object Object]': string
    JSON.stringify( { key: 'bar' } ), // '{"key":"bar"}': string
]

const toNumber = [
    Number( '123' ), // 123: number
    parseInt( '123' ), // 123: number
    parseFloat( '123' ), // 123: number
    parseFloat( 'abc' ), // NaN: number
    Number( true ), // 1: number
    Number( false ), // 0: number
    Number( null ), // 0: number
    Number( undefined ), // NaN: number
    +'123', // 123: number - unary plus operator coerces to a number
    +true, // 1: number
    +null, // 0: number
    +undefined, // NaN: number
]

const foo = 'foo'
const toBoolean = [
    !foo, // false: boolean
    !!foo, // true: boolean
    !!1, // true: boolean
    !!0, // false: boolean
    Boolean( 1 ), // true: boolean
    Boolean( 0 ), // false: boolean
    Boolean( 'true' ), // the string 'true' is truthy because it is a non-empty string
    Boolean( 'false' ), // the string 'false' is truthy because it is a non-empty string
]



/* --------------- Falsy Values --------------- */

// falsy means something that coerces to false
const falsyValues = {
    normalFalse: !!false, // false: boolean
    numberZero: !!0, // false: boolean
    negativeZero: !!-0, // false: boolean
    notANumber: !!NaN, // false: boolean
    emptyString: !!'', // false: boolean
    null: !!null, // false: boolean
    undefined: !!undefined, // false: boolean
    // void: !!void, // false: boolean
}



/* --------------- Truthy Values --------------- */

// truthy means something that coerces to true
// truthyValues are anything that is not falsy. Here are some examples:
const truthyValues = {
    normalTrue: true,
    numberOne: 1,
    negativeOne: -1,
    nonEmptyString: 'foo',
    emptyArray: [],
    emptyObject: {},
    nonEmptyArray: [ 1, 2, 3 ],
    nonEmptyObject: { key: 'bar' },
    emptyFunction: function () { },
    emptyArrowFunction: () => { },
    emptyMethod () { },
    nonEmptyFunction: function () { return 1 },
    nonEmptyArrowFunction: () => 1,
    nonEmptyMethod () { return 1 },
    /* etc... */
}

// don't worry about this. Just for showing output
// console.log(
//     Object.fromEntries(
//         Object.entries( truthyValues ).map( ( [ key, val ] ) => [ key, !!val ] )
//     )
// )
// {
//   normalTrue: true,
//   numberOne: true,
//   negativeOne: true,
//   nonEmptyString: true,
//   emptyArray: true,
//   emptyObject: true,
//   nonEmptyObject: true,
//   nonEmptyArray: true,
//   emptyFunction: true,
//   emptyArrowFunction: true,
//   emptyMethod: true,
//   nonEmptyFunction: true,
//   nonEmptyArrowFunction: true,
//   nonEmptyMethod: true,
// }



/* --------------- Exercises --------------- */
// which of these will log?

// if ( 123 == '123' ) console.log( `passed` )
// if ( 123 === '123' ) console.log( `passed` )
// if ( 123 === Number( '123' ) ) console.log( `passed` )

// if ( null == undefined ) console.log( `passed` )
// if ( null === undefined ) console.log( `passed` )

// if ( NaN == NaN ) console.log( `passed` )
// if ( NaN === NaN ) console.log( `passed` )

// if ( NaN ) console.log( 'passed' )
// if ( null ) console.log( 'passed' )
// if ( +'123' ) console.log( 'passed' )
// if ( +null ) console.log( 'passed' )