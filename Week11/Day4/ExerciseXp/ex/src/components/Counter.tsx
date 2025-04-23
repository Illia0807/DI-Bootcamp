import { ReactNode, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [lastActionNode, setLastActionNode] = useState<ReactNode>("none");

  const increment = () => {
    setCount((prev) => prev + 1);
    setLastActionNode(<span style={{ color: "green" }}>Incremented </span>);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
    setLastActionNode(<span style={{ color: "red" }}>Decremented </span>);
  };
  return (
    <>
      <h2>Counter: {count}</h2>
      <p>Last action: {lastActionNode}</p>
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
