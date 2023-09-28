// All errors generated after transpiling from TypeScript
// to JavaScript are intentional.  They show sample code
// to avoid writing.  See comments below.


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