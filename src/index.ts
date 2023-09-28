// All errors generated after transpiling from TypeScript
// to JavaScript are intentional.  They show sample code
// to avoid writing.  See comments below.


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
startYear = "mistake";


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
 (typeof unknownType === 'string'));   // true
console.log("(typeof unknownType === 'object') is",
 (typeof unknownType === 'object'));   // false


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

mixed.push("ok");
mixed.push(true);
console.log("mixed array", mixed);

