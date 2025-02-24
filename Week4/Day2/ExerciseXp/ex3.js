// let userInfo = prompt("Give me a number");
// console.log(typeof(userInfo));
let userInfo = "";

do {
  userInfo = prompt("Give me a number");
  userInfo=Number(userInfo)
  
  console.log(typeof userInfo + userInfo);
} while (userInfo !== 10);
