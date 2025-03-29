import "./App.css";
import Car from "./Components/Car";
import Color from "./Components/Color";
import Events from "./Components/Events";
import Phone from "./Components/Phone";

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <Car carInfo={carinfo} />
      <Events />
      <Phone/>
      <Color/>
    </>
  );
}

export default App;
