import {arr}  from "./data.js";


function avrAge  (newArr){
        const totalAge=newArr.reduce((sum, item)=>sum+item.age,0)
        const avreAge=totalAge/ newArr.length;
        return console.log("Aver.. age",avreAge);
        
        
}
console.log(arr);

avrAge(arr);