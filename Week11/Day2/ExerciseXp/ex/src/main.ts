/////////////////ex1////////////////////////////
// class Employee {
//   private name: string;
//   private salary: number;
//   public position: string;
//   protected department: string;

//   constructor(name: string, salary: number, position: string, department: string) {
//     this.name = name;
//     this.salary = salary;
//     this.position = position;
//     this.department = department;
//   }

//   public getEmployeeInfo(): string {
//     return `Name: ${this.name}, Position: ${this.position}`;
//   }
// }
///////////ex2////////////////////////
// class Product {
//   readonly id: number;
//   public name: string;
//   public price: number;

//   constructor(id: number, name: string, price: number) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }

//   public getProductInfo(): string {
//     return `Product: ${this.name}, Price: $${this.price}`;
//   }
// }

// const product = new Product(1, "Laptop", 1200);
// console.log(product.getProductInfo());

///////////ex3////////////////////////
// class Animal {
//   public name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   public makeSound(): string {
//     return "Some generic animal sound";
//   }
// }

// class Dog extends Animal {
//   constructor(name: string) {
//     super(name); 
//   }


//   public makeSound(): string {
//     return "bark";
//   }
// }

// const myDog = new Dog("Buddy");
// console.log(`${myDog.name} says: ${myDog.makeSound()}`);

// ///////////ex4////////////////////////
// class Calculator {
//   static add(a: number, b: number): number {
//     return a + b;
//   }

//   static subtract(a: number, b: number): number {
//     return a - b;
//   }
// }
// console.log(Calculator.add(10, 5));      
// console.log(Calculator.subtract(10, 5));

// ///////////ex5////////////////////////
//ziv said that parth with interfaicec we can pass and work tommorrow
