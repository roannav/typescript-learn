// All errors generated after transpiling from TypeScript
// to JavaScript are intentional.  They show sample code
// to avoid writing.  See comments below.

////////////////////////////////////////////////////////////////////////

// Classes

interface StoreProduct {
  aisle: string;  // eg 'B1'
}

// TODO: fix implementation of StoreProduct interface

/*
class Furniture implements StoreProduct {
  private readonly name: string;
  private readonly type: string;
  private readonly color: string;
  private price: number;

  public constructor(
    name: string,
    type: string,
    color: string,
    price: number,
    aisle: string
  ) {
    this.name = name;
    this.type = type;
    this.color = color;
    this.price = price;
    aisle = aisle;
  }

  public prettyPrint(): void {
    console.log( `${this.name} ${this.type} in ${this.color}.  ` 
      + `Price is $${this.price}.  Found in Aisle ${aisle}`);
  }

  public updatePrice( price: number) {
    this.price = price;
  }
}

const chair = new Furniture("Alicia", "chair", "white", 39.99, "C1");
chair.prettyPrint();
chair.updatePrice(20.99);
chair.prettyPrint();
*/

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

interface Ambulatory {
  walk: () => void;
}

class Animal {
  public constructor( private name: string, private type: string) {}

  public prettyPrint(): void {
    console.log(`${this.name}, a ${this.type}`);
  }
}

const harry = new Animal( "Harry", "dog");
harry.prettyPrint();

////////////////////////////////////////////////////////////////////////

// 

////////////////////////////////////////////////////////////////////////
