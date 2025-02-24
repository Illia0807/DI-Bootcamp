let family = {
        father: "John",
        mother: "Jane",
        son: "Michael",
        daughter: "Emily",
        pets: ["dog", "cat"],
        location: "New York"
    };
    
    for(let i in family){
        console.log(i)
}
console.log("===========================")
for(let i in family){
        console.log(family[i])
}