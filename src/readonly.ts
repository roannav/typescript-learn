// All errors generated after transpiling from TypeScript
// to JavaScript are intentional.  They show sample code
// to avoid writing.  See comments below.


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

// 

////////////////////////////////////////////////////////////////////////