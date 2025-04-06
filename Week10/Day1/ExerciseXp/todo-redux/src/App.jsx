import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>TODO List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </>
  );
}

export default App;
