// All errors generated after transpiling from TypeScript
// to JavaScript are intentional.  They show sample code
// to avoid writing.  See comments below.


////////////////////////////////////////////////////////////////////////
//
//  Function Arguments: Default arg, Optional arg, and Extra Unexpected arg
//
////////////////////////////////////////////////////////////////////////


function add( a: number, b: number = 1): number {
  return a + b;
}
console.log("add(3,4) is", add(3,4));
console.log("add(3) is", add(3));  // 4, because b has default of 1

// c is optional parameter
function multiply( a: number, b: number, c?: number): number {
  return a * b * (c || 1);
}
console.log("multiply(3,4) is", multiply(3,4));
console.log("multiply(3,4,5) is", multiply(3,4,5));

// This results in an error:
// error TS2554: Expected 2-3 arguments, but got 4.
console.log("multiply(3,4,5,6) is", multiply(3,4,5,6));
