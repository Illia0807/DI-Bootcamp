const arrNew= require('./product.js');
// console.log(arrNew);

function search(nameOfproduct){
        let product=arrNew.find(item=>item.name===nameOfproduct);
        if(product){
               console.log(product);
                
        }else{
            console.log(`${nameOfproduct} not found`);
                
        }
        
}

search("A");
search("B");
search("C");
search("D");