type User = {
  type: "user";
  name: string;
  age: number;
};

type Product = {
  type: "product";
  id: number;
  price: number;
};

type Order = {
  type: "order";
  orderId: string;
  amount: number;
};

function isUser(data: User | Product | Order): data is User {
  return data.type === "user";
}

function isProduct(data: User | Product | Order): data is Product {
  return data.type === "product";
}

function isOrder(data: User | Product | Order): data is Order {
  return data.type === "order";
}



function handleData(data: (User | Product | Order)[]): string[] {
  return data.map((item) => {
    if (isUser(item)) {
      return `Hello, ${item.name}. You are ${item.age} years old.`;
    } else if (isProduct(item)) {
      return `Product ID: ${item.id}, Price: $${item.price}.`;
    } else if (isOrder(item)) {
      return `Order ID: ${item.orderId}, Amount: $${item.amount}.`;
    } else {
      return "Unknown data type";
    }
  });
}
const dataArray: (User | Product | Order)[] = [
  { type: 'user', name: 'bobo', age: 30 },
  { type: 'product', id: 101, price: 10 },
  { type: 'order', orderId: '12345', amount: 25 }
];

console.log(handleData(dataArray));