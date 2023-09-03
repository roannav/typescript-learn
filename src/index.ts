// All errors generated after transpiling from TypeScript
// to JavaScript are intentional.  They show sample code
// to avoid writing.  See comments below.

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

console.log("There is no error, when you reassign the value of a variable " +
  "with type 'unknown'.  It can be assigned to a value with a different type.");
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


// No error, while declaring.
let foo: never;

// This results in an error:
// error TS2322: Type 'string' is not assignable to type 'never'.
let goo: never = "goo";

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

type Person = [string, number, string?];

const people: Person[] = [
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

////////////////////////////////////////////////////////////////////////

// Index Signatures
// when you don't know the name of the object properties in advance

const groceryList: { [index: string]: number } = {};
groceryList.apples = 3;
groceryList.oranges = 2;
groceryList.lime = 1;
console.log("groceryList");
console.log(groceryList);

////////////////////////////////////////////////////////////////////////

// Enum

enum numberWords {
  Zero,
  One,
  Two
}

console.log(numberWords.Two);  // 2


////////////////////////////////////////////////////////////////////////

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear  /* separator can be ; or , or even no separator */
  type: CarType
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,  /* good , */
  type: carType,
  model: carModel
};

console.log(carYear);
console.log(carType);
console.log(car);

////////////////////////////////////////////////////////////////////////

// Union

let b: number | boolean;
b=2;
b=true;


// This results in an error:
// error TS2322: Type '"foo"' is not assignable to type 'number | boolean'.
b="foo";

b=3;
let c = b + 1;
console.log(`c is ${c}`);

let d: number | string;

d = "hi";
console.log(d[0]);  // 'h'

d = 2;
// This results in an error:
// error TS7053: Element implicitly has an 'any' type because expression
// of type '0' can't be used to index type 'Number'.
// Property '0' does not exist on type 'Number'.
console.log(d[0]);  // undefined

const oneMonthLater = (month: string | number) => {
  console.log("IN: month:", month);
  if (typeof month === "number")
    return (month % 12) + 1;

  const monthStrings = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  for(let i=0; i<12; i++)
    if (month.slice(0,3).toLowerCase().startsWith(monthStrings[i].toLowerCase()))
      return monthStrings[ (i + 1) % 12];

  console.log("WARNING: Unknown month", month);
}

console.log("Want 2.", oneMonthLater(1));
console.log("Want 12.", oneMonthLater(11));
console.log("Want 1.", oneMonthLater(12));

console.log("Want Feb.", oneMonthLater("Jan"));
console.log("Want Dec.", oneMonthLater("Nov"));
console.log("Want Jan.", oneMonthLater("Dec"));
