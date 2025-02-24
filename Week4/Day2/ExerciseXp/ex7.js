const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort()
let secret=""
for(let i=0; i<names.length;i++){
        //console.log(names[i])
        for(let j=0;j<names[i].length;j){
                secret+=names[i][0]
                break
                
        }

}
console.log(secret)