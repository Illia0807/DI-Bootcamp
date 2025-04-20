import { useState } from "react";
import "./App.css";
import CategorySelector from "./features/categories/CategorySelector.jsx";
import TaskList from "./features/tasks/TaskList.jsx";
import { useSelector } from "react-redux";

function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const categories = useSelector((state) => state.categories);
 

  return (
    <>
       <div>
      <h1>Productivity Tracker</h1>

      <select onChange={(e) => setSelectedCategoryId(Number(e.target.value))}>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <TaskList categoryId={selectedCategoryId} />
    </div>
    </>
  );
}

export default App;
