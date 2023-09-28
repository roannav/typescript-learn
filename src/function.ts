// All errors generated after transpiling from TypeScript
// to JavaScript are intentional.  They show sample code
// to avoid writing.  See comments below.


// Function

interface Person {
  name: string;
  phone: string;
  address: string;
  ownsHome?: boolean;  /* optional property */
}

function updatePerson( person: Person, phone: string, address?: string, ownsHome = false): void {
  if (phone)
    person.phone = phone;
  if (address)
    person.address = address;

  // uses default, if not passed as an argument
  person.ownsHome = ownsHome;
}

const ben: Person = {
  name: "Ben Anderson",
  phone: "111-111-1111",
  address: "1 Alpha St",
}

console.log("Ben", ben);

updatePerson( ben, "222-111-1111");
console.log("Ben", ben);

updatePerson( ben, "222-111-1111", "1 Beta Ave");
console.log("Ben", ben);

updatePerson( ben, "222-111-1111", "1 Gamma Place", true);
console.log("Ben", ben);


////////////////////////////////////////////////////////////////////////

type PrintItem = string | number | boolean;

function printMe( s1: PrintItem, ...rest: PrintItem[]) : void {
  console.log(s1);
  rest.forEach((a) => console.log(a));
}

printMe('Insect');
printMe('Penguin', 2);
printMe('Owl', 3, true);

////////////////////////////////////////////////////////////////////////

// 

////////////////////////////////////////////////////////////////////////
