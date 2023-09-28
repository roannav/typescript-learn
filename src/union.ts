// All errors generated after transpiling from TypeScript
// to JavaScript are intentional.  They show sample code
// to avoid writing.  See comments below.

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



////////////////////////////////////////////////////////////////////////

// 

////////////////////////////////////////////////////////////////////////