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
// console.log( toString )

const toNumber = [
    Number( '123' ), // 123: number
    parseInt( '123' ), // 123: number
    parseFloat( '123' ), // 123: number
    Number( true ), // 1: number
    Number( false ), // 0: number
    Number( null ), // 0: number
    Number( undefined ), // NaN: number
    +'123', // 123: number - unary plus operator coerces to a number
    +true, // 1: number
    +null, // 0: number
    +undefined, // NaN: number
]
// console.log( toNumber )

const foo = 'foo'
const toBoolean = [
    !foo, // false: boolean
    !!foo, // true: boolean
    Boolean( 'true' ), // the string 'true' is truthy because it is a non-empty string
    Boolean( 'false' ), // the string 'false' is truthy because it is a non-empty string
]
// console.log( toBoolean )


/* --------------- Falsy Values --------------- */

// falsy means something that coerces to false
const falsyValues = {
    normalFalse: !!false,
    numberZero: !!0,
    negativeZero: !!-0,
    notANumber: !!NaN,
    emptyString: !!'',
    null: !!null,
    undefined: !!undefined,
}
// console.log( falsyValues )



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
    nonEmptyObject: { key: 'bar' },
    nonEmptyArray: [ 1, 2, 3 ],
    emptyFunction: function () { },
    emptyArrowFunction: () => { },
    emptyMethod () { },
    nonEmptyFunction: function () { return 1 },
    nonEmptyArrowFunction: () => 1,
    nonEmptyMethod () { return 1 },
    /* etc... */
}

// don't worry about this. Just for showing output
console.log(
    Object.fromEntries(
        Object.entries( truthyValues ).map( ( [ key, val ] ) => [ key, !!val ] )
    )
)