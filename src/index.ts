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

