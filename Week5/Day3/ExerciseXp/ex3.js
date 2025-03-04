const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//'bread',"carrot", "potato",'chicken',"apple", "orange".
const country = "USA";
console.log([...country]);
//['u','s','a']

let newArray = [...[,,]];
console.log(newArray);
//[undef,undef]