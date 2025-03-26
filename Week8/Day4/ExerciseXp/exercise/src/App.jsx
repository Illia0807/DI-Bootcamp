import "./App.css";
import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise from "./Exerise3";
function App() {
  const myelement = <h1>I love JSX!</h1>;
  const sum = 5 + 5;
  const element = <p> react is {sum} better with JSX</p>;
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

  return (
    <>
      <div>
        <p>Hello world!</p>
        <div>{myelement}</div>
        <div>{element}</div>
      </div>
      <div>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals arr={user.favAnimals}/>
      </div>
      <Exercise/>
    </>
  );
}

export default App;
