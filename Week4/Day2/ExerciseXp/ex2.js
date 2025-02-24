//ex2
const colors = ["Blue", "Green", "Red", "Black", "Purple"];

for(let i in colors){
        console.log(`my choise number ${i} - ${colors[i]}`);
}

console.log("================================")

const suffixes = ["1st", "2nd", "3rd", "4th", "5th"];
const colors2 = ["Blue", "Green", "Red", "Black", "Purple"];
for (let i=0;i<colors2.length;i++){
        let sufix=suffixes[i];
        console.log(`my ${sufix} choise is ${colors[i]} `)
}
