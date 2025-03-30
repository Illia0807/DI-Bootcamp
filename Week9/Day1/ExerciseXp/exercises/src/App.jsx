import { useState } from "react";
import "./App.css";
import BuggyCounter from "./components/BuggyCounter";
import Child from "./components/Child";
import Color from "./components/Color";
import ErrorBoundray from "./components/ErrorBoundray";

function App() {
  const [show,setShow]=useState(true)
  return (
    <>
    {show&& <Child setShow={setShow}/>}
    <Color/>
         <ErrorBoundray fallback={"counter 1"}>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundray>
      <ErrorBoundray fallback={"counter 2"}>
        <BuggyCounter />
      </ErrorBoundray>
      <ErrorBoundray fallback={"counter 3"}>
        <BuggyCounter />
      </ErrorBoundray>
      <BuggyCounter />

    </>
  );
}

export default App;
