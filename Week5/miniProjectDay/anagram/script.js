let func=(arg1,arg2)=>{
        let cleanStr1 = arg1.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
        let cleanStr2 = arg2.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
 
 return cleanStr1.includes(cleanStr2)?`${arg1} is an anagram ${arg2}`:`${arg1} is NOT an anagram ${arg2}`;
}
console.log(func("Astronomer","Moon starer"));
console.log(func("School master","The classroom"));
console.log(func("The Morse Code","Here come dots"));

