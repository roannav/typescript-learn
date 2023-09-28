// All errors generated after transpiling from TypeScript
// to JavaScript are intentional.  They show sample code
// to avoid writing.  See comments below.

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



// ok 
book.title = "Pride and Prejudice";

// This results in an error:
book.title = 1;