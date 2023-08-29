interface Employee {
  name: string;
  address: {
    city: string;
    state: string;
    country: string;
  };
  salary: number;
  completedTraining: boolean;

  /* optional properties */
  age?: number;
  gender?: string;
}

// Declare directly
const Sonya: Employee = {
  name: 'Sonya Bui',
  address: {
    city: 'Anaheim',
    state: 'CA',
    country: 'USA',
  },
  salary: 100000,
  completedTraining: true,
};
 
console.log("Employee Sonya");
console.log(Sonya);


// This results in an error:
// because we didn't include the non-optional properties.
// error TS2739: Type '{ name: string; }' is missing the following properties from type 'Employee': address, salary, completedTraining
const Bill: Employee = {
  name: 'Bill Moore',
}
console.log("Employee Bill");
console.log(Bill);



////////////////////////////////////////////////////////////////////////

const song: { title: string, artist: string, year: number } = {
  title: "Perfect",
  artist: "Ed Sheeran",
  year: 2016,
}

song.year = 2017;  // correct the year
console.log("song is", song);


// This results in an error:
// error TS2322: Type 'boolean' is not assignable to type 'string'.
song.title = true;

////////////////////////////////////////////////////////////////////////

let startYear: number = 1980;

// This results in an error:
// error TS2322: Type 'string' is not assignable to type 'number'.
//startYear = "mistake";


////////////////////////////////////////////////////////////////////////

// 'any' will prevent type checking
let anyType: any = 5;
console.log( `anyType is ${anyType}`);
anyType = false;
console.log( `anyType is ${anyType}`);
anyType = "hi";
console.log( `anyType is ${anyType}`);


////////////////////////////////////////////////////////////////////////

console.log("There is no error, when you reassign the value of a variable with type unknown.  It can be assigned to a value with a different type.");
let unknownType: unknown = 2;
console.log( `unknownType is ${unknownType}`);
unknownType = true;
console.log( `unknownType is ${unknownType}`);
unknownType = "pen";
console.log( `unknownType is ${unknownType}`);
console.log("(typeof unknownType === 'string') is",
 (typeof unknownType === 'string'));
console.log("(typeof unknownType === 'object') is",
 (typeof unknownType === 'object'));


////////////////////////////////////////////////////////////////////////

// array of numbers
const ages: number[] = [ 1, 3, 4, 6];
console.log('ages');
console.log(ages);

// This results in an error:
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
ages.push('wrong');


////////////////////////////////////////////////////////////////////////

// array of 'unknown' types
const mixed: unknown[] = [ 4, "four", false];
console.log("mixed array", mixed);


////////////////////////////////////////////////////////////////////////

const somePrimes: readonly number[] = [2, 3, 5, 7];
console.log("somePrimes", somePrimes);


////////////////////////////////////////////////////////////////////////

const electionResults: readonly { name: string, votes: number }[] = [
  { name: "James", votes: 31 },
  { name: "Jane", votes: 42 },
];
console.log("electionResults", electionResults);
console.log(`James has ${electionResults[0].votes} votes`);
electionResults[0].votes = 49;

// Even though 'readonly', was able to change votes
console.log(`James has ${electionResults[0].votes} votes`);

// This results in an error:
// error TS2542: Index signature in type 'readonly { name: string; votes: number; }[]' only permits reading.
electionResults[0] = { name: "James2", votes: 10000};
console.log("electionResults", electionResults);

// This results in an error:
// error TS2339: Property 'push' does not exist on type 'readonly { name: string; votes: number; }[]'.
electionResults.push( { name: "Zach", votes: 20000});
console.log("electionResults", electionResults);


////////////////////////////////////////////////////////////////////////

// inferred types
const book = {
  title: "War and Peace",
  author: "Leo Tolstoy",
  numPages: 871,
}

// ok
book.numPages = 24;

// This results in an error:
// Error TS2322: Type 'string' is not assignable to type 'number'.
book.numPages = "many!";

// we don't know all the book genres (ie  the names of the properties 
// in the object), so use index signatures.
const bookGenreQuantity: { [index: string]: number } = {}
bookGenreQuantity.Adventure = 5;
bookGenreQuantity.Biography = 4;
bookGenreQuantity.Horror = 3;

bookGenreQuantity.Adventure = 3.1;
bookGenreQuantity.Adventure = 10000;
 
// This results in an error:
// error TS2322: Type 'undefined' is not assignable to type 'number'.
bookGenreQuantity.Biography = undefined;

// This results in an error:
//error TS2322: Type 'null' is not assignable to type 'number'.
bookGenreQuantity.Biography = null;

// This results in an error:
// error TS2322: Type 'string' is not assignable to type 'number'.
bookGenreQuantity.Horror = "none";


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
