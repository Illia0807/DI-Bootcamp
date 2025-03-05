const users = { user1: 18273, user2: 92833, user3: 90315 }
let newArr= Object.entries(users);
console.log(newArr);
newArr=newArr.map(user=>[user[0],user[1]*2]);
console.log(newArr);
