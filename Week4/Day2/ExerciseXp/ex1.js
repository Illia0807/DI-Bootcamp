//ex1
// const people = ["Greg", "Mary", "Devon", "James"];
// people.splice(0,1)
// // people=people.slice(0,1,"Mary", "Devon", "James")
// console.log(people)
// //ex1 
// people.pop()
// people.push("Jason")
// console.log(people)
// console.log("===========================")
// people.push("Illia")
// console.log(people)
// console.log("===========================")
// console.log(people.indexOf("Mary"))
console.log("===========================")
const people = ["Mary", "Devon", "Jason", "Illia"];
newPeople=people.slice(1,3)
console.log(newPeople)
console.log("===========================")
console.log(people.indexOf("Foo"))// If the element is found, it returns its index.If not found, the method returns -1.
console.log("===========================")
let last=people.pop()
console.log(last)
console.log("===========================")
for (i of people){
        console.log(i)
}
console.log("===========================")
for (i of people){
        console.log(i)
        if (i=="Devon"){
                console.log("Not today devon")
                break
        }
}


