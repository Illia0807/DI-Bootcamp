import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { makeSelectTasksByCategory } from "./tasksSelectors";

const TaskList = ({ categoryId }) => {
  // создаём селектор один раз на каждый categoryId
  const selectTasks = useMemo(() => makeSelectTasksByCategory(categoryId), [categoryId]);

  const tasks = useSelector(selectTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.name} - {task.completed ? "Completed" : "In Progress"}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;