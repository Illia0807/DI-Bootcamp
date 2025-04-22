/////////////////////////ex1///////////////////////
// type Person = {
//   name: string;
//   age: number;
// };


// type Address = {
//   street: string;
//   city: string;
// };

// type PersonWithAddress = Person & Address;
// const personWithAddress: PersonWithAddress = {
//   name: "Alice",
//   age: 30,
//   street: "123 Main St",
//   city: "Wonderland"
// };

///////////////ex2///////////////////////
// function describeValue(value: number | string): string {
//   if (typeof value === "number") {
//     return "This is a number";
//   } else if (typeof value === "string") {
//     return "This is a string";
//   }
// }


///////////////////////ex3///////////////////////
// let someValue: any = "hi";

// let strValue: string = someValue as string;
// // let strValue = <string>someValue;
// console.log(strValue.toUpperCase()); 

//////////////////////////ex4///////////////////////
// function getFirstElement(arr: (number | string)[]): string {
//   return arr[0] as string;
// }

// const res1 = getFirstElement(["hi", 11, "bye"]);
// console.log(res1);
// const res2 = getFirstElement([1, 2, 3]);
// console.log(res2);


//////////////////////////ex5///////////////////////
// function logLength<T extends { length: number }>(value: T): void {
//   console.log(value.length);


// }
// logLength("Hello");
// logLength([1, 2, 3]);

//////////////////////////ex6///////////////////////



// type Person = {
//   name: string;
//   age: number;
// };

// type Job = {
//   position: string;
//   department: string;
// };

// type Employee = Person & Job;

// function describeEmployee(employee: Employee): string {
//   if (employee.position === "manager") {
//     return `${employee.name} is a manager in the ${employee.department} department.`;
//   } else if (employee.position === "slut") {
//     return `${employee.name} is a slut in the ${employee.department} department.`;
//   } else {
//     return `${employee.name} works as a ${employee.position} in the ${employee.department} department.`;
//   }
// }

// const emp1: Employee = {
//   name: "bobik",
//   age: 30,
//   position: "manager",
//   department: "securety"
// };

// const emp2: Employee = {
//   name: "pisa",
//   age: 25,
//   position: "slut",
//   department: "services"

// };
// console.log(describeEmployee(emp1));
// console.log(describeEmployee(emp2));


//////////////////ex7/////////////////////////
//we dont pass a generics an Ziv said thath we work with this tommorow