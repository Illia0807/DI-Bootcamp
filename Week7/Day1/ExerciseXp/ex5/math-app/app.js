const _=require('lodash');
const { sum,multipl }=require('./main.js');
console.log(sum(5,2));
console.log(multipl(2,5));

const numbers=[5,2];
let total=_.sum(numbers)
console.log("lodash",total);

let mul=_.multiply(5,4)
console.log(mul);




