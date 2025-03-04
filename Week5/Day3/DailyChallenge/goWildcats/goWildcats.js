const gameInfo = [
        {
          username: "john",
          team: "red",
          score: 5,
          items: ["ball", "book", "pen"]
        },
        {
          username: "becky",
          team: "blue",
          score: 10,
          items: ["tape", "backpack", "pen"]
        },
        {
          username: "susy",
          team: "red",
          score: 55,
          items: ["ball", "eraser", "pen"]
        },
        {
          username: "tyson",
          team: "green",
          score: 1,
          items: ["book", "pen"]
        },
       ];
const newArr=[]
gameInfo.forEach(user=> newArr.push( user.username.concat('!')))
console.log(newArr);

const winners=[];
gameInfo.forEach(user=>(user.score>5)?winners.push(user.username):null)
console.log(winners);

const sumScore= gameInfo.reduce((acc,user)=> acc + user.score,0);
console.log(sumScore);


