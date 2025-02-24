// let sentence="This dinner is not that bad ! You cook well"
// let sentence="This movie is not so bad !"
let sentence="This dinner is bad !"
let indexNot=sentence.indexOf("not")
console.log(indexNot)
let indexBad=sentence.indexOf("bad")
console.log(indexBad)
let wordNot=sentence.slice(indexNot,indexNot+3)
// let indexBad=sentence.indexOf("bad")
let wordBad =sentence.slice(indexBad,indexBad+3)
// console.log(wordNot)
// console.log(wordBad)
console.log("=================================")

if(indexNot !== -1 && indexBad !== -1 &&indexBad>indexNot){

       let partToReplace = sentence.slice(indexNot, indexBad + 3);
       let newSentence = sentence.replace(partToReplace, "good");
    console.log(newSentence);
}else{
        console.log(sentence); 
}


