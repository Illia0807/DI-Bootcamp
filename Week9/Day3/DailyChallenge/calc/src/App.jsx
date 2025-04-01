import { useState } from "react";
import "./App.css";
import "./Calculator.css";
import Field from "./components/Field";

function App() {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const num1 = Number(field1);
    const num2 = Number(field2);
    let res = 0;

    switch (operation) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num2 !== 0 ? num1 / num2 : "Error (division by 0) is prohibited";
        break;
      default:
        res = "Undefined";
    }

    setResult(res);
  };

  return (
    <>
      <div className="calculator">
        <h1>Operations with two numbers</h1>
        <main>
          <Field label="Number 1" value={field1} onChange={setField1} />
          <Field label="Number 2" value={field2} onChange={setField2} />
        </main>

        <select 
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>

        <button onClick={calculate}>Calculate</button>
        <h3>Result: {result}</h3>
      </div>
    </>
  );
}

export default App;
