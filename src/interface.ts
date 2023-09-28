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

// 

////////////////////////////////////////////////////////////////////////