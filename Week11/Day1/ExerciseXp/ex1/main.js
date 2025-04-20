"use strict";
/////////example 1///////////
let message = "Hello, World!";
console.log(message);
////////example 2///////////
let age = 25;
let myName = "John Doe";
console.log(`My name is ${myName} and I am ${age} years old.`);
////////example 3///////////
let myVar;
myVar = "Hello"; // myVar is a string
myVar = 42; // myVar is a number
///////example 4///////////
const myFunc = (num) => {
    if (num > 0) {
        return "Positive";
    }
    else if (num < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
};
////example 5///////////
const getDetails = (name, age) => {
    let mes = `hello: ${name}, you are: ${age}`;
    return [age, name, mes];
};
const res = getDetails("John", 25);
console.log(res);
const createPerson = (name, age) => {
    return { name, age };
};
let myPers = createPerson("Alice", 30); // { name: "Alice", age: 30 }
console.log(myPers);
/////////example 7///////////
const myInput = document.getElementById("myInput");
console.log(myInput.value); // This will be null if the input element is not found
myInput.value = "hello world";
console.log(myInput.value);
/////////example 8///////////
function getAction(role) {
    switch (role) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        default:
            return "Invalid role";
    }
}
console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: Edit content
console.log(getAction("viewer")); // Output: View content
console.log(getAction("guest")); // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role
function greet(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
    else {
        return "Hello, stranger!";
    }
}
console.log(greet());
console.log(greet("Alice"));
