// All errors generated after transpiling from TypeScript
// to JavaScript are intentional.  They show sample code
// to avoid writing.  See comments below.


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
