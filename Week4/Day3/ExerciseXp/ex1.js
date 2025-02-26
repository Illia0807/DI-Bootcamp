function displayNumbersDivisible (divisor){
        let sum=0;
        let arr=[];
        for (let i=1;i<500;i++){
                if(i%divisor==0){
                        sum+=i;
                        arr.push(i);
                        
                }
        }
        return console.log(`${sum}\n ${arr}`);
}

displayNumbersDivisible(3);