const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let totalPrice = 0;

  for (let item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      totalPrice += prices[item];
      stock[item]--;
    }
  }

  return totalPrice;
}
console.log(`Total price: $${myBill()}`);
console.log("Updated :", stock); 
