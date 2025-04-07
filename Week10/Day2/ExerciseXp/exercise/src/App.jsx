import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div>
        <h2>Todo List</h2>
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
