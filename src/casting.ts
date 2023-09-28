// All errors generated after transpiling from TypeScript
// to JavaScript are intentional.  They show sample code
// to avoid writing.  See comments below.

////////////////////////////////////////////////////////////////////////

// Casting

let e: unknown = "happy";

// This results in an error:
// error TS18046: 'e' is of type 'unknown'.
console.log(e.length);

console.log((e as string).length);

// Even though e is declared as 'unknown',
// the type becomes string, because e is set to "happy".
// So when you set the value, it overrides the 'unknown' declaration.
console.log("typeof e =", typeof e);  // string


////////////////////////////////////////////////////////////////////////

let playedFlag: unknown = true;

// Does not generate error.
// Using the cast 'as string' prevents a TypeScript error.
// The boolean is cast 'as string', so then you can type .length
// without generating an error.
//
// But the printed result is 'undefined',
// because the actual type is boolean,
// and you can't get the length of a boolean.
console.log((playedFlag as string).length);

console.log("typeof playedFlag =", typeof playedFlag);  // boolean

playedFlag = !playedFlag;
console.log(`playedFlag = ${playedFlag}`);

console.log( "playedFlag + 1");

// This results in an error:
// error TS18046: 'playedFlag' is of type 'unknown'.
console.log( playedFlag + 1);  // unknown(false) + 1 => 1

console.log( "<number>playedFlag + 1");
console.log( <number>playedFlag + 1);  // 1

playedFlag = !playedFlag;
console.log(`playedFlag = ${playedFlag}`);

console.log( "playedFlag + 1");

// This results in an error:
// error TS18046: 'playedFlag' is of type 'unknown'.
console.log( playedFlag + 1);  // unknown(true) + 1 => 2

console.log( "<number>playedFlag + 1");
console.log( <number>playedFlag + 1);  // 2

////////////////////////////////////////////////////////////////////////

console.log("myNumber cast test.......");
let myNumber = 4;

// The next 3 console logs, generate the same Error...
// Error: Conversion of type 'number' to type 'string' may be a mistake
// because neither type sufficiently overlaps with the other. 
// If this was intentional, convert the expression to 'unknown' first.
console.log((myNumber as string).length);  // undefined
console.log((myNumber as string));  // 4
console.log((4 as string).length);  // undefined

// Error message is suppressed.
console.log(((4 as unknown) as string).length);  // undefined

////////////////////////////////////////////////////////////////////////

// 

////////////////////////////////////////////////////////////////////////