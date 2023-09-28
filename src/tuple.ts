// All errors generated after transpiling from TypeScript
// to JavaScript are intentional.  They show sample code
// to avoid writing.  See comments below.


////////////////////////////////////////////////////////////////////////

// TUPLES

// define a tuple
let info : [ string, number, boolean];

info = [ "Allen Green", 32, true];

// This results in an error:
// wrong order of types
// error TS2322: Type 'number' is not assignable to type 'string'.
info = [ 32, "Allen Green", true];

// This results in an error:
//Error TS2322: Type '[string, number]' is not assignable to type '[string, number, boolean]'.
//Source has 2 element(s) but target requires 3.
info = [ "Allen Green", 32];

// This results in an error:
//error TS2322: Type '[string, number, true, boolean]' is not assignable to type '[string, number, boolean]'.
 //Source has 4 element(s) but target allows only 3.
info = [ "Allen Green", 32, true, true];

info = [ "Allen Green", 32, true];

// We have no type safety in our tuple for indexes 3+
info.push('Adding on additional info');
console.log(info);

let safeInfo : readonly [ string, number, boolean] = [ "Martha", 37, false];
console.log(safeInfo);

// This results in an error:
// error TS2339: Property 'push' does not exist on type 'readonly [string, number, boolean]'.
safeInfo.push('Adding on additional info');



// Named tuple
const mytime: [hour: number, minute: number, ampm: string] = [ 11, 23, "am"];


// This results in an error:
//error TS2339: Property 'minute' does not exist on type '[hour: number, minute: number, ampm: string]'.
console.log(mytime.minute);

// but minute is the 2nd element in the tuple, so mytime[1] will access the minute
console.log(mytime[1]);
let minute = mytime[1]
let paddedMinutes = ((minute < 10) ? "0" : "") + minute;

let hour = mytime[0];
let ampm = mytime[2];
console.log(`The time is ${ hour}:${paddedMinutes}${ampm}.`);


// destructuring the tuple
const [hr, minutes, amPm] = mytime;
paddedMinutes = ((minutes < 10) ? "0" : "") + minutes;
console.log(`The time is ${ hr}:${paddedMinutes}${amPm}.`);

type PersonA = [string, number, string?];

const people: PersonA[] = [
  ["Ralph", 3, "blue"],
  ["Steve", 7],
  ["Thomas", 1, "yellow"],
];

////////////////////////////////////////////////////////////////////////

// 'readonly' means that the elements of the array
//   can not be changed
let clothing: readonly string[] = ["shirt", "pants", "socks"];

// This results in an error:
// error TS2542: Index signature in type 'readonly string[]' only permits reading.
clothing[2] = "shoes";

// This results in an error:
// error TS2339: Property 'pop' does not exist on type 'readonly string[]'.
clothing.pop();