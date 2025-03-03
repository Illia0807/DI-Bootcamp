let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => {
    console.log(fruit);
  });
};

const cloneGroceries = ()=>{
        let user= client;
        client="betty"
        // no becouse reference client loot to another object==="betty"
        console.log(user);
        console.log(client);

        let  shopping=groceries;
        shopping.totalPrice="35";
        // yes becouse to object we can change from reference <they bouth look to one adress in memory
        console.log(shopping.totalPrice);
        
        shopping.paid=false;
        console.log(shopping.other.paid);
        
        
}

displayGroceries();

cloneGroceries();
