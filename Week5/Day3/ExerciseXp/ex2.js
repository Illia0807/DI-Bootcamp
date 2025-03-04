const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["st","nd","rd","th"];
colors.forEach((color,index)=>{
let sufix=(index + 1 <=3)?ordinal[index]: "th";

console.log(`${index+1}${sufix} choise is ${color}`)
}

)
